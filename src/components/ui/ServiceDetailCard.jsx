import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServiceDetailCard = ({ icon: Icon, title, desc, detail, image, reversed }) => (
  <div className={`group grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 3xl:gap-12 items-center ${reversed ? "md:direction-rtl" : ""}`}>
    <div className={`relative rounded-2xl overflow-hidden h-64 sm:h-72 md:h-80 3xl:h-96 ${reversed ? "md:order-2" : ""}`}>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-14 sm:h-14 3xl:w-16 3xl:h-16 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-gold border border-white/20">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 3xl:w-8 3xl:h-8" />
      </div>
    </div>
    <div className={`${reversed ? "md:order-1 md:text-right" : ""}`}>
      <p className="text-gold-dark text-[10px] sm:text-xs 3xl:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3">
        {desc}
      </p>
      <h3 className="font-heading text-xl sm:text-2xl md:text-3xl 3xl:text-4xl font-bold text-navy dark:text-white mb-3 sm:mb-4">
        {title}
      </h3>
      <p className="text-sm sm:text-base 3xl:text-lg text-navy/50 dark:text-white/50 leading-relaxed mb-5 sm:mb-6">
        {detail}
      </p>
      <Link
        to="/contact"
        className={`inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 bg-gold hover:bg-gold-light text-navy font-semibold rounded-full transition-all duration-200 shadow-lg shadow-gold/25 text-xs sm:text-sm 3xl:text-base ${reversed ? "md:flex-row-reverse" : ""}`}
      >
        Enquire Now
        <ArrowRight size={16} className={reversed ? "rotate-180" : ""} />
      </Link>
    </div>
  </div>
);

export default ServiceDetailCard;
