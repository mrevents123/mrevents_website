import { CheckCircle } from "lucide-react";

const SuccessMessage = () => (
  <div className="flex flex-col items-center justify-center text-center py-16 px-6 2xl:py-20 2xl:px-8 3xl:py-24 3xl:px-10 4xl:py-32 4xl:px-14 rounded-2xl bg-cream dark:bg-navy-light border border-navy/5 dark:border-white/5">
    <CheckCircle className="w-14 h-14 2xl:w-16 2xl:h-16 3xl:w-18 3xl:h-18 4xl:w-22 4xl:h-22 text-green-500 mb-4 4xl:mb-6" />
    <h3 className="font-heading text-xl sm:text-2xl 2xl:text-[1.7rem] 3xl:text-3xl 4xl:text-4xl font-bold text-navy dark:text-white mb-2 4xl:mb-4">Message Sent!</h3>
    <p className="text-sm 2xl:text-[0.9rem] 3xl:text-base 4xl:text-lg text-navy/50 dark:text-white/50 max-w-sm 3xl:max-w-md 4xl:max-w-lg">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
  </div>
);

export default SuccessMessage;
