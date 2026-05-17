from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend setup
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'brandmefymedia@gmail.com')

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ========== Models ==========
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    email: EmailStr
    company: Optional[str] = Field(default="", max_length=200)
    message: str = Field(min_length=1, max_length=5000)


class ContactResponse(BaseModel):
    id: str
    status: str
    message: str


# ========== Routes ==========
@api_router.get("/")
async def root():
    return {"message": "Brandmefy API is running"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check.get('timestamp'), str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


def _build_contact_html(submission: ContactCreate) -> str:
    safe_company = submission.company or "Not provided"
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background:#050505; color:#F4F0E6; padding:32px;">
      <tr><td>
        <h1 style="color:#FF4D4D; font-size:24px; margin:0 0 16px 0;">New Brandmefy Inquiry</h1>
        <p style="color:#A1A1AA; margin:0 0 24px 0;">A new message just landed from the Brandmefy site.</p>
        <table cellpadding="8" cellspacing="0" style="background:#121212; border-radius:8px; width:100%;">
          <tr><td style="color:#A1A1AA; width:120px;">Name</td><td style="color:#F4F0E6;"><b>{submission.name}</b></td></tr>
          <tr><td style="color:#A1A1AA;">Email</td><td style="color:#F4F0E6;"><b>{submission.email}</b></td></tr>
          <tr><td style="color:#A1A1AA;">Company</td><td style="color:#F4F0E6;"><b>{safe_company}</b></td></tr>
          <tr><td style="color:#A1A1AA; vertical-align:top;">Message</td><td style="color:#F4F0E6;">{submission.message}</td></tr>
        </table>
        <p style="color:#A1A1AA; font-size:12px; margin-top:24px;">Sent automatically from brandmefy.com contact form.</p>
      </td></tr>
    </table>
    """


@api_router.post("/contact", response_model=ContactResponse)
async def create_contact(submission: ContactCreate):
    record_id = str(uuid.uuid4())
    doc = {
        "id": record_id,
        "name": submission.name,
        "email": submission.email,
        "company": submission.company or "",
        "message": submission.message,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "email_sent": False,
        "email_error": None,
    }

    # Attempt to send email via Resend
    try:
        params = {
            "from": f"Brandmefy <{SENDER_EMAIL}>",
            "to": [RECIPIENT_EMAIL],
            "reply_to": submission.email,
            "subject": f"New inquiry from {submission.name}",
            "html": _build_contact_html(submission),
        }
        result = await asyncio.to_thread(resend.Emails.send, params)
        doc["email_sent"] = True
        doc["resend_id"] = result.get("id") if isinstance(result, dict) else None
    except Exception as e:
        logger.error(f"Resend failed: {e}")
        doc["email_error"] = str(e)

    await db.contact_submissions.insert_one(doc)

    if not doc["email_sent"]:
        # Still return 200 since submission is stored. Surface partial state.
        return ContactResponse(
            id=record_id,
            status="stored",
            message="Thanks. Your message was saved. We will be in touch soon.",
        )

    return ContactResponse(
        id=record_id,
        status="sent",
        message="Thanks. Your message just landed in our inbox.",
    )


@api_router.get("/contact", response_model=List[dict])
async def list_contacts():
    items = await db.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return items


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
