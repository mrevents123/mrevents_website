import { Send } from "lucide-react";
import Field from "./Field";

const ContactForm = ({ form, errors, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} noValidate className="space-y-5 2xl:space-y-6 3xl:space-y-7 4xl:space-y-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 2xl:gap-6 3xl:gap-7 4xl:gap-8">
      <Field label="Full Name" name="name" value={form.name} error={errors.name} onChange={onChange} placeholder="Your name" />
      <Field label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={onChange} placeholder="you@example.com" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 2xl:gap-6 3xl:gap-7 4xl:gap-8">
      <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="+91 00000 00000" />
      <div>
        <label htmlFor="event" className="block text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg font-medium text-navy/70 dark:text-white/70 mb-1.5 4xl:mb-2">Event Type</label>
        <select id="event" name="event" value={form.event} onChange={onChange} className="w-full px-4 py-3 2xl:px-5 2xl:py-3.5 3xl:px-5 3xl:py-4 4xl:px-6 4xl:py-5 rounded-xl bg-cream dark:bg-navy-light border border-navy/10 dark:border-white/10 text-sm 2xl:text-[0.9rem] 3xl:text-base 4xl:text-lg text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/40">
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
      <label htmlFor="message" className="block text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg font-medium text-navy/70 dark:text-white/70 mb-1.5 4xl:mb-2">Message *</label>
      <textarea id="message" name="message" rows={5} value={form.message} onChange={onChange} placeholder="Tell us about your event..." className={`w-full px-4 py-3 2xl:px-5 2xl:py-3.5 3xl:px-5 3xl:py-4 4xl:px-6 4xl:py-5 rounded-xl bg-cream dark:bg-navy-light border text-sm 2xl:text-[0.9rem] 3xl:text-base 4xl:text-lg text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/40 resize-none ${errors.message ? "border-red-400" : "border-navy/10 dark:border-white/10"}`} />
      {errors.message && <p className="mt-1 text-xs 4xl:text-sm text-red-500">{errors.message}</p>}
    </div>
    <button type="submit" className="inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 2xl:px-9 2xl:py-4 3xl:px-10 3xl:py-4 4xl:px-12 4xl:py-5 bg-gold hover:bg-gold-light text-navy font-semibold rounded-full transition-all duration-200 shadow-lg shadow-gold/25 text-sm sm:text-base 2xl:text-[0.95rem] 3xl:text-lg 4xl:text-xl">
      Send Message <Send size={16} className="3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6" />
    </button>
  </form>
);

export default ContactForm;
