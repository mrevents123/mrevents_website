import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "../../constants";
import useCookieConsent from "../../hooks/useCookieConsent";
import { useState, useRef, useEffect } from "react";

const TEMPLATES = [
  {
    id: "detailed",
    label: "Detailed",
    text:
      "Hi MR Events 👋 I’m [Name]. I’m planning a [wedding/corporate/party] on [date or timeframe] in [city]. Guests ~[xx]. Budget ~[₹xxxx]. Need [planning/decor/catering/AV]. Can we book a 20–30 min consult? Phone: [number]. Thanks!",
  },
  {
    id: "short",
    label: "Quick Message",
    text: "Hi MR Events 👋 I’m [Name]. Planning a [event type] on [date] in [city]. Guests ~[xx]. Can we talk? Thanks!",
  },
  {
    id: "urgent",
    label: "Urgent",
    text: "Urgent: Need booking for [event type] on [date]. Please call [name] at [phone].",
  },
];

const WhatsAppButton = () => {
  const { isUndecided } = useCookieConsent();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target) || btnRef.current.contains(e.target)) return;
      setOpen(false);
    };
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const openWhatsApp = (message) => {
    const text = encodeURIComponent(message);
    const phone = CONTACT_INFO.whatsapp || "";
    if (!phone) {
      // fallback: open WhatsApp home
      window.open("https://wa.me/", "_blank", "noopener,noreferrer");
      return;
    }
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  // compute position based on cookie consent
  const posClass = isUndecided ? "bottom-28 sm:bottom-24" : "bottom-5 sm:bottom-6 lg:bottom-8 2xl:bottom-10 3xl:bottom-12 4xl:bottom-16";

  return (
    <div className={`fixed right-5 sm:right-6 lg:right-8 2xl:right-10 3xl:right-12 4xl:right-16 z-50 ${posClass}`}>
      <div className="relative">
        <button
          ref={btnRef}
          type="button"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          onClick={() => setOpen((s) => !s)}
          className="w-14 h-14 sm:w-16 sm:h-16 2xl:w-[4.5rem] 2xl:h-[4.5rem] 3xl:w-20 3xl:h-20 4xl:w-24 4xl:h-24 bg-green-500 hover:bg-green-600 text-white rounded-full inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 2xl:w-9 2xl:h-9 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12" />
        </button>

        {open && (
          <div
            ref={menuRef}
            role="menu"
            aria-label="WhatsApp message templates"
            className="absolute bottom-16 right-0 w-64 bg-white dark:bg-navy rounded-xl shadow-lg border border-navy/5 dark:border-white/5 p-3 z-50"
          >
            <p className="text-xs text-navy/60 dark:text-white/60 mb-2">Choose a message</p>
            <div className="flex flex-col gap-2">
              {TEMPLATES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => openWhatsApp(t.text)}
                  className="text-left px-3 py-2 rounded-md hover:bg-navy/5 dark:hover:bg-white/5 transition text-sm"
                >
                  <div className="font-semibold text-navy dark:text-white">{t.label}</div>
                  <div className="text-xs text-navy/50 dark:text-white/60 truncate">{t.text}</div>
                </button>
              ))}
            </div>
            <div className="mt-3 text-right">
              <button onClick={() => setOpen(false)} className="text-xs text-navy/60 dark:text-white/60 hover:underline">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppButton;
