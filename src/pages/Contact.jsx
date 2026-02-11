import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { CONTACT_INFO } from "../constants";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import SEO from "../components/ui/SEO";

const Contact = () => {
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
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with MR Events. Reach out for enquiries, bookings, and custom event quotes."
        path="/contact"
      />
      <div className="bg-white dark:bg-navy-dark pt-28 sm:pt-32 pb-16 sm:pb-20">
        <Container>
          <SectionHeader
            tag="Get in Touch"
            title="Contact Us"
            description="Have a question or ready to plan your event? We'd love to hear from you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 3xl:gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? <SuccessMessage /> : (
                <ContactForm form={form} errors={errors} onChange={handleChange} onSubmit={handleSubmit} />
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <ContactInfoCard />
              <MapEmbed />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

const ContactForm = ({ form, errors, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} noValidate className="space-y-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Field label="Full Name" name="name" value={form.name} error={errors.name} onChange={onChange} placeholder="Your name" />
      <Field label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={onChange} placeholder="you@example.com" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="+91 00000 00000" />
      <div>
        <label htmlFor="event" className="block text-xs sm:text-sm font-medium text-navy/70 dark:text-white/70 mb-1.5">Event Type</label>
        <select id="event" name="event" value={form.event} onChange={onChange} className="w-full px-4 py-3 rounded-xl bg-cream dark:bg-navy-light border border-navy/10 dark:border-white/10 text-sm text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/40">
          <option value="">Select type</option>
          <option value="wedding">Wedding</option>
          <option value="corporate">Corporate Event</option>
          <option value="party">Private Party</option>
          <option value="launch">Product Launch</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
    <div>
      <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-navy/70 dark:text-white/70 mb-1.5">Message *</label>
      <textarea id="message" name="message" rows={5} value={form.message} onChange={onChange} placeholder="Tell us about your event..." className={`w-full px-4 py-3 rounded-xl bg-cream dark:bg-navy-light border text-sm text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/40 resize-none ${errors.message ? "border-red-400" : "border-navy/10 dark:border-white/10"}`} />
      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
    </div>
    <button type="submit" className="inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 bg-gold hover:bg-gold-light text-navy font-semibold rounded-full transition-all duration-200 shadow-lg shadow-gold/25 text-sm sm:text-base">
      Send Message <Send size={16} />
    </button>
  </form>
);

const Field = ({ label, name, type = "text", value, error, onChange, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-xs sm:text-sm font-medium text-navy/70 dark:text-white/70 mb-1.5">
      {label} {error !== undefined && "*"}
    </label>
    <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} className={`w-full px-4 py-3 rounded-xl bg-cream dark:bg-navy-light border text-sm text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/40 ${error ? "border-red-400" : "border-navy/10 dark:border-white/10"}`} />
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

const SuccessMessage = () => (
  <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl bg-cream dark:bg-navy-light border border-navy/5 dark:border-white/5">
    <CheckCircle className="w-14 h-14 text-green-500 mb-4" />
    <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy dark:text-white mb-2">Message Sent!</h3>
    <p className="text-sm text-navy/50 dark:text-white/50 max-w-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
  </div>
);

const ContactInfoCard = () => (
  <div className="p-6 sm:p-8 rounded-2xl bg-cream dark:bg-navy-light border border-navy/5 dark:border-white/5 space-y-5">
    <h4 className="font-heading text-lg font-semibold text-navy dark:text-white">Reach Us Directly</h4>
    <div className="flex items-start gap-3 text-sm text-navy/60 dark:text-white/60">
      <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
      <span>{CONTACT_INFO.address}</span>
    </div>
    <div className="flex items-center gap-3 text-sm text-navy/60 dark:text-white/60">
      <Phone className="w-5 h-5 text-gold shrink-0" />
      <a href={CONTACT_INFO.phoneHref} className="hover:text-gold transition-colors">{CONTACT_INFO.phone}</a>
    </div>
    <div className="flex items-center gap-3 text-sm text-navy/60 dark:text-white/60">
      <Mail className="w-5 h-5 text-gold shrink-0" />
      <a href={CONTACT_INFO.emailHref} className="hover:text-gold transition-colors">{CONTACT_INFO.email}</a>
    </div>
  </div>
);

const MapEmbed = () => (
  <div className="rounded-2xl overflow-hidden border border-navy/5 dark:border-white/5 h-56 sm:h-64">
    <iframe
      title="MR Events Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669444.3!2d78.9!3d22.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1700000000000"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

export default Contact;
