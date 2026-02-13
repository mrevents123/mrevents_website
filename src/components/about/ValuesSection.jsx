import { VALUES } from "../../constants";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import MissionCard from "../ui/MissionCard";
import useInView from "../../hooks/useInView";

const ValuesSection = () => {
  const [ref, isInView] = useInView();

  return (
    <section className="py-12 sm:py-16 2xl:py-18 3xl:py-20 4xl:py-28">
      <Container>
        <SectionHeader tag="Our Principles" title="Core Values" />
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 2xl:gap-9 3xl:gap-10 4xl:gap-14"
        >
          {VALUES.map((item, i) => (
            <div
              key={item.title}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? `${i * 150}ms` : "0ms" }}
            >
              <MissionCard {...item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ValuesSection;
