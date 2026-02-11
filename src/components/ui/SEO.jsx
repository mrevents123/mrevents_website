import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, path = "/" }) => {
  const siteUrl = "https://mrevents.co.in";
  const fullTitle = `${title} | MR Events`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
