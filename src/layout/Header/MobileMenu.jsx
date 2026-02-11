import { Link } from "react-router-dom";

const MobileMenu = ({ links, isOpen, onClose }) => (
  <div
    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <nav className="glass-mobile px-6 sm:px-10 md:px-16 py-4 flex flex-col gap-1">
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          onClick={onClose}
          className="py-3.5 sm:py-4 text-sm sm:text-base font-medium text-navy/70 dark:text-white/70 hover:text-gold-dark dark:hover:text-gold transition-colors tracking-wide uppercase border-b border-navy/5 dark:border-white/5 last:border-0"
        >
          {link.name}
        </Link>
      ))}
      <Link
        to="/contact"
        onClick={onClose}
        className="mt-3 text-center px-6 py-3 sm:py-3.5 bg-gold hover:bg-gold-light text-navy font-semibold text-sm sm:text-base rounded-full transition-all duration-200 shadow-lg shadow-gold/20"
      >
        Book Now
      </Link>
    </nav>
  </div>
);

export default MobileMenu;
