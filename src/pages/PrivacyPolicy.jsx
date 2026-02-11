import SEO from "../components/ui/SEO";
import Container from "../components/ui/Container";
import { CONTACT_INFO, PRIVACY_POLICY } from "../constants";

const Section = ({ title, children }) => (
  <div>
    <h2 className="font-heading text-lg sm:text-xl 2xl:text-2xl 3xl:text-2xl 4xl:text-3xl font-semibold text-navy dark:text-white mb-3 4xl:mb-4">
      {title}
    </h2>
    <div className="text-sm sm:text-base 2xl:text-[0.95rem] 3xl:text-lg 4xl:text-xl text-navy/60 dark:text-white/50 leading-relaxed space-y-3 4xl:space-y-4">
      {children}
    </div>
  </div>
);

const linkClass = "text-gold hover:text-gold-dark underline underline-offset-2";

const renderSection = (section) => (
  <Section key={section.title} title={section.title}>
    {section.intro && <p>{section.intro}</p>}

    {section.content?.map((item, i) =>
      typeof item === "string" ? (
        <p key={i}>{item}</p>
      ) : (
        <p key={i}><strong>{item.label}:</strong> {item.text}</p>
      )
    )}

    {section.list && (
      <ul className="list-disc list-inside space-y-1.5 pl-2">
        {section.list.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )}

    {section.footer && (
      <p>
        {section.footer.replace("via email.", "")}{" "}
        <a href={CONTACT_INFO.emailHref} className={linkClass}>{CONTACT_INFO.email}</a>.
      </p>
    )}

    {section.showContact && (
      <ul className="space-y-1.5 pl-2">
        <li><strong>Email:</strong> <a href={CONTACT_INFO.emailHref} className={linkClass}>{CONTACT_INFO.email}</a></li>
        <li><strong>Phone:</strong> <a href={CONTACT_INFO.phoneHref} className={linkClass}>{CONTACT_INFO.phone}</a></li>
        <li><strong>Address:</strong> {CONTACT_INFO.address}</li>
      </ul>
    )}
  </Section>
);

const PrivacyPolicy = () => (
  <>
    <SEO
      title="Privacy Policy"
      description="MR Events privacy policy — how we collect, use, and protect your personal information."
      path="/privacy-policy"
    />

    <section className="pt-32 sm:pt-36 2xl:pt-40 3xl:pt-44 4xl:pt-52 pb-16 sm:pb-20 2xl:pb-24 4xl:pb-32 bg-white dark:bg-navy-dark">
      <Container>
        <div className="max-w-3xl 2xl:max-w-4xl 4xl:max-w-5xl mx-auto">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl 2xl:text-[2.5rem] 3xl:text-5xl 4xl:text-6xl font-bold text-navy dark:text-white mb-2 4xl:mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm 2xl:text-base 4xl:text-lg text-navy/40 dark:text-white/30 mb-10 sm:mb-12 2xl:mb-14 4xl:mb-18">
            Last updated: {PRIVACY_POLICY.lastUpdated}
          </p>

          <div className="space-y-8 sm:space-y-10 2xl:space-y-12 4xl:space-y-14">
            {PRIVACY_POLICY.sections.map(renderSection)}
          </div>
        </div>
      </Container>
    </section>
  </>
);

export default PrivacyPolicy;
