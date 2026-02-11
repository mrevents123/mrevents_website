const TeamCard = ({ name, role }) => (
  <div className="text-center p-5 sm:p-6 2xl:p-7 3xl:p-8 4xl:p-10 rounded-2xl bg-white dark:bg-navy-light border border-navy/5 dark:border-white/5 hover:border-gold/30 hover:shadow-lg transition-all duration-300">
    <div className="w-16 h-16 sm:w-20 sm:h-20 2xl:w-22 2xl:h-22 3xl:w-24 3xl:h-24 4xl:w-32 4xl:h-32 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark mx-auto mb-3 sm:mb-4 4xl:mb-6">
      <span className="font-heading text-xl sm:text-2xl 2xl:text-[1.7rem] 3xl:text-3xl 4xl:text-4xl font-bold">
        {name.charAt(0)}
      </span>
    </div>
    <h4 className="font-heading text-sm sm:text-base 2xl:text-[1.05rem] 3xl:text-lg 4xl:text-xl font-semibold text-navy dark:text-white">
      {name}
    </h4>
    <p className="text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg text-navy/40 dark:text-white/40 mt-1 4xl:mt-2">{role}</p>
  </div>
);

export default TeamCard;
