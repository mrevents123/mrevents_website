
import { Helmet } from "react-helmet";

const MapEmbed = () => (
  <>
    <Helmet>
      {/* Google Analytics gtag.js */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-LVXW2S64FT"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LVXW2S64FT');
        `}
      </script>
    </Helmet>
    <div className="rounded-2xl overflow-hidden border border-navy/5 dark:border-white/5 h-56 sm:h-64 2xl:h-72 3xl:h-80 4xl:h-96">
      <iframe
        title="MR Events Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124408.39454730561!2d77.52658509560713!3d12.987047608346039!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19f42c062839%3A0x8bc0e7921dbfecd!2sMR%20Events!5e0!3m2!1sen!2sin!4v1771677702530!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
    </div>
  </>
);

export default MapEmbed;
