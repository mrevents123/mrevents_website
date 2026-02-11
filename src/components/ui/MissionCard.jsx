const MissionCard = ({ icon: Icon, title, desc }) => (
  <div className="p-6 sm:p-8 3xl:p-10 rounded-2xl bg-white dark:bg-navy-light border border-navy/5 dark:border-white/5">
    <div className="w-12 h-12 3xl:w-14 3xl:h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold-dark mb-4">
      <Icon className="w-6 h-6 3xl:w-7 3xl:h-7" />
    </div>
    <h3 className="font-heading text-lg sm:text-xl 3xl:text-2xl font-semibold text-navy dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-sm 3xl:text-base text-navy/50 dark:text-white/50 leading-relaxed">{desc}</p>
  </div>
);

export default MissionCard;
