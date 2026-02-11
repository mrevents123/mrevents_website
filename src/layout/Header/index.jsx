import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_LINKS } from "../../constants";
import useScrollPosition from "../../hooks/useScrollPosition";
import useTheme from "../../hooks/useTheme";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import { logo } from "../../assets";

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
      <div className="max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] 4xl:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 3xl:px-12 4xl:px-16">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-22 2xl:h-24 3xl:h-26 4xl:h-30">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="MR Events" className="h-14 sm:h-16 md:h-18 lg:h-20 2xl:h-22 3xl:h-24 4xl:h-28 w-auto" />
          </Link>

          <DesktopNav links={NAV_LINKS} isDark={isDark} toggleTheme={toggleTheme} />

          <div className="flex items-center gap-2 lg:hidden">
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

      <MobileMenu links={NAV_LINKS} isOpen={isOpen} isDark={isDark} toggleTheme={toggleTheme} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
