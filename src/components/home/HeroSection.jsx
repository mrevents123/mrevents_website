import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { heroVideo1, heroVideo2, heroVideo3 } from "../../assets";

const VIDEOS = [heroVideo1, heroVideo2, heroVideo3];
const SLIDE_DURATION = 8000;

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % VIDEOS.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === active) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [active]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Slideshow Background */}
      {VIDEOS.map((src, i) => (
        <video
          key={i}
          ref={(el) => (videoRefs.current[i] = el)}
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy/50" />

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Play video ${i + 1}`}
            className={`h-1.5 2xl:h-2 4xl:h-2.5 rounded-full transition-all duration-500 ${
              i === active ? "w-8 2xl:w-10 4xl:w-12 bg-gold" : "w-4 2xl:w-5 4xl:w-6 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Subtle gold glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 2xl:w-[420px] 3xl:w-[500px] 4xl:w-[700px] h-64 sm:h-80 md:h-96 2xl:h-[420px] 3xl:h-[500px] 4xl:h-[700px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-56 sm:w-72 md:w-80 2xl:w-[360px] 3xl:w-[400px] 4xl:w-[600px] h-56 sm:h-72 md:h-80 2xl:h-[360px] 3xl:h-[400px] 4xl:h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-5xl 2xl:max-w-[1200px] 3xl:max-w-6xl 4xl:max-w-[1800px] mx-auto px-5 sm:px-6 lg:px-8 2xl:px-10 3xl:px-12 4xl:px-16 text-center pt-24 sm:pt-28 md:pt-20 pb-12 sm:pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 2xl:px-5 2xl:py-2.5 3xl:px-6 3xl:py-2.5 4xl:px-8 4xl:py-3 rounded-full bg-white/10 border border-white/15 text-gold text-[10px] sm:text-xs 2xl:text-[0.8rem] 3xl:text-sm 4xl:text-base font-medium tracking-wider uppercase mb-6 sm:mb-8 2xl:mb-10 4xl:mb-12 backdrop-blur-sm">
          <Sparkles size={14} className="2xl:w-4 2xl:h-4 3xl:w-4 3xl:h-4 4xl:w-5 4xl:h-5" />
          Curating Signature Experiences
        </div>

        {/* Heading */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5rem] 3xl:text-8xl 4xl:text-9xl font-bold leading-tight tracking-tight text-white">
          Where Every Event
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold to-gold-light">
            Becomes a Memory
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 2xl:mt-7 3xl:mt-8 4xl:mt-10 text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-xl 4xl:text-2xl text-white/60 max-w-md sm:max-w-lg md:max-w-2xl 2xl:max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl mx-auto leading-relaxed">
          From elegant weddings to high-impact corporate events, we bring your
          vision to life with precision, creativity, and passion.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 2xl:mt-12 3xl:mt-14 4xl:mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 2xl:gap-5 4xl:gap-6">
          <Link
            to="/contact"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 2xl:px-9 2xl:py-4 3xl:px-10 3xl:py-4 4xl:px-14 4xl:py-5 bg-gold hover:bg-gold-light text-navy font-semibold rounded-full transition-all duration-200 shadow-lg shadow-gold/25 hover:shadow-gold/40 text-sm sm:text-base 2xl:text-[1rem] 3xl:text-lg 4xl:text-xl"
          >
            Plan Your Event
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform 2xl:w-5 2xl:h-5 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto text-center px-7 py-3 sm:px-8 sm:py-3.5 2xl:px-9 2xl:py-4 3xl:px-10 3xl:py-4 4xl:px-14 4xl:py-5 border border-white/20 hover:border-gold text-white/80 hover:text-white font-medium rounded-full transition-all duration-200 backdrop-blur-sm text-sm sm:text-base 2xl:text-[1rem] 3xl:text-lg 4xl:text-xl"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
