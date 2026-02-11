import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";

const ServiceCTASection = () => (
  <section className="mt-14 sm:mt-18 2xl:mt-20 3xl:mt-24 4xl:mt-28">
    <Container>
      <div className="text-center p-8 sm:p-12 2xl:p-14 3xl:p-16 4xl:p-20 rounded-2xl bg-navy dark:bg-navy-light">
        <h3 className="font-heading text-xl sm:text-2xl 2xl:text-[1.7rem] 3xl:text-3xl 4xl:text-4xl font-bold text-white mb-3 4xl:mb-5">
          Have Something Unique in Mind?
        </h3>
        <p className="text-sm sm:text-base 2xl:text-[1.05rem] 3xl:text-lg 4xl:text-xl text-white/50 mb-6 4xl:mb-8 max-w-lg 2xl:max-w-xl 3xl:max-w-2xl mx-auto">
          We also offer fully custom packages designed around your vision, budget, and timeline.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 2xl:px-9 2xl:py-4 3xl:px-10 3xl:py-4 4xl:px-12 4xl:py-5 bg-gold hover:bg-gold-light text-navy font-semibold rounded-full transition-all duration-200 shadow-lg shadow-gold/25 text-sm sm:text-base 2xl:text-[0.95rem] 3xl:text-lg 4xl:text-xl"
        >
          Get a Custom Quote
          <ArrowRight size={18} className="3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6" />
        </Link>
      </div>
    </Container>
  </section>
);

export default ServiceCTASection;
