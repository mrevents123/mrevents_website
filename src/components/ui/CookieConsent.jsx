import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import useCookieConsent from "../../hooks/useCookieConsent";

const CookieConsent = () => {
  const { isUndecided, accept, decline } = useCookieConsent();

  if (!isUndecided) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6 2xl:p-7 4xl:p-8">
      <div className="max-w-4xl 2xl:max-w-5xl 4xl:max-w-6xl mx-auto bg-navy dark:bg-navy-light border border-white/10 rounded-2xl p-5 sm:p-6 2xl:p-7 4xl:p-8 shadow-2xl shadow-black/30 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 2xl:gap-7 4xl:gap-8">
          <Cookie className="w-8 h-8 2xl:w-9 2xl:h-9 4xl:w-10 4xl:h-10 text-gold shrink-0 hidden sm:block" />
          <div className="flex-1">
            <p className="text-sm 2xl:text-[0.9rem] 3xl:text-base 4xl:text-lg text-white/80 leading-relaxed">
              We use cookies to enhance your experience and remember your preferences.
              By continuing, you agree to our{" "}
              <Link to="/privacy-policy" className="text-gold hover:text-gold-light underline underline-offset-2">
                Privacy Policy
              </Link>.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={accept}
              className="flex-1 sm:flex-none px-5 py-2.5 2xl:px-6 2xl:py-3 4xl:px-7 4xl:py-3.5 bg-gold hover:bg-gold-light text-navy font-semibold text-xs sm:text-sm 2xl:text-[0.85rem] 4xl:text-base rounded-full transition-all duration-200 shadow-lg shadow-gold/25"
            >
              Accept
            </button>
            <button
              onClick={decline}
              className="flex-1 sm:flex-none px-5 py-2.5 2xl:px-6 2xl:py-3 4xl:px-7 4xl:py-3.5 border border-white/20 text-white/60 hover:text-white font-medium text-xs sm:text-sm 2xl:text-[0.85rem] 4xl:text-base rounded-full transition-all duration-200"
            >
              Decline
            </button>
            <button
              onClick={decline}
              className="p-1.5 text-white/30 hover:text-white/60 transition-colors sm:hidden"
              aria-label="Close cookie banner"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
