import { SERVICES } from "../../constants";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import ServiceDetailCard from "../ui/ServiceDetailCard";

const ServiceListSection = () => (
  <section>
    <Container>
      <SectionHeader
        tag="What We Offer"
        title="Our Services"
        description="From intimate celebrations to grand corporate gatherings, we deliver tailored event solutions with precision and creativity."
      />
      <div className="space-y-10 sm:space-y-14 2xl:space-y-16 3xl:space-y-18 4xl:space-y-24">
        {SERVICES.map((service, i) => (
          <ServiceDetailCard key={service.title} {...service} reversed={i % 2 !== 0} />
        ))}
      </div>
    </Container>
  </section>
);

export default ServiceListSection;
