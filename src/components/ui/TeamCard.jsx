const TeamCard = ({ name, role }) => (
  <div className="text-center p-5 sm:p-6 3xl:p-8 rounded-2xl bg-white dark:bg-navy-light border border-navy/5 dark:border-white/5 hover:border-gold/30 hover:shadow-lg transition-all duration-300">
    <div className="w-16 h-16 sm:w-20 sm:h-20 3xl:w-24 3xl:h-24 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark mx-auto mb-3 sm:mb-4">
      <span className="font-heading text-xl sm:text-2xl 3xl:text-3xl font-bold">
        {name.charAt(0)}
      </span>
    </div>
    <h4 className="font-heading text-sm sm:text-base 3xl:text-lg font-semibold text-navy dark:text-white">
      {name}
    </h4>
    <p className="text-xs sm:text-sm 3xl:text-base text-navy/40 dark:text-white/40 mt-1">{role}</p>
  </div>
);

export default TeamCard;
