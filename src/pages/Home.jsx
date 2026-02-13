import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import SEO from "../components/ui/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Best Event Management Company in Bengaluru"
        description="MR Events — #1 event management company in Bengaluru. Expert wedding planners, corporate event organizers & birthday party decorators. Call +91 72040 21323 for a free quote."
        path="/"
      />
      <div className="font-body">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
      </div>
    </>
  );
};

export default Home;
