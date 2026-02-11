import { MISSION_VISION } from "../../constants";
import Container from "../ui/Container";
import MissionCard from "../ui/MissionCard";

const MissionSection = () => (
  <section className="py-12 sm:py-16 bg-gray-soft dark:bg-navy">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 3xl:gap-10">
        {MISSION_VISION.map((item) => (
          <MissionCard key={item.title} {...item} />
        ))}
      </div>
    </Container>
  </section>
);

export default MissionSection;
