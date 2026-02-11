import { Helmet } from "react-helmet-async";

const SITE_URL = "https://mrevents.co.in";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  name: "MR Events",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "MR Events — From elegant weddings to high-impact corporate events, we bring your vision to life with precision, creativity, and passion.",
  telephone: "+917204021323",
  email: "tapasi@mrevents.co.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "#739, 2nd Floor, 4th Phase Main Rd.",
    addressLocality: "Yelahanka New Town, Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560064",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.1007,
    longitude: 77.5946,
  },
  sameAs: ["https://www.instagram.com/mrevents.co.in/"],
  priceRange: "₹₹–₹₹₹₹",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "20:00",
  },
};

const SEO = ({ title, description, path = "/" }) => {
  const fullTitle = `${title} | MR Events`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${SITE_URL}${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${SITE_URL}${path}`} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {path === "/" && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
