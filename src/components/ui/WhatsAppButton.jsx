import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "../../constants";

const WhatsAppButton = () => {
  const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20MR%20Events%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 2xl:w-[4.5rem] 2xl:h-[4.5rem] 3xl:w-20 3xl:h-20 4xl:w-24 4xl:h-24 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 2xl:w-9 2xl:h-9 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12" />
    </a>
  );
};

export default WhatsAppButton;
