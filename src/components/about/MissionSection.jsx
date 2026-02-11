import { MISSION_VISION } from "../../constants";
import Container from "../ui/Container";
import MissionCard from "../ui/MissionCard";

const MissionSection = () => (
  <section className="py-12 sm:py-16 2xl:py-18 3xl:py-20 4xl:py-28 bg-gray-soft dark:bg-navy">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 2xl:gap-9 3xl:gap-10 4xl:gap-14">
        {MISSION_VISION.map((item) => (
          <MissionCard key={item.title} {...item} />
        ))}
      </div>
    </Container>
  </section>
);

export default MissionSection;
