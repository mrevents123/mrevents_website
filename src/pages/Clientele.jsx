import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import SEO from "../components/ui/SEO";
import { logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13 } from "../assets";
import useInView from "../hooks/useInView";

const Clientele = () => {
  const [ref, isInView] = useInView();

  return (
    <>
      <SEO
        title="Our Clientele"
        description="Trusted by 100+ brands & families in Bengaluru. See the corporate clients, wedding couples & organizations that chose MR Events for their celebrations across Karnataka & India."
        path="/clientele"
      />
      <div className="bg-white dark:bg-navy-dark pt-28 sm:pt-32 pb-16 sm:pb-20">
        <Container>
          <SectionHeader
            tag="Our Clients"
            title="Trusted By"
            description="We are proud to have partnered with amazing clients across industries and celebrations."
          />

          <div className="mt-8">
            <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
              {[
                { src: logo2, alt: "BEL" },
                { src: logo3, alt: "Casagrand" },
                { src: logo4, alt: "CRESC" },
                { src: logo5, alt: "FinacPlus" },
                { src: logo6, alt: "Firstsource" },
                { src: logo7, alt: "Havmor Icecream" },
                { src: logo8, alt: "ITC Limited" },
                { src: logo9, alt: "Jamind Technologies" },
                { src: logo10, alt: "Newaster" },
                { src: logo11, alt: "Paragon" },
                { src: logo12, alt: "Unimech" },
                { src: logo13, alt: "Vendantu" },
              ].map((logo, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-center p-4 bg-cream rounded-xl border border-navy/5 dark:border-white/5 transform transition-all duration-700 ease-out ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  } hover:scale-105`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <img src={logo.src} alt={logo.alt} className="max-h-12 sm:max-h-14 md:max-h-16 object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Clientele;
