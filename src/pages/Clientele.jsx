import { useState } from "react";
import { CLIENTELE, CLIENTELE_CATEGORIES } from "../constants";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import SEO from "../components/ui/SEO";

const Clientele = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? CLIENTELE : CLIENTELE.filter((c) => c.category === active);

  return (
    <>
      <SEO
        title="Our Clientele"
        description="Explore the trusted clients and brands that have chosen MR Events for their weddings, corporate events, and celebrations."
        path="/clientele"
      />
      <div className="bg-white dark:bg-navy-dark pt-28 sm:pt-32 pb-16 sm:pb-20">
        <Container>
          <SectionHeader
            tag="Our Clients"
            title="Trusted By"
            description="We are proud to have partnered with amazing clients across industries and celebrations."
          />

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
        </Container>
      </div>
    </>
  );
};

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

export default Clientele;
