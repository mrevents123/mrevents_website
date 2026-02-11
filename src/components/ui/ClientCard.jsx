const ClientCard = ({ name, category }) => (
  <div className="p-5 sm:p-6 2xl:p-7 3xl:p-8 4xl:p-10 rounded-2xl bg-cream dark:bg-navy-light border border-navy/5 dark:border-white/5 hover:border-gold/30 hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 sm:w-14 sm:h-14 2xl:w-15 2xl:h-15 3xl:w-16 3xl:h-16 4xl:w-20 4xl:h-20 rounded-xl bg-gold/10 flex items-center justify-center text-gold-dark mb-4 4xl:mb-5">
      <span className="font-heading text-lg sm:text-xl 2xl:text-[1.35rem] 3xl:text-2xl 4xl:text-3xl font-bold">{name.charAt(0)}</span>
    </div>
    <h4 className="font-heading text-sm sm:text-base 2xl:text-[1.05rem] 3xl:text-lg 4xl:text-xl font-semibold text-navy dark:text-white mb-1 4xl:mb-2">
      {name}
    </h4>
    <span className="inline-block text-[10px] sm:text-xs 2xl:text-[0.8rem] 3xl:text-sm 4xl:text-base text-gold-dark bg-gold/10 px-2.5 py-0.5 4xl:px-3.5 4xl:py-1 rounded-full">
      {category}
    </span>
  </div>
);

export default ClientCard;
