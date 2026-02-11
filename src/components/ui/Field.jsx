const Field = ({ label, name, type = "text", value, error, onChange, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg font-medium text-navy/70 dark:text-white/70 mb-1.5 4xl:mb-2">
      {label} {error !== undefined && "*"}
    </label>
    <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} className={`w-full px-4 py-3 2xl:px-5 2xl:py-3.5 3xl:px-5 3xl:py-4 4xl:px-6 4xl:py-5 rounded-xl bg-cream dark:bg-navy-light border text-sm 2xl:text-[0.9rem] 3xl:text-base 4xl:text-lg text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/40 ${error ? "border-red-400" : "border-navy/10 dark:border-white/10"}`} />
    {error && <p className="mt-1 text-xs 4xl:text-sm text-red-500">{error}</p>}
  </div>
);

export default Field;
