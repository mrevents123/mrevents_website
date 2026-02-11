import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import SEO from "../components/ui/SEO";
import ClientFilterSection from "../components/clientele/ClientFilterSection";

const Clientele = () => (
  <>
    <SEO
      title="Our Clientele"
      description="Explore the trusted clients and brands that have chosen MR Events for their weddings, corporate events, and celebrations."
      path="/clientele"
    />
    <div className="bg-white dark:bg-navy-dark pt-28 sm:pt-32 2xl:pt-36 3xl:pt-40 4xl:pt-48 pb-16 sm:pb-20 2xl:pb-24 3xl:pb-28 4xl:pb-36">
      <Container>
        <SectionHeader
          tag="Our Clients"
          title="Trusted By"
          description="We are proud to have partnered with amazing clients across industries and celebrations."
        />
        <ClientFilterSection />
      </Container>
    </div>
  </>
);

export default Clientele;
