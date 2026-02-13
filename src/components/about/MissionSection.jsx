import { MISSION_VISION } from "../../constants";
import Container from "../ui/Container";
import MissionCard from "../ui/MissionCard";
import useInView from "../../hooks/useInView";

const MissionSection = () => {
  const [ref, isInView] = useInView();

  return (
    <section className="py-12 sm:py-16 2xl:py-18 3xl:py-20 4xl:py-28 bg-gray-soft dark:bg-navy">
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 2xl:gap-9 3xl:gap-10 4xl:gap-14"
        >
          {MISSION_VISION.map((item, i) => (
            <div
              key={item.title}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? `${i * 200}ms` : "0ms" }}
            >
              <MissionCard {...item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MissionSection;
