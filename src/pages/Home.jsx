import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import SEO from "../components/ui/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Curating Signature Experiences"
        description="MR Events — From elegant weddings to high-impact corporate events, we bring your vision to life with precision, creativity, and passion."
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
