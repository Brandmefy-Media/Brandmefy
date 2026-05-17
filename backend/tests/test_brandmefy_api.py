"""Brandmefy backend API tests - covers root, /api/contact (POST/GET), validation, persistence."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fall back to reading frontend .env if not in environment
    try:
        with open("/app/frontend/.env") as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.split("=", 1)[1].strip().strip('"').rstrip("/")
                    break
    except Exception:
        pass

API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Root health ---
class TestRoot:
    def test_root_returns_brandmefy_message(self, session):
        r = session.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Brandmefy" in data["message"]


# --- POST /api/contact validation ---
class TestContactValidation:
    def test_missing_required_returns_422(self, session):
        r = session.post(f"{API}/contact", json={"name": "x"})
        assert r.status_code == 422

    def test_invalid_email_returns_422(self, session):
        payload = {
            "name": "Test User",
            "email": "not-an-email",
            "company": "Acme",
            "message": "Hello",
        }
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_empty_name_returns_422(self, session):
        payload = {
            "name": "",
            "email": "a@b.co",
            "company": "",
            "message": "Hi there",
        }
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_empty_message_returns_422(self, session):
        payload = {
            "name": "Tester",
            "email": "a@b.co",
            "company": "",
            "message": "",
        }
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 422


# --- POST /api/contact happy path + persistence ---
class TestContactSubmission:
    def test_valid_contact_returns_200_and_persists(self, session):
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"Pytest {unique}",
            "email": "pytest@example.com",
            "company": "TestCo",
            "message": f"Automated test message {unique}",
        }
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        # Response shape
        assert set(["id", "status", "message"]).issubset(data.keys())
        assert data["status"] in ("sent", "stored")
        assert isinstance(data["id"], str) and len(data["id"]) > 0
        assert isinstance(data["message"], str) and len(data["message"]) > 0

        # Verify persistence via GET
        g = session.get(f"{API}/contact")
        assert g.status_code == 200
        items = g.json()
        assert isinstance(items, list)
        found = next((it for it in items if it.get("id") == data["id"]), None)
        assert found is not None, "Submitted contact not found in GET /api/contact"
        assert found["email"] == payload["email"]
        assert found["name"] == payload["name"]
        assert found["message"] == payload["message"]

    def test_optional_company_allowed(self, session):
        payload = {
            "name": "NoCompany User",
            "email": "nocompany@example.com",
            "message": "Hello without company",
        }
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text


# --- GET /api/contact ---
class TestContactList:
    def test_list_returns_array_without_mongo_id(self, session):
        r = session.get(f"{API}/contact")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        for it in items:
            assert "_id" not in it, "MongoDB _id leaked in response"
