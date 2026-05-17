import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function SpeakToUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const setField = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${API}/contact`, form);
      toast.success(res.data?.message || "Message sent. We will be in touch.");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      const msg =
        err?.response?.data?.detail ||
        "Something broke on our side. Try again in a sec.";
      toast.error(typeof msg === "string" ? msg : "Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="speak-to-us"
      data-testid="speak-section"
      className="py-24 md:py-32 bg-[var(--brand-black)] border-t border-white/5 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-green-brand/10 blur-[140px]"
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
            <span className="section-label mb-6 inline-flex">Speak to us</span>
            <h2
              className="font-display-bold uppercase text-cream"
              style={{ fontSize: "clamp(40px, 7vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.02em" }}
            >
              Let us build something{" "}
              <span className="text-green-brand">great</span> together
            </h2>
            <p className="text-cream/65 mt-6 max-w-md text-base md:text-lg">
              No hidden fees, no copy-paste pitches. Tell us about your project
              and we will reply with a proper scope and price inside one
              business day.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <div className="flex items-center gap-4">
                <span className="text-cream/40 uppercase tracking-[0.25em] text-xs w-20">
                  Email
                </span>
                <a
                  data-testid="speak-email-link"
                  href="mailto:brandmefymedia@gmail.com"
                  className="text-cream hover:text-green-brand transition-colors break-all"
                >
                  brandmefymedia@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-cream/40 uppercase tracking-[0.25em] text-xs w-20">
                  Studio
                </span>
                <span className="text-cream/80">Remote, working worldwide</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-cream/40 uppercase tracking-[0.25em] text-xs w-20">
                  Hours
                </span>
                <span className="text-cream/80">Mon to Fri, 9 to 6</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            data-testid="speak-form"
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 card-surface p-6 md:p-10 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FieldInput
                id="speak-name"
                label="Your name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={(v) => setField("name", v)}
                required
              />
              <FieldInput
                id="speak-email"
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
              label="Company"
              placeholder="Optional"
              value={form.company}
              onChange={(v) => setField("company", v)}
            />
            <div className="flex flex-col gap-2">
              <label
                htmlFor="speak-message"
                className="text-xs uppercase tracking-[0.25em] text-cream/50"
              >
                Tell us about your project
              </label>
              <textarea
                id="speak-message"
                data-testid="speak-message"
                rows={5}
                value={form.message}
                onChange={(e) => setField("message", e.target.value)}
                placeholder="A few lines about goals, timeline and what you have already tried."
                className="bg-black/40 border border-white/10 focus:border-green-brand focus:outline-none rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 resize-none transition-colors"
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

            <p className="text-xs text-cream/40">
              By submitting, you agree to be contacted about your project. We do
              not sell or share your details.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function FieldInput({ id, label, type = "text", value, onChange, placeholder, required }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs uppercase tracking-[0.25em] text-cream/50">
        {label}
      </label>
      <input
        id={id}
        data-testid={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="bg-black/40 border border-white/10 focus:border-green-brand focus:outline-none rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 transition-colors"
      />
    </div>
  );
}
