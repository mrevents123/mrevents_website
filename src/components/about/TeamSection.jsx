import { TEAM } from "../../constants";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import TeamCard from "../ui/TeamCard";

const TeamSection = () => (
  <section className="py-12 sm:py-16 2xl:py-18 3xl:py-20 4xl:py-28 bg-gray-soft dark:bg-navy">
    <Container>
      <SectionHeader tag="The People" title="Meet Our Team" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 2xl:gap-7 3xl:gap-8 4xl:gap-10">
        {TEAM.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </Container>
  </section>
);

export default TeamSection;
