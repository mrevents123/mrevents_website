const ClientCard = ({ name, category }) => (
  <div className="p-5 sm:p-6 3xl:p-8 rounded-2xl bg-cream dark:bg-navy-light border border-navy/5 dark:border-white/5 hover:border-gold/30 hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold-dark mb-4">
      <span className="font-heading text-lg sm:text-xl font-bold">{name.charAt(0)}</span>
    </div>
    <h4 className="font-heading text-sm sm:text-base 3xl:text-lg font-semibold text-navy dark:text-white mb-1">
      {name}
    </h4>
    <span className="inline-block text-[10px] sm:text-xs 3xl:text-sm text-gold-dark bg-gold/10 px-2.5 py-0.5 rounded-full">
      {category}
    </span>
  </div>
);

export default ClientCard;
