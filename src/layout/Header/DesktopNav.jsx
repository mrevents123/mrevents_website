import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const DesktopNav = ({ links, isDark, toggleTheme }) => (
  <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-9 3xl:gap-10 4xl:gap-14">
    {links.map((link) => (
      <Link
        key={link.name}
        to={link.path}
        className="text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg font-medium tracking-wide uppercase transition-colors duration-300 text-navy/80 dark:text-white/70 hover:text-gold-dark dark:hover:text-gold"
      >
        {link.name}
      </Link>
    ))}

    <button
      onClick={toggleTheme}
      className="p-2 2xl:p-2.5 3xl:p-3 rounded-full transition-colors duration-300 text-navy/60 dark:text-white/60 hover:text-gold-dark dark:hover:text-gold hover:bg-navy/5 dark:hover:bg-white/10"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5 2xl:w-5.5 2xl:h-5.5 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7" /> : <Moon className="w-5 h-5 2xl:w-5.5 2xl:h-5.5 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7" />}
    </button>

    <Link
      to="/contact"
      className="ml-2 px-5 py-2 sm:px-6 sm:py-2.5 2xl:px-7 2xl:py-3 3xl:px-8 3xl:py-3 4xl:px-10 4xl:py-3.5 bg-gold hover:bg-gold-light text-navy font-semibold text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg rounded-full transition-all duration-200 shadow-lg shadow-gold/25 hover:shadow-gold/40"
    >
      Book Now
    </Link>
  </nav>
);

export default DesktopNav;
