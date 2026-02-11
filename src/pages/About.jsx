import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import SEO from "../components/ui/SEO";
import MissionSection from "../components/about/MissionSection";
import ValuesSection from "../components/about/ValuesSection";
import TeamSection from "../components/about/TeamSection";

const About = () => (
  <>
    <SEO
      title="About Us"
      description="Learn about MR Events — our mission, vision, values, and the passionate team behind India's premier event management brand."
      path="/about"
    />
    <div className="bg-white dark:bg-navy-dark pt-28 sm:pt-32 2xl:pt-36 3xl:pt-40 4xl:pt-48 pb-16 sm:pb-20 2xl:pb-24 3xl:pb-28 4xl:pb-36">
      <Container>
        <SectionHeader
          tag="Who We Are"
          title="About MR Events"
          description="We are a passionate team of event professionals dedicated to turning your dreams into unforgettable experiences."
        />
      </Container>
      <MissionSection />
      <ValuesSection />
      <TeamSection />
    </div>
  </>
);

export default About;
