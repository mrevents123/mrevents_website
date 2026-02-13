import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "../../constants";
import useCookieConsent from "../../hooks/useCookieConsent";

const WhatsAppButton = () => {
  const { isUndecided } = useCookieConsent();
  const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20MR%20Events%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed right-5 sm:right-6 lg:right-8 2xl:right-10 3xl:right-12 4xl:right-16 z-50 w-14 h-14 sm:w-16 sm:h-16 2xl:w-[4.5rem] 2xl:h-[4.5rem] 3xl:w-20 3xl:h-20 4xl:w-24 4xl:h-24 bg-green-500 hover:bg-green-600 text-white rounded-full inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 ${
        isUndecided ? "bottom-28 sm:bottom-24" : "bottom-5 sm:bottom-6 lg:bottom-8 2xl:bottom-10 3xl:bottom-12 4xl:bottom-16"
      }`}
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 2xl:w-9 2xl:h-9 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12" />
    </a>
  );
};

export default WhatsAppButton;
