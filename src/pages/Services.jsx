import SEO from "../components/ui/SEO";
import ServiceListSection from "../components/services/ServiceListSection";
import ServiceCTASection from "../components/services/ServiceCTASection";

const Services = () => (
  <>
    <SEO
      title="Our Services"
      description="Explore MR Events' comprehensive event services — corporate events, weddings, private parties, product launches, and custom packages."
      path="/services"
    />
    <div className="bg-white dark:bg-navy-dark pt-28 sm:pt-32 pb-16 sm:pb-20">
      <ServiceListSection />
      <ServiceCTASection />
    </div>
  </>
);

export default Services;
