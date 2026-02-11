import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "../components/ui/SEO";

const NotFound = () => (
  <>
    <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-navy-dark px-6 pt-24">
      <h1 className="font-heading text-7xl sm:text-9xl font-bold text-gold mb-4">404</h1>
      <p className="text-lg sm:text-xl text-navy/60 dark:text-white/60 mb-2">Page Not Found</p>
      <p className="text-sm text-navy/40 dark:text-white/40 mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-light text-navy font-semibold rounded-full transition-all duration-200 shadow-lg shadow-gold/25"
      >
        <ArrowLeft size={18} />
        Back to Home
      </Link>
    </div>
  </>
);

export default NotFound;
