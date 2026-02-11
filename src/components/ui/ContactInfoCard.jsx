import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "../../constants";

const ContactInfoCard = () => (
  <div className="p-6 sm:p-8 2xl:p-9 3xl:p-10 4xl:p-14 rounded-2xl bg-cream dark:bg-navy-light border border-navy/5 dark:border-white/5 space-y-5 2xl:space-y-6 4xl:space-y-8">
    <h4 className="font-heading text-lg 2xl:text-xl 3xl:text-xl 4xl:text-2xl font-semibold text-navy dark:text-white">Reach Us Directly</h4>
    <div className="flex items-start gap-3 4xl:gap-4 text-sm 2xl:text-[0.9rem] 3xl:text-base 4xl:text-lg text-navy/60 dark:text-white/60">
      <MapPin className="w-5 h-5 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7 text-gold shrink-0 mt-0.5" />
      <span>{CONTACT_INFO.address}</span>
    </div>
    <div className="flex items-start gap-3 4xl:gap-4 text-sm 2xl:text-[0.9rem] 3xl:text-base 4xl:text-lg text-navy/60 dark:text-white/60">
      <Phone className="w-5 h-5 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7 text-gold shrink-0 mt-0.5" />
      <div className="flex flex-col gap-1">
        <a href={CONTACT_INFO.phoneHref} className="hover:text-gold transition-colors">{CONTACT_INFO.phone}</a>
        <a href={CONTACT_INFO.phoneAltHref} className="hover:text-gold transition-colors">{CONTACT_INFO.phoneAlt}</a>
      </div>
    </div>
    <div className="flex items-center gap-3 4xl:gap-4 text-sm 2xl:text-[0.9rem] 3xl:text-base 4xl:text-lg text-navy/60 dark:text-white/60">
      <Mail className="w-5 h-5 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7 text-gold shrink-0" />
      <a href={CONTACT_INFO.emailHref} className="hover:text-gold transition-colors">{CONTACT_INFO.email}</a>
    </div>
  </div>
);

export default ContactInfoCard;
