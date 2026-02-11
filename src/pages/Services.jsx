import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../constants";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import SEO from "../components/ui/SEO";

const Services = () => (
  <>
    <SEO
      title="Our Services"
      description="Explore MR Events' comprehensive event services — corporate events, weddings, private parties, product launches, and custom packages."
      path="/services"
    />
    <div className="bg-white dark:bg-navy-dark pt-28 sm:pt-32 pb-16 sm:pb-20">
      <Container>
        <SectionHeader
          tag="What We Offer"
          title="Our Services"
          description="From intimate celebrations to grand corporate gatherings, we deliver tailored event solutions with precision and creativity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 3xl:gap-10">
          {SERVICES.map((service) => (
            <ServiceDetailCard key={service.title} {...service} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 sm:mt-18 text-center p-8 sm:p-12 3xl:p-16 rounded-2xl bg-navy dark:bg-navy-light">
          <h3 className="font-heading text-xl sm:text-2xl 3xl:text-3xl font-bold text-white mb-3">
            Have Something Unique in Mind?
          </h3>
          <p className="text-sm sm:text-base 3xl:text-lg text-white/50 mb-6 max-w-lg mx-auto">
            We also offer fully custom packages designed around your vision, budget, and timeline.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 bg-gold hover:bg-gold-light text-navy font-semibold rounded-full transition-all duration-200 shadow-lg shadow-gold/25 text-sm sm:text-base"
          >
            Get a Custom Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </div>
  </>
);

const ServiceDetailCard = ({ icon: Icon, title, desc }) => (
  <div className="group p-6 sm:p-8 3xl:p-10 rounded-2xl bg-cream dark:bg-navy-light border border-navy/5 dark:border-white/5 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300">
    <div className="w-14 h-14 sm:w-16 sm:h-16 3xl:w-18 3xl:h-18 rounded-xl bg-gold/10 flex items-center justify-center text-gold-dark mb-5 group-hover:bg-gold/20 transition-colors">
      <Icon className="w-7 h-7 sm:w-8 sm:h-8 3xl:w-9 3xl:h-9" />
    </div>
    <h3 className="font-heading text-lg sm:text-xl 3xl:text-2xl font-semibold text-navy dark:text-white mb-2 sm:mb-3">
      {title}
    </h3>
    <p className="text-sm 3xl:text-base text-navy/50 dark:text-white/50 leading-relaxed mb-4">
      {desc}
    </p>
    <Link
      to="/contact"
      className="inline-flex items-center gap-1.5 text-xs sm:text-sm 3xl:text-base text-gold-dark hover:text-gold font-medium transition-colors"
    >
      Enquire Now
      <ArrowRight className="w-4 h-4" />
    </Link>
  </div>
);

export default Services;
