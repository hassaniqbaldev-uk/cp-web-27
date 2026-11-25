import {
  wordpressCaseStudies,
  wordpressFaqs,
  wordpressFormServices,
  wordpressPricingPlans,
} from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import Faqs from "@/components/sections/Faqs";
import ServiceCaseStudies from "@/components/sections/ServiceCaseStudies";
import ServicePricing from "@/components/sections/ServicePricing";
import WordpressChoice from "@/components/sections/WordpressChoice";
import WordpressFit from "@/components/sections/WordpressFit";
import WordpressHero from "@/components/sections/WordpressHero";
import WordpressProcess from "@/components/sections/WordpressProcess";
import WordpressServices from "@/components/sections/WordpressServices";

const Wordpress = () => {
  return (
    <>
      <WordpressHero />

      <WordpressChoice />

      <WordpressFit />

      <WordpressServices />

      <ServiceCaseStudies
        id="wordpress-case-studies"
        title={
          <>
            Wordpress sites we’ve <br />
            <span className="text-black/50">designed and built</span>
          </>
        }
        items={wordpressCaseStudies}
        className="bg-grey/40"
        outlinedDots
      />

      <WordpressProcess />

      <ServicePricing
        id="wordpress-pricing"
        title={
          <>
            How much does an <br />
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              wordpress site cost?
            </span>
          </>
        }
        subtitle="Focused WordPress builds from £1,500. Staged payments. 3-month guarantee."
        plans={wordpressPricingPlans}
        note="Agency-built online stores typically cost £5,000 to £15,000. Ours start from £3,500."
      />

      <Faqs
        id="wordpress-faqs"
        title={
          <>
            Wordpress <br />
            <span className="text-black/50">FAQs</span>
          </>
        }
        items={wordpressFaqs}
      />

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <>
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  Rebuilding,
                </span>{" "}
                <br />
                <span className="mr-[-0.07em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  migrating
                </span>{" "}
                or <br />
                stuck with a <br />
                theme?
              </>
            }
            subtitle="Tell us what the site needs to do and what it’s built on now. We’ll say plainly whether WordPress is still the right home for it."
            quote="Our Wordpress site is slow and hard for the team to edit."
            submitLabel="Send my site details"
            services={wordpressFormServices}
          />
        }
      />
    </>
  );
};

export default Wordpress;
