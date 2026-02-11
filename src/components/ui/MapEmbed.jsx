const MapEmbed = () => (
  <div className="rounded-2xl overflow-hidden border border-navy/5 dark:border-white/5 h-56 sm:h-64">
    <iframe
      title="MR Events Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d77.5946!3d13.1007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19543aaf3b3f%3A0x64b2c42e39be8b3f!2sYelahanka%20New%20Town%2C%20Bengaluru%2C%20Karnataka%20560064!5e0!3m2!1sen!2sin!4v1700000000000"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

export default MapEmbed;
