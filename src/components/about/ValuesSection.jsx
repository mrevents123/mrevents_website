import { VALUES } from "../../constants";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import MissionCard from "../ui/MissionCard";

const ValuesSection = () => (
  <section className="py-12 sm:py-16">
    <Container>
      <SectionHeader tag="Our Principles" title="Core Values" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 3xl:gap-10">
        {VALUES.map((item) => (
          <MissionCard key={item.title} {...item} />
        ))}
      </div>
    </Container>
  </section>
);

export default ValuesSection;
