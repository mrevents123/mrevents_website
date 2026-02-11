import { Send } from "lucide-react";
import Field from "./Field";

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

export default ContactForm;
