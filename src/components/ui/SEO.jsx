import { Helmet } from "react-helmet-async";

const SITE_URL = "https://mrevents.co.in";
const SITE_NAME = "MR Events";
const LOGO_URL = `${SITE_URL}/og-image.png`;

// ─── Local Business Schema (appears on every page) ───
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  description:
    "MR Events — Best event management company in Bengaluru. Weddings, corporate events, birthday parties & product launches.",
  telephone: "+917204021323",
  email: "tapasi@mrevents.co.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "#739, 2nd Floor, 4th Phase Main Rd.",
    addressLocality: "Yelahanka New Town",
    addressRegion: "Karnataka",
    postalCode: "560064",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.1007,
    longitude: 77.5946,
  },
  areaServed: [
    { "@type": "City", name: "Bengaluru" },
    { "@type": "State", name: "Karnataka" },
    { "@type": "Country", name: "India" },
  ],
  sameAs: ["https://www.instagram.com/mrevents.co.in/"],
  priceRange: "₹₹–₹₹₹₹",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "20:00",
  },
};

// ─── FAQ Schema (boosts Google "People also ask" ranking) ───
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of events does MR Events manage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MR Events specializes in corporate events, weddings, birthday parties, product launches, and custom event packages in Bengaluru and across India.",
      },
    },
    {
      "@type": "Question",
      name: "Where is MR Events located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MR Events is located at #739, 2nd Floor, 4th Phase Main Rd., Yelahanka New Town, Bengaluru 560064, Karnataka, India.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact MR Events for a booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can call us at +91 72040 21323, email tapasi@mrevents.co.in, message us on WhatsApp, or fill out the contact form on our website.",
      },
    },
    {
      "@type": "Question",
      name: "Does MR Events handle destination weddings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, MR Events plans and manages destination weddings across India, including Goa, Rajasthan, Kerala, and international locations.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of hiring MR Events?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our pricing varies based on event type, scale, and requirements. Contact us for a free personalized quote tailored to your vision and budget.",
      },
    },
  ],
};

// ─── Breadcrumb generator ───
const getBreadcrumbs = (path, title) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    ...(path !== "/"
      ? [{ "@type": "ListItem", position: 2, name: title, item: `${SITE_URL}${path}` }]
      : []),
  ],
});

// ─── Page-specific schemas ───
const pageSchemas = {
  "/services": {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: { "@id": `${SITE_URL}/#organization` },
    serviceType: "Event Management",
    areaServed: { "@type": "City", name: "Bengaluru" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Event Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Events" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Planning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Birthday Parties" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Launches" } },
      ],
    },
  },
  "/contact": {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact MR Events",
    url: `${SITE_URL}/contact`,
    mainEntity: { "@id": `${SITE_URL}/#organization` },
  },
  "/about": {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About MR Events",
    url: `${SITE_URL}/about`,
    mainEntity: { "@id": `${SITE_URL}/#organization` },
  },
};

const SEO = ({ title, description, path = "/" }) => {
  const fullTitle = path === "/"
    ? "MR Events | Best Event Management Company in Bengaluru"
    : `${title} | MR Events – Bengaluru`;

  const schemas = [
    localBusiness,
    getBreadcrumbs(path, title),
    ...(path === "/" ? [faqSchema] : []),
    ...(pageSchemas[path] ? [pageSchemas[path]] : []),
  ];

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
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
