import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import SEO from "../components/ui/SEO";
import ContactFormSection from "../components/contact/ContactFormSection";

const Contact = () => (
  <>
    <SEO
      title="Contact Us"
      description="Contact MR Events Bengaluru — call +91 72040 21323, WhatsApp, or fill our form for free event quotes. Wedding, corporate & party bookings in Yelahanka, Bangalore."
      path="/contact"
    />
    <div className="bg-white dark:bg-navy-dark pt-28 sm:pt-32 2xl:pt-36 3xl:pt-40 4xl:pt-48 pb-16 sm:pb-20 2xl:pb-24 3xl:pb-28 4xl:pb-36">
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
