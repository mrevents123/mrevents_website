import { TESTIMONIALS } from "../../constants";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import TestimonialCard from "../ui/TestimonialCard";
import useInView from "../../hooks/useInView";

const TestimonialsSection = () => {
  const [ref, isInView] = useInView();

  return (
    <section className="py-16 sm:py-20 md:py-24 2xl:py-28 3xl:py-32 4xl:py-40 bg-gray-soft dark:bg-navy">
      <Container>
        <SectionHeader
          tag="Testimonials"
          title="What Our Clients Say"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 2xl:gap-7 3xl:gap-8 4xl:gap-10"
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? `${i * 200}ms` : "0ms" }}
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
