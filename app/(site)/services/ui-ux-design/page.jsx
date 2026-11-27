import {
  customAppCaseStudies,
  uiUxFaqs,
  uiUxPricingPlans,
} from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import Faqs from "@/components/sections/Faqs";
import ServiceCaseStudies from "@/components/sections/ServiceCaseStudies";
import ServicePricing from "@/components/sections/ServicePricing";
import UiUxFlow from "@/components/sections/UiUxFlow";
import UiUxHero from "@/components/sections/UiUxHero";
import UiUxIncluded from "@/components/sections/UiUxIncluded";
import UiUxNeeds from "@/components/sections/UiUxNeeds";
import UiUxProcess from "@/components/sections/UiUxProcess";

const UiUxDesign = () => {
  return (
    <>
      <UiUxHero />

      <UiUxNeeds />

      <UiUxFlow />

      <UiUxIncluded />

      <ServiceCaseStudies
        id="ui-ux-case-studies"
        title={
          <>
            UX and UI <br />
            <span className="text-black/50">design projects</span>
          </>
        }
        items={customAppCaseStudies.slice(1, 5)}
        outlinedDots
      />

      <UiUxProcess />

      <ServicePricing
        id="ui-ux-pricing"
        title={
          <>
            How much does <br />
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              UX design cost?
            </span>
          </>
        }
        subtitle="UX audits from £500. Redesigns from £1,500. Wireframes approved before visual design."
        plans={uiUxPricingPlans}
      />

      <Faqs
        id="ui-ux-faqs"
        title={
          <>
            <span className="whitespace-nowrap">UI/UX design</span> <br />
            <span className="text-black/50">FAQs</span>
          </>
        }
        items={uiUxFaqs}
      />

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <>
                A journey <br />
                people keep{" "}
                <span className="block w-fit bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent max-sm:mx-auto">
                  dropping out of?
                </span>
              </>
            }
            subtitle="Send us the flow and the numbers. We’ll tell you where it breaks and what we’d test first."
            quote="People drop off at the booking step on mobile"
            submitLabel="Send my journey details"
          />
        }
      />
    </>
  );
};

export default UiUxDesign;
