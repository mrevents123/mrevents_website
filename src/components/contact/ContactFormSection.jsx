import { useState } from "react";
import ContactForm from "../ui/ContactForm";
import SuccessMessage from "../ui/SuccessMessage";
import ContactInfoCard from "../ui/ContactInfoCard";
import MapEmbed from "../ui/MapEmbed";

const ContactFormSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", event: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 3xl:gap-14">
      <div className="lg:col-span-3">
        {submitted ? <SuccessMessage /> : (
          <ContactForm form={form} errors={errors} onChange={handleChange} onSubmit={handleSubmit} />
        )}
      </div>
      <div className="lg:col-span-2 space-y-6">
        <ContactInfoCard />
        <MapEmbed />
      </div>
    </div>
  );
};

export default ContactFormSection;
