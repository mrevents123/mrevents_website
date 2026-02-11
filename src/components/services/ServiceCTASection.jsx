import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";

const ServiceCTASection = () => (
  <section className="mt-14 sm:mt-18">
    <Container>
      <div className="text-center p-8 sm:p-12 3xl:p-16 rounded-2xl bg-navy dark:bg-navy-light">
        <h3 className="font-heading text-xl sm:text-2xl 3xl:text-3xl font-bold text-white mb-3">
          Have Something Unique in Mind?
        </h3>
        <p className="text-sm sm:text-base 3xl:text-lg text-white/50 mb-6 max-w-lg mx-auto">
          We also offer fully custom packages designed around your vision, budget, and timeline.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 bg-gold hover:bg-gold-light text-navy font-semibold rounded-full transition-all duration-200 shadow-lg shadow-gold/25 text-sm sm:text-base"
        >
          Get a Custom Quote
          <ArrowRight size={18} />
        </Link>
      </div>
    </Container>
  </section>
);

export default ServiceCTASection;
