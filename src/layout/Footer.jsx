import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { QUICK_LINKS, SERVICE_NAMES, SOCIALS, CONTACT_INFO } from "../constants";
import Container from "../components/ui/Container";
import logo from "../assets/MrEvents-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-14 sm:pt-16 3xl:pt-20 4xl:pt-24">
      {/* Footer Grid */}
      <Container>
        <div className="pb-12 sm:pb-14 3xl:pb-18 4xl:pb-22 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 3xl:gap-20 4xl:gap-24">
          <BrandColumn />
          <LinksColumn title="Quick Links" items={QUICK_LINKS} />
          <ServicesColumn />
          <ContactColumn />
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="py-5 sm:py-6 4xl:py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs 3xl:text-sm 4xl:text-base text-white/30">
            <p>&copy; {new Date().getFullYear()} MR Events. All rights reserved.</p>
            <p>Designed with ♥ for unforgettable experiences.</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

const BrandColumn = () => (
  <div className="space-y-4">
    <img src={logo} alt="MR Events" className="h-28 sm:h-32 3xl:h-36 4xl:h-40 w-auto" />
    <p className="text-white/50 text-xs sm:text-sm 3xl:text-base 4xl:text-lg leading-relaxed max-w-xs">
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
          className="w-9 h-9 sm:w-10 sm:h-10 3xl:w-11 3xl:h-11 4xl:w-13 4xl:h-13 rounded-full bg-white/5 hover:bg-gold/20 flex items-center justify-center text-white/50 hover:text-gold transition-all duration-200"
        >
          <s.icon className="w-4 h-4 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6" />
        </a>
      ))}
    </div>
  </div>
);

const LinksColumn = ({ title, items }) => (
  <div>
    <h4 className="text-xs sm:text-sm 3xl:text-base 4xl:text-lg font-semibold uppercase tracking-widest text-gold mb-4 sm:mb-5 4xl:mb-7">
      {title}
    </h4>
    <ul className="space-y-2.5 sm:space-y-3 4xl:space-y-4">
      {items.map((link) => (
        <li key={link.name}>
          <Link
            to={link.path}
            className="text-xs sm:text-sm 3xl:text-base 4xl:text-lg text-white/40 hover:text-gold transition-colors duration-200"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const ServicesColumn = () => (
  <div>
    <h4 className="text-xs sm:text-sm 3xl:text-base 4xl:text-lg font-semibold uppercase tracking-widest text-gold mb-4 sm:mb-5 4xl:mb-7">
      Our Services
    </h4>
    <ul className="space-y-2.5 sm:space-y-3 4xl:space-y-4">
      {SERVICE_NAMES.map((service) => (
        <li key={service} className="text-xs sm:text-sm 3xl:text-base 4xl:text-lg text-white/40">
          {service}
        </li>
      ))}
    </ul>
  </div>
);

const ContactColumn = () => (
  <div>
    <h4 className="text-xs sm:text-sm 3xl:text-base 4xl:text-lg font-semibold uppercase tracking-widest text-gold mb-4 sm:mb-5 4xl:mb-7">
      Contact Us
    </h4>
    <ul className="space-y-3 sm:space-y-3.5 4xl:space-y-5">
      <li className="flex items-start gap-3 text-xs sm:text-sm 3xl:text-base 4xl:text-lg text-white/40">
        <MapPin className="w-4 h-4 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6 text-gold mt-0.5 shrink-0" />
        <span>{CONTACT_INFO.address}</span>
      </li>
      <li className="flex items-start gap-3 text-xs sm:text-sm 3xl:text-base 4xl:text-lg text-white/40">
        <Phone className="w-4 h-4 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6 text-gold mt-0.5 shrink-0" />
        <div className="flex flex-col gap-1">
          <a href={CONTACT_INFO.phoneHref} className="hover:text-gold transition-colors">
            {CONTACT_INFO.phone}
          </a>
          <a href={CONTACT_INFO.phoneAltHref} className="hover:text-gold transition-colors">
            {CONTACT_INFO.phoneAlt}
          </a>
        </div>
      </li>
      <li className="flex items-center gap-3 text-xs sm:text-sm 3xl:text-base 4xl:text-lg text-white/40">
        <Mail className="w-4 h-4 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6 text-gold shrink-0" />
        <a href={CONTACT_INFO.emailHref} className="hover:text-gold transition-colors">
          {CONTACT_INFO.email}
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
