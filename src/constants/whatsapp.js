export const WHATSAPP_TEMPLATES = [
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

export const buildWhatsAppLink = (phone, message) => {
  const text = encodeURIComponent(message || "");
  if (!phone) return `https://wa.me/`;
  // ensure phone is in international format without leading +
  const normalized = String(phone).replace(/[^0-9]/g, "");
  return `https://wa.me/${normalized}?text=${text}`;
};

export default WHATSAPP_TEMPLATES;
