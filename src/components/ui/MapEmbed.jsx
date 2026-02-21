import React from "react";

const MapEmbed = () => (
  <div className="rounded-2xl overflow-hidden border border-navy/5 dark:border-white/5 h-56 sm:h-64 2xl:h-72 3xl:h-80 4xl:h-96">
    <iframe
      title="MR Events Location"
      src="https://maps.google.com/maps?q=13.1007,77.5946&z=15&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      sandbox="allow-scripts allow-same-origin allow-popups"
    />
  </div>
);

export default MapEmbed;
