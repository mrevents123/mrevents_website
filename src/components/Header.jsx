import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_LINKS } from "../constants";
import useScrollPosition from "../hooks/useScrollPosition";
import useTheme from "../hooks/useTheme";
import logo from "../assets/MrEvents-removebg-preview.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollPosition(50);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass" : "bg-white dark:bg-navy-dark shadow-md dark:shadow-navy/30"
      }`}
    >
      <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16">
        <div className="flex items-center justify-between h-20 sm:h-22 md:h-24 lg:h-26 3xl:h-30 4xl:h-36">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="MR Events"
              className="h-20 sm:h-24 md:h-28 lg:h-32 3xl:h-36 4xl:h-40 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 3xl:gap-10 4xl:gap-14">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs sm:text-sm 3xl:text-base 4xl:text-lg font-medium tracking-wide uppercase transition-colors duration-300 text-navy/80 dark:text-white/70 hover:text-gold-dark dark:hover:text-gold"
              >
                {link.name}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors duration-300 text-navy/60 dark:text-white/60 hover:text-gold-dark dark:hover:text-gold hover:bg-navy/5 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link
              to="/contact"
              className="ml-2 px-5 py-2 sm:px-6 sm:py-2.5 3xl:px-8 3xl:py-3 4xl:px-10 4xl:py-3.5 bg-gold hover:bg-gold-light text-navy font-semibold text-xs sm:text-sm 3xl:text-base 4xl:text-lg rounded-full transition-all duration-200 shadow-lg shadow-gold/25 hover:shadow-gold/40"
            >
              Book Now
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors duration-300 text-navy/60 dark:text-white/60 hover:text-gold-dark dark:hover:text-gold"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 transition-colors text-navy/80 dark:text-white/80 hover:text-gold-dark dark:hover:text-gold"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="glass-mobile px-6 sm:px-10 md:px-16 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="py-3.5 sm:py-4 text-sm sm:text-base font-medium text-navy/70 dark:text-white/70 hover:text-gold-dark dark:hover:text-gold transition-colors tracking-wide uppercase border-b border-navy/5 dark:border-white/5 last:border-0"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 text-center px-6 py-3 sm:py-3.5 bg-gold hover:bg-gold-light text-navy font-semibold text-sm sm:text-base rounded-full transition-all duration-200 shadow-lg shadow-gold/20"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
