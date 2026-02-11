import { TESTIMONIALS } from "../../constants";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import TestimonialCard from "../ui/TestimonialCard";

const TestimonialsSection = () => (
  <section className="py-16 sm:py-20 md:py-24 3xl:py-32 4xl:py-40 bg-gray-soft dark:bg-navy">
    <Container>
      <SectionHeader
        tag="Testimonials"
        title="What Our Clients Say"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 3xl:gap-8 4xl:gap-10">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </Container>
  </section>
);

export default TestimonialsSection;
