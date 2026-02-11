const SectionHeader = ({ tag, title, description }) => {
  return (
    <div className="text-center mb-10 sm:mb-14 md:mb-16 2xl:mb-18 3xl:mb-20 4xl:mb-28">
      {tag && (
        <p className="text-gold-dark text-[10px] sm:text-xs 2xl:text-xs 3xl:text-sm 4xl:text-base font-semibold uppercase tracking-widest mb-2 sm:mb-3 4xl:mb-4">
          {tag}
        </p>
      )}
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl 2xl:text-[2.75rem] 3xl:text-5xl 4xl:text-6xl font-bold text-navy dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 2xl:mt-5 4xl:mt-6 text-navy/40 dark:text-white/40 max-w-md sm:max-w-xl 2xl:max-w-2xl 3xl:max-w-2xl 4xl:max-w-3xl mx-auto text-xs sm:text-sm 2xl:text-[0.9rem] 3xl:text-base 4xl:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
