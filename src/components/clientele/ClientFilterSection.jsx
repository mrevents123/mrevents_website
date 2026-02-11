import { useState } from "react";
import { CLIENTELE, CLIENTELE_CATEGORIES } from "../../constants";
import ClientCard from "../ui/ClientCard";

const ClientFilterSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? CLIENTELE : CLIENTELE.filter((c) => c.category === active);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
        {CLIENTELE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
              active === cat
                ? "bg-gold text-navy shadow-lg shadow-gold/25"
                : "bg-cream dark:bg-navy-light text-navy/50 dark:text-white/50 hover:text-navy dark:hover:text-white border border-navy/5 dark:border-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Client Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 3xl:gap-7">
        {filtered.map((client) => (
          <ClientCard key={client.name} {...client} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-navy/40 dark:text-white/40 mt-10">
          No clients found in this category.
        </p>
      )}
    </>
  );
};

export default ClientFilterSection;
