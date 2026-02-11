const MissionCard = ({ icon: Icon, title, desc }) => (
  <div className="p-6 sm:p-8 2xl:p-9 3xl:p-10 4xl:p-14 rounded-2xl bg-white dark:bg-navy-light border border-navy/5 dark:border-white/5">
    <div className="w-12 h-12 2xl:w-13 2xl:h-13 3xl:w-14 3xl:h-14 4xl:w-18 4xl:h-18 rounded-xl bg-gold/10 flex items-center justify-center text-gold-dark mb-4 4xl:mb-6">
      <Icon className="w-6 h-6 2xl:w-6.5 2xl:h-6.5 3xl:w-7 3xl:h-7 4xl:w-9 4xl:h-9" />
    </div>
    <h3 className="font-heading text-lg sm:text-xl 2xl:text-[1.35rem] 3xl:text-2xl 4xl:text-3xl font-semibold text-navy dark:text-white mb-2 4xl:mb-3">
      {title}
    </h3>
    <p className="text-sm 2xl:text-[0.9rem] 3xl:text-base 4xl:text-lg text-navy/50 dark:text-white/50 leading-relaxed">{desc}</p>
  </div>
);

export default MissionCard;
