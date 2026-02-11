import { CheckCircle } from "lucide-react";

const SuccessMessage = () => (
  <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl bg-cream dark:bg-navy-light border border-navy/5 dark:border-white/5">
    <CheckCircle className="w-14 h-14 text-green-500 mb-4" />
    <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy dark:text-white mb-2">Message Sent!</h3>
    <p className="text-sm text-navy/50 dark:text-white/50 max-w-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
  </div>
);

export default SuccessMessage;
