import { VALUES } from "../../constants";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import MissionCard from "../ui/MissionCard";

const ValuesSection = () => (
  <section className="py-12 sm:py-16 2xl:py-18 3xl:py-20 4xl:py-28">
    <Container>
      <SectionHeader tag="Our Principles" title="Core Values" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 2xl:gap-9 3xl:gap-10 4xl:gap-14">
        {VALUES.map((item) => (
          <MissionCard key={item.title} {...item} />
        ))}
      </div>
    </Container>
  </section>
);

export default ValuesSection;
