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
    <div className="bg-white dark:bg-navy-dark pt-28 sm:pt-32 2xl:pt-36 3xl:pt-40 4xl:pt-48 pb-16 sm:pb-20 2xl:pb-24 3xl:pb-28 4xl:pb-36">
      <ServiceListSection />
      <ServiceCTASection />
    </div>
  </>
);

export default Services;
