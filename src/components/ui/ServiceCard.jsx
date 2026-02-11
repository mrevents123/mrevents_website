import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImageSlideshow from "./ImageSlideshow";

const ServiceCard = ({ icon: Icon, title, desc, images }) => {
  return (
    <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-navy/5 dark:border-white/5 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500">
      {/* Image Slideshow */}
      <div className="relative h-48 sm:h-52 md:h-56 2xl:h-60 3xl:h-64 4xl:h-80 overflow-hidden">
        <ImageSlideshow images={images} alt={title} interval={3500} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent pointer-events-none" />
        <div className="absolute top-4 left-4 w-10 h-10 sm:w-11 sm:h-11 2xl:w-12 2xl:h-12 3xl:w-13 3xl:h-13 4xl:w-16 4xl:h-16 rounded-lg sm:rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-gold border border-white/20 z-10">
          <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 2xl:w-6 2xl:h-6 3xl:w-6 3xl:h-6 4xl:w-8 4xl:h-8" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 2xl:p-7 3xl:p-8 4xl:p-10 bg-cream dark:bg-navy-light">
        <h3 className="font-heading text-base sm:text-lg 2xl:text-[1.2rem] 3xl:text-xl 4xl:text-2xl font-semibold text-navy dark:text-white mb-1.5 sm:mb-2 4xl:mb-3">
          {title}
        </h3>
        <p className="text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg text-navy/45 dark:text-white/45 leading-relaxed mb-3 sm:mb-4 4xl:mb-5">
          {desc}
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg text-gold-dark hover:text-gold font-medium transition-colors group/link"
        >
          Enquire Now
          <ArrowRight className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 3xl:w-4 3xl:h-4 4xl:w-5 4xl:h-5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
