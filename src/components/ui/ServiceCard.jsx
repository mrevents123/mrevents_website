const ServiceCard = ({ icon: Icon, title, desc }) => {
  return (
    <div className="group p-5 sm:p-6 md:p-7 3xl:p-9 4xl:p-12 rounded-xl sm:rounded-2xl bg-cream dark:bg-navy-light border border-navy/5 dark:border-white/5 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300">
      <div className="w-10 h-10 sm:w-12 sm:h-12 3xl:w-14 3xl:h-14 4xl:w-18 4xl:h-18 rounded-lg sm:rounded-xl bg-gold/10 flex items-center justify-center text-gold-dark mb-4 sm:mb-5 4xl:mb-7 group-hover:bg-gold/20 transition-colors">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 3xl:w-7 3xl:h-7 4xl:w-9 4xl:h-9" />
      </div>
      <h3 className="font-heading text-base sm:text-lg 3xl:text-xl 4xl:text-2xl font-semibold text-navy dark:text-white mb-1.5 sm:mb-2 4xl:mb-3">
        {title}
      </h3>
      <p className="text-xs sm:text-sm 3xl:text-base 4xl:text-lg text-navy/40 dark:text-white/40 leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

export default ServiceCard;
