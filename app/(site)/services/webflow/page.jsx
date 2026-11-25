import {
  webflowFaqs,
  webflowFormServices,
  webflowPricingDetails,
  webflowPricingPlans,
  webflowProjects,
} from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import Faqs from "@/components/sections/Faqs";
import ServicePricing from "@/components/sections/ServicePricing";
import ServiceProjects from "@/components/sections/ServiceProjects";
import WebflowChoice from "@/components/sections/WebflowChoice";
import WebflowFit from "@/components/sections/WebflowFit";
import WebflowHero from "@/components/sections/WebflowHero";
import WebflowReview from "@/components/sections/WebflowReview";

const Webflow = () => {
  return (
    <>
      <WebflowHero />

      <WebflowChoice />

      <WebflowFit />

      <WebflowReview />

      <ServiceProjects
        id="webflow-projects"
        title={
          <>
            Webflow Sites <span className="text-black/50">we’ve built</span>
          </>
        }
        subtitle="Designed by us. Built in the platform that fits."
        items={webflowProjects}
        background="/images/services/gradient-bg-web-design-case-studies.png"
        large
      />

      <ServicePricing
        id="webflow-pricing"
        title={
          <>
            How much does a <br />
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              Webflow site cost?
            </span>
          </>
        }
        subtitle="Webflow sites from £1,500. WordPress or Squarespace migration included where needed."
        plans={webflowPricingPlans}
        details={webflowPricingDetails}
        note={
          <>
            Agencies typically charge $5,000 to $15,000 for a small Webflow{" "}
            <br />
            marketing site. Ours start from £1,500.
          </>
        }
      />

      <Faqs
        id="webflow-faqs"
        title={
          <>
            Webflow <br />
            <span className="text-black/50">questions</span>
          </>
        }
        items={webflowFaqs}
      />

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <>
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  Marketing
                </span>{" "}
                <br />
                team wants to <br />
                own the site?
              </>
            }
            subtitle="Send us the current site and who updates it. We will say whether Webflow is the right move."
            quote="We’re on WordPress but the team can’t edit it without breaking things"
            submitLabel="Send my site details"
            services={webflowFormServices}
          />
        }
      />
    </>
  );
};

export default Webflow;
