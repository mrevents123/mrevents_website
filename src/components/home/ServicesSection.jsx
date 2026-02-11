import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../../constants";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "../ui/ServiceCard";

const ServicesSection = () => (
  <section className="py-16 sm:py-20 md:py-24 2xl:py-28 3xl:py-32 4xl:py-40 bg-white dark:bg-navy-dark">
    <Container>
      <SectionHeader
        tag="What We Do"
        title="Our Services"
        description="Comprehensive event solutions tailored to make your occasion extraordinary."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 2xl:gap-7 3xl:gap-8 4xl:gap-10">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      <div className="text-center mt-8 sm:mt-10 md:mt-12 2xl:mt-14 3xl:mt-16 4xl:mt-20">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs sm:text-sm 2xl:text-[0.9rem] 3xl:text-base 4xl:text-lg text-gold-dark hover:text-gold font-medium transition-colors"
        >
          Explore All Services
          <ArrowRight className="w-4 h-4 2xl:w-4.5 2xl:h-4.5 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6" />
        </Link>
      </div>
    </Container>
  </section>
);

export default ServicesSection;
