import React from "react";
import { logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13 } from "../../assets";

const LOGOS = [
  { src: logo1, alt: "Aram Experience" },
  { src: logo2, alt: "BEL" },
  { src: logo3, alt: "Casagrand" },
  { src: logo4, alt: "CRESC" },
  { src: logo5, alt: "FinacPlus" },
  { src: logo6, alt: "Firstsource" },
  { src: logo7, alt: "Havmor Icecream" },
  { src: logo8, alt: "ITC" },
  { src: logo9, alt: "Jamind Technologies" },
  { src: logo10, alt: "Newaster" },
  { src: logo11, alt: "Paragon" },
  { src: logo12, alt: "Unimech" },
  { src: logo13, alt: "Vendantu" },
];

const ClienteleMarquee = () => {
  // duplicate logos to create seamless scroll
  const items = [...LOGOS, ...LOGOS];

  return (
    <section className="py-8 sm:py-12 bg-white dark:bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <p className="text-gold-dark text-sm font-semibold uppercase tracking-widest">Our Clients</p>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white">Trusted by brands & families</h3>
        </div>

        <div className="marquee overflow-hidden">
          <div className="marquee-track flex items-center gap-8">
            {items.map((item, i) => (
              <div key={`${item.alt}-${i}`} className="flex-shrink-0 w-28 h-16 sm:w-32 sm:h-20 md:w-36 md:h-24 flex items-center justify-center opacity-90">
                <img src={item.src} alt={item.alt} className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClienteleMarquee;
