import { useState } from "react";
import { CLIENTELE, CLIENTELE_CATEGORIES } from "../../constants";
import ClientCard from "../ui/ClientCard";
import useInView from "../../hooks/useInView";

const ClientFilterSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? CLIENTELE : CLIENTELE.filter((c) => c.category === active);
  const [ref, isInView] = useInView();

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 2xl:gap-3.5 3xl:gap-4 4xl:gap-5 mb-10 sm:mb-14 2xl:mb-16 3xl:mb-18 4xl:mb-24">
        {CLIENTELE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 2xl:px-6 2xl:py-3 3xl:px-7 3xl:py-3 4xl:px-8 4xl:py-3.5 rounded-full text-xs sm:text-sm 2xl:text-[0.85rem] 3xl:text-base 4xl:text-lg font-medium transition-all duration-200 ${
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
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 2xl:gap-6 3xl:gap-7 4xl:gap-10"
      >
        {filtered.map((client, i) => (
          <div
            key={client.name}
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isInView ? `${i * 100}ms` : "0ms" }}
          >
            <ClientCard {...client} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm 3xl:text-base 4xl:text-lg text-navy/40 dark:text-white/40 mt-10">
          No clients found in this category.
        </p>
      )}
    </>
  );
};

export default ClientFilterSection;
