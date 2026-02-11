import { MISSION_VISION, VALUES, TEAM } from "../constants";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import SEO from "../components/ui/SEO";

const About = () => (
  <>
    <SEO
      title="About Us"
      description="Learn about MR Events — our mission, vision, values, and the passionate team behind India's premier event management brand."
      path="/about"
    />
    <div className="bg-white dark:bg-navy-dark pt-28 sm:pt-32 pb-16 sm:pb-20">
      {/* Hero */}
      <Container>
        <SectionHeader
          tag="Who We Are"
          title="About MR Events"
          description="We are a passionate team of event professionals dedicated to turning your dreams into unforgettable experiences."
        />
      </Container>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 bg-gray-soft dark:bg-navy">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 3xl:gap-10">
            {MISSION_VISION.map((item) => (
              <MissionCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
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

      {/* Team */}
      <section className="py-12 sm:py-16 bg-gray-soft dark:bg-navy">
        <Container>
          <SectionHeader tag="The People" title="Meet Our Team" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 3xl:gap-8">
            {TEAM.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  </>
);

const MissionCard = ({ icon: Icon, title, desc }) => (
  <div className="p-6 sm:p-8 3xl:p-10 rounded-2xl bg-white dark:bg-navy-light border border-navy/5 dark:border-white/5">
    <div className="w-12 h-12 3xl:w-14 3xl:h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold-dark mb-4">
      <Icon className="w-6 h-6 3xl:w-7 3xl:h-7" />
    </div>
    <h3 className="font-heading text-lg sm:text-xl 3xl:text-2xl font-semibold text-navy dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-sm 3xl:text-base text-navy/50 dark:text-white/50 leading-relaxed">{desc}</p>
  </div>
);

const TeamCard = ({ name, role }) => (
  <div className="text-center p-5 sm:p-6 3xl:p-8 rounded-2xl bg-white dark:bg-navy-light border border-navy/5 dark:border-white/5 hover:border-gold/30 hover:shadow-lg transition-all duration-300">
    <div className="w-16 h-16 sm:w-20 sm:h-20 3xl:w-24 3xl:h-24 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark mx-auto mb-3 sm:mb-4">
      <span className="font-heading text-xl sm:text-2xl 3xl:text-3xl font-bold">
        {name.charAt(0)}
      </span>
    </div>
    <h4 className="font-heading text-sm sm:text-base 3xl:text-lg font-semibold text-navy dark:text-white">
      {name}
    </h4>
    <p className="text-xs sm:text-sm 3xl:text-base text-navy/40 dark:text-white/40 mt-1">{role}</p>
  </div>
);

export default About;
