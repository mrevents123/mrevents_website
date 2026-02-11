import { Star } from "lucide-react";

const TestimonialCard = ({ name, role, text, rating }) => {
  return (
    <div className="p-6 sm:p-7 md:p-8 3xl:p-10 4xl:p-14 rounded-xl sm:rounded-2xl bg-white dark:bg-navy-light border border-navy/5 dark:border-white/5 hover:shadow-xl hover:shadow-navy/5 dark:hover:shadow-black/20 transition-all duration-300">
      <div className="flex gap-1 mb-3 sm:mb-4 4xl:mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-3.5 h-3.5 3xl:w-4 3xl:h-4 4xl:w-5 4xl:h-5 text-gold fill-gold"
          />
        ))}
      </div>
      <p className="text-xs sm:text-sm 3xl:text-base 4xl:text-lg text-navy/60 dark:text-white/60 leading-relaxed mb-4 sm:mb-6 4xl:mb-8 italic">
        &ldquo;{text}&rdquo;
      </p>
      <div>
        <p className="text-xs sm:text-sm 3xl:text-base 4xl:text-lg font-semibold text-navy dark:text-white">
          {name}
        </p>
        <p className="text-[10px] sm:text-xs 3xl:text-sm 4xl:text-base text-navy/40 dark:text-white/40 mt-0.5">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
