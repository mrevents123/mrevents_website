import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { SERVICE_NAMES, SOCIALS, CONTACT_INFO } from "../../constants";
import logo from "../../assets/MrEvents-removebg-preview.png";

export const BrandColumn = () => (
  <div className="space-y-4 2xl:space-y-5 4xl:space-y-6">
    <img src={logo} alt="MR Events" className="h-28 sm:h-32 2xl:h-34 3xl:h-36 4xl:h-40 w-auto" />
    <p className="text-white/50 text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg leading-relaxed max-w-xs 2xl:max-w-sm 4xl:max-w-md">
      Curating signature experiences that leave lasting impressions.
      Your vision, our expertise.
    </p>
    <div className="flex gap-3 4xl:gap-4">
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="w-9 h-9 sm:w-10 sm:h-10 2xl:w-11 2xl:h-11 3xl:w-11 3xl:h-11 4xl:w-13 4xl:h-13 rounded-full bg-white/5 hover:bg-gold/20 flex items-center justify-center text-white/50 hover:text-gold transition-all duration-200"
        >
          <s.icon className="w-4 h-4 2xl:w-4.5 2xl:h-4.5 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6" />
        </a>
      ))}
    </div>
  </div>
);

export const LinksColumn = ({ title, items }) => (
  <div>
    <h4 className="text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg font-semibold uppercase tracking-widest text-gold mb-4 sm:mb-5 2xl:mb-6 4xl:mb-7">
      {title}
    </h4>
    <ul className="space-y-2.5 sm:space-y-3 2xl:space-y-3.5 4xl:space-y-4">
      {items.map((link) => (
        <li key={link.name}>
          <Link
            to={link.path}
            className="text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg text-white/40 hover:text-gold transition-colors duration-200"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const ServicesColumn = () => (
  <div>
    <h4 className="text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg font-semibold uppercase tracking-widest text-gold mb-4 sm:mb-5 2xl:mb-6 4xl:mb-7">
      Our Services
    </h4>
    <ul className="space-y-2.5 sm:space-y-3 2xl:space-y-3.5 4xl:space-y-4">
      {SERVICE_NAMES.map((service) => (
        <li key={service} className="text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg text-white/40">
          {service}
        </li>
      ))}
    </ul>
  </div>
);

export const ContactColumn = () => (
  <div>
    <h4 className="text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg font-semibold uppercase tracking-widest text-gold mb-4 sm:mb-5 2xl:mb-6 4xl:mb-7">
      Contact Us
    </h4>
    <ul className="space-y-3 sm:space-y-3.5 2xl:space-y-4 4xl:space-y-5">
      <li className="flex items-start gap-3 text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg text-white/40">
        <MapPin className="w-4 h-4 2xl:w-4.5 2xl:h-4.5 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6 text-gold mt-0.5 shrink-0" />
        <span>{CONTACT_INFO.address}</span>
      </li>
      <li className="flex items-start gap-3 text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg text-white/40">
        <Phone className="w-4 h-4 2xl:w-4.5 2xl:h-4.5 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6 text-gold mt-0.5 shrink-0" />
        <a href={CONTACT_INFO.phoneHref} className="hover:text-gold transition-colors">
          {CONTACT_INFO.phone}
        </a>
      </li>
      <li className="flex items-center gap-3 text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg text-white/40">
        <Mail className="w-4 h-4 2xl:w-4.5 2xl:h-4.5 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6 text-gold shrink-0" />
        <a href={CONTACT_INFO.emailHref} className="hover:text-gold transition-colors">
          {CONTACT_INFO.email}
        </a>
      </li>
    </ul>
  </div>
);
