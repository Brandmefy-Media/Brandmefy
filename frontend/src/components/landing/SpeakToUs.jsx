import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import SectionBadge from "@/components/landing/SectionBadge";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function SpeakToUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const setField = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    if (!form.name || !form.email || !form.message) {
      const msg = "Please fill in name, email and message.";
      toast.error(msg);
      setStatus({ type: "error", message: msg });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      const msg = "Please enter a valid email address.";
      toast.error(msg);
      setStatus({ type: "error", message: msg });
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${API}/contact`, form);
      const msg = res.data?.message || "Message sent. We will be in touch.";
      toast.success(msg);
      setStatus({ type: "success", message: msg });
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      const msg =
        err?.response?.data?.detail ||
        "Something broke on our side. Try again in a sec.";
      const finalMsg = typeof msg === "string" ? msg : "Submission failed.";
      toast.error(finalMsg);
      setStatus({ type: "error", message: finalMsg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="speak-to-us"
      data-testid="speak-section"
      className="py-24 md:py-32 bg-[var(--bg-0)] border-t border-white/5 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-yellow-brand/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 left-0 w-[420px] h-[420px] rounded-full bg-pink-brand/10 blur-[140px]"
      />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <SectionBadge label="Speak to us" shape="badge" color="pink" rotate="-5deg" />
            <h2
              className="font-anton uppercase text-white tracking-[-0.025em] mt-6"
              style={{ fontSize: "clamp(44px, 7vw, 104px)", lineHeight: 0.95 }}
            >
              Let us build something{" "}
              <span className="text-yellow-brand">great</span> together
            </h2>
            <p className="text-white/65 mt-6 max-w-md text-base md:text-lg">
              No hidden fees, no copy-paste pitches. Tell us about your project
              and we will reply with a proper scope and price inside one
              business day.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <div className="flex items-start gap-4">
                <span className="text-white/40 uppercase tracking-[0.25em] text-xs w-20 pt-0.5">
                  Email
                </span>
                <a
                  data-testid="speak-email-link"
                  href="mailto:hello@brandmefy.com"
                  className="text-white hover:text-yellow-brand transition-colors break-all"
                >
                  hello@brandmefy.com
                </a>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-white/40 uppercase tracking-[0.25em] text-xs w-20 pt-0.5">
                  Studio
                </span>
                <span className="text-white/80">
                  Coimbatore, Tamil Nadu, India
                  <br />
                  <span className="text-white/50">Working remotely worldwide</span>
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-white/40 uppercase tracking-[0.25em] text-xs w-20 pt-0.5">
                  Hours
                </span>
                <span className="text-white/80">Mon to Sat, 9 AM to 9 PM IST</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            data-testid="speak-form"
            onSubmit={submit}
            noValidate
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 card-surface p-6 md:p-10 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FieldInput
                id="speak-name"
                name="name"
                label="Your name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={(v) => setField("name", v)}
                required
              />
              <FieldInput
                id="speak-email"
                name="email"
                label="Email"
                placeholder="jane@brand.co"
                type="email"
                value={form.email}
                onChange={(v) => setField("email", v)}
                required
              />
            </div>
            <FieldInput
              id="speak-company"
              name="company"
              label="Company"
              placeholder="Optional"
              value={form.company}
              onChange={(v) => setField("company", v)}
            />
            <div className="flex flex-col gap-2">
              <label
                htmlFor="speak-message"
                className="text-xs uppercase tracking-[0.25em] text-white/50"
              >
                Tell us about your project
              </label>
              <textarea
                id="speak-message"
                name="message"
                data-testid="speak-message"
                rows={5}
                value={form.message}
                onChange={(e) => setField("message", e.target.value)}
                placeholder="A few lines about goals, timeline and what you have already tried."
                className="bg-black/40 border border-white/10 focus:border-yellow-brand focus:outline-none rounded-xl px-4 py-3 text-white placeholder:text-white/30 resize-none transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              data-testid="speak-submit"
              disabled={loading}
              className="btn-primary self-start mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending
                </>
              ) : (
                <>
                  Send message <Send size={16} />
                </>
              )}
            </button>

            {status.type === "success" && (
              <div
                data-testid="speak-success"
                role="status"
                className="flex items-start gap-3 p-4 rounded-xl border border-yellow-brand/40 bg-yellow-brand/10 text-yellow-brand"
              >
                <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  {status.message}
                </span>
              </div>
            )}
            {status.type === "error" && (
              <div
                data-testid="speak-error"
                role="alert"
                className="flex items-start gap-3 p-4 rounded-xl border border-red-400/40 bg-red-400/10 text-red-300"
              >
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  {status.message}
                </span>
              </div>
            )}

            <p className="text-xs text-white/40">
              By submitting, you agree to be contacted about your project. We
              do not sell or share your details.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function FieldInput({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs uppercase tracking-[0.25em] text-white/50"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        data-testid={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="bg-black/40 border border-white/10 focus:border-yellow-brand focus:outline-none rounded-xl px-4 py-3 text-white placeholder:text-white/30 transition-colors"
      />
    </div>
  );
}
