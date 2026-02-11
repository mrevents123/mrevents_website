import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import SEO from "../components/ui/SEO";
import ContactFormSection from "../components/contact/ContactFormSection";

const Contact = () => (
  <>
    <SEO
      title="Contact Us"
      description="Get in touch with MR Events. Reach out for enquiries, bookings, and custom event quotes."
      path="/contact"
    />
    <div className="bg-white dark:bg-navy-dark pt-28 sm:pt-32 pb-16 sm:pb-20">
      <Container>
        <SectionHeader
          tag="Get in Touch"
          title="Contact Us"
          description="Have a question or ready to plan your event? We'd love to hear from you."
        />
        <ContactFormSection />
      </Container>
    </div>
  </>
);

export default Contact;
