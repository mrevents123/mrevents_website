const Field = ({ label, name, type = "text", value, error, onChange, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-xs sm:text-sm font-medium text-navy/70 dark:text-white/70 mb-1.5">
      {label} {error !== undefined && "*"}
    </label>
    <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} className={`w-full px-4 py-3 rounded-xl bg-cream dark:bg-navy-light border text-sm text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/40 ${error ? "border-red-400" : "border-navy/10 dark:border-white/10"}`} />
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

export default Field;
