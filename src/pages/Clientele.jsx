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
    <div className="bg-white dark:bg-navy-dark pt-28 sm:pt-32 pb-16 sm:pb-20">
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
