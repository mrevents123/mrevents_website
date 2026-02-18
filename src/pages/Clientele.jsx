import Container from "../components/ui/Container";
import SEO from "../components/ui/SEO";
import { Link } from "react-router-dom";

const Clientele = () => (
  <>
    <SEO
      title="Our Clientele"
      description="Trusted by 100+ brands & families in Bengaluru. See the corporate clients, wedding couples & organizations that chose MR Events for their celebrations across Karnataka & India."
      path="/clientele"
    />
    <div className="bg-white dark:bg-navy-dark pt-28 sm:pt-32 pb-16 sm:pb-20">
      <Container>
        <div className="min-h-[48vh] flex flex-col items-center justify-center text-center py-20">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-navy dark:text-white">Coming Soon</h1>
          <p className="max-w-2xl text-navy/60 dark:text-white/60 mb-6">
            Our clientele showcase is being prepared. We’ll be adding client stories, logos and case studies shortly. Meanwhile, feel free to <Link to="/contact" className="text-gold-dark font-semibold underline">contact us</Link> for references and enquiries.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-light text-navy font-semibold rounded-full transition">
            Contact Us
          </Link>
        </div>
      </Container>
    </div>
  </>
);

export default Clientele;
