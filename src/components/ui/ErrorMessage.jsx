import { AlertCircle, RefreshCw } from "lucide-react";

const ErrorMessage = ({ message, onRetry }) => (
  <div className="flex flex-col items-center justify-center text-center py-16 px-6 2xl:py-20 2xl:px-8 3xl:py-24 3xl:px-10 4xl:py-32 4xl:px-14 rounded-2xl bg-cream dark:bg-navy-light border border-red-200 dark:border-red-500/20">
    <AlertCircle className="w-14 h-14 2xl:w-16 2xl:h-16 3xl:w-18 3xl:h-18 4xl:w-22 4xl:h-22 text-red-500 mb-4 4xl:mb-6" />
    <h3 className="font-heading text-xl sm:text-2xl 2xl:text-[1.7rem] 3xl:text-3xl 4xl:text-4xl font-bold text-navy dark:text-white mb-2 4xl:mb-4">
      Something Went Wrong
    </h3>
    <p className="text-sm 2xl:text-[0.9rem] 3xl:text-base 4xl:text-lg text-navy/50 dark:text-white/50 max-w-sm 3xl:max-w-md 4xl:max-w-lg mb-6 4xl:mb-8">
      {message || "Failed to send your message. Please try again."}
    </p>
    <button
      onClick={onRetry}
      className="inline-flex items-center gap-2 px-6 py-3 2xl:px-8 2xl:py-3.5 3xl:px-9 3xl:py-4 4xl:px-11 4xl:py-5 bg-gold hover:bg-gold-light text-navy font-semibold rounded-full transition-all duration-200 shadow-lg shadow-gold/25 text-sm sm:text-base 2xl:text-[0.95rem] 3xl:text-lg 4xl:text-xl"
    >
      <RefreshCw size={16} className="3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6" />
      Try Again
    </button>
  </div>
);

export default ErrorMessage;
