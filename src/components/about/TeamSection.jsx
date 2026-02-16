import { TEAM } from "../../constants";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import TeamCard from "../ui/TeamCard";
import useInView from "../../hooks/useInView";

const TeamSection = () => {
  const [ref, isInView] = useInView();
  const singlePlacement = TEAM.length === 1 ? "md:col-start-3 md:col-end-4" : "";

  return (
    <section className="py-12 sm:py-16 2xl:py-18 3xl:py-20 4xl:py-28 bg-gray-soft dark:bg-navy">
      <Container>
        <SectionHeader tag="The People" title="Meet Our Team" />
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 2xl:gap-7 3xl:gap-8 4xl:gap-10"
        >
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className={`transition-all duration-700 ${singlePlacement} ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? `${i * 150}ms` : "0ms" }}
            >
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
