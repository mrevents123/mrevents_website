import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Clientele = lazy(() => import("./pages/Clientele"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-navy-dark">
    <div className="w-10 h-10 2xl:w-12 2xl:h-12 3xl:w-14 3xl:h-14 4xl:w-16 4xl:h-16 border-4 3xl:border-[5px] 4xl:border-[6px] border-gold/30 border-t-gold rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <>
      {/* Skip Navigation for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-navy focus:rounded-lg focus:font-semibold focus:text-sm"
      >
        Skip to main content
      </a>

      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clientele" element={<Clientele />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
