import { useState, useRef } from "react";
import { sanitizeForm } from "../../utils/sanitize";
import ContactForm from "../ui/ContactForm";
import SuccessMessage from "../ui/SuccessMessage";
import ErrorMessage from "../ui/ErrorMessage";
import ContactInfoCard from "../ui/ContactInfoCard";
import MapEmbed from "../ui/MapEmbed";

const RATE_LIMIT_MS = 30000;

const ContactFormSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", event: "", message: "" });
  const [errors, setErrors] = useState({});
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");
  const lastSubmit = useRef(0);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;

    const now = Date.now();
    if (now - lastSubmit.current < RATE_LIMIT_MS) {
      setServerError("Please wait before submitting again.");
      setStatus("error");
      return;
    }

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    setServerError("");
    lastSubmit.current = now;

    try {
      const sanitized = sanitizeForm(form);
      const res = await fetch(`/.netlify/functions/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitized),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
    } catch (err) {
      setServerError(err.message);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleRetry = () => {
    setStatus("idle");
    setServerError("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 2xl:gap-12 3xl:gap-14 4xl:gap-18">
      <div className="lg:col-span-3 relative">
        {status === "success" && <SuccessMessage />}
        {status === "error" && <ErrorMessage message={serverError} onRetry={handleRetry} />}
        {(status === "idle" || status === "sending") && (
          <ContactForm
            form={form}
            errors={errors}
            onChange={handleChange}
            onSubmit={handleSubmit}
            loading={status === "sending"}
            honeypot={honeypot}
            onHoneypot={(e) => setHoneypot(e.target.value)}
          />
        )}
      </div>
      <div className="lg:col-span-2 space-y-6 2xl:space-y-7 3xl:space-y-8 4xl:space-y-10">
        <ContactInfoCard />
        <MapEmbed />
      </div>
    </div>
  );
};

export default ContactFormSection;
