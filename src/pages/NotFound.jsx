import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "../components/ui/SEO";

const NotFound = () => (
  <>
    <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-navy-dark px-6 2xl:px-10 3xl:px-12 4xl:px-16 pt-24">
      <h1 className="font-heading text-7xl sm:text-9xl 2xl:text-[10rem] 3xl:text-[12rem] 4xl:text-[14rem] font-bold text-gold mb-4 4xl:mb-6">404</h1>
      <p className="text-lg sm:text-xl 2xl:text-2xl 3xl:text-2xl 4xl:text-3xl text-navy/60 dark:text-white/60 mb-2 4xl:mb-4">Page Not Found</p>
      <p className="text-sm 2xl:text-base 3xl:text-base 4xl:text-lg text-navy/40 dark:text-white/40 mb-8 4xl:mb-12 text-center max-w-md 2xl:max-w-lg 4xl:max-w-xl">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 2xl:px-8 2xl:py-3.5 3xl:px-9 3xl:py-4 4xl:px-11 4xl:py-5 bg-gold hover:bg-gold-light text-navy font-semibold rounded-full transition-all duration-200 shadow-lg shadow-gold/25 text-sm sm:text-base 2xl:text-[0.95rem] 3xl:text-lg 4xl:text-xl"
      >
        <ArrowLeft size={18} className="2xl:w-5 2xl:h-5 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6" />
        Back to Home
      </Link>
    </div>
  </>
);

export default NotFound;
