import {
  customAppCaseStudies,
  webDesignFaqs,
  webDesignPricingPlans,
} from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import Faqs from "@/components/sections/Faqs";
import ServiceCaseStudies from "@/components/sections/ServiceCaseStudies";
import ServicePricing from "@/components/sections/ServicePricing";
import WebDesignHero from "@/components/sections/WebDesignHero";
import WebDesignIncluded from "@/components/sections/WebDesignIncluded";
import WebDesignNeeds from "@/components/sections/WebDesignNeeds";
import WebDesignPlatforms from "@/components/sections/WebDesignPlatforms";
import WebDesignProcess from "@/components/sections/WebDesignProcess";
import WebDesignSiteCheck from "@/components/sections/WebDesignSiteCheck";

const WebsiteDesignDevelopment = () => {
  return (
    <>
      <WebDesignHero />

      <WebDesignNeeds />

      <ServiceCaseStudies
        id="web-design-case-studies"
        title={
          <>
            Website projects we’ve <br />
            <span className="text-black/50">designed and built</span>
          </>
        }
        items={customAppCaseStudies.slice(0, 4)}
        background="/images/services/gradient-bg-web-design-case-studies.png"
        outlinedDots
      />

      <WebDesignIncluded />

      <WebDesignSiteCheck />

      <WebDesignProcess />

      <WebDesignPlatforms />

      <ServicePricing
        id="web-design-pricing"
        title={
          <>
            How much does a <br />
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              Website cost?
            </span>
          </>
        }
        subtitle="Websites from £1,500. Staged payments. You own the site."
        plans={webDesignPricingPlans}
        note="Agency websites typically cost £3,000 to £12,000. Ours start from £1,500."
      />

      <Faqs
        id="web-design-faqs"
        title={
          <>
            Web design <br />
            <span className="text-black/50">FAQs</span>
          </>
        }
        items={webDesignFaqs}
      />

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <>
                Tell us about <br />
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  your website.
                </span>
              </>
            }
            subtitle="Tell us what your site needs to do and what’s not working. We’ll tell you whether it needs a redesign, a rebuild or a few fixes, and what it would cost."
            quote="our site looks dated and doesn’t bring in enquiries"
            submitLabel="Send my website details"
          />
        }
      />
    </>
  );
};

export default WebsiteDesignDevelopment;
