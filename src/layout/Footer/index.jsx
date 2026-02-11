import { Link } from "react-router-dom";
import { QUICK_LINKS } from "../../constants";
import Container from "../../components/ui/Container";
import { BrandColumn, LinksColumn, ServicesColumn, ContactColumn } from "./FooterColumns";

const Footer = () => (
  <footer className="bg-navy text-white pt-14 sm:pt-16 2xl:pt-18 3xl:pt-20 4xl:pt-24">
    <Container>
      <div className="pb-12 sm:pb-14 2xl:pb-16 3xl:pb-18 4xl:pb-22 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 2xl:gap-18 3xl:gap-20 4xl:gap-24">
        <BrandColumn />
        <LinksColumn title="Quick Links" items={QUICK_LINKS} />
        <ServicesColumn />
        <ContactColumn />
      </div>
    </Container>

    <div className="border-t border-white/10">
      <Container>
        <div className="py-5 sm:py-6 2xl:py-7 3xl:py-7 4xl:py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs 2xl:text-[0.8rem] 3xl:text-sm 4xl:text-base text-white/30">
          <p>&copy; {new Date().getFullYear()} MR Events. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <p>Designed with ♥ for unforgettable experiences.</p>
          </div>
        </div>
      </Container>
    </div>
  </footer>
);

export default Footer;
