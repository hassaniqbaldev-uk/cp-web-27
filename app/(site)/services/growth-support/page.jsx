import {
  growthFaqs,
  growthFormServices,
  growthPricingDetails,
  growthPricingPlans,
} from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import Faqs from "@/components/sections/Faqs";
import GrowthCheck from "@/components/sections/GrowthCheck";
import GrowthHero from "@/components/sections/GrowthHero";
import GrowthMonth from "@/components/sections/GrowthMonth";
import GrowthNeeds from "@/components/sections/GrowthNeeds";
import GrowthTimeline from "@/components/sections/GrowthTimeline";
import ServicePricing from "@/components/sections/ServicePricing";

const GrowthSupport = () => {
  return (
    <>
      <GrowthHero />

      <GrowthNeeds />

      <GrowthMonth />

      <GrowthCheck />

      <GrowthTimeline />

      <ServicePricing
        id="growth-pricing"
        title={
          <>
            How much does <br />
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              support cost?
            </span>
          </>
        }
        subtitle="From £300 a month. Rolling. Stop with notice. Works with sites we didn’t build."
        plans={growthPricingPlans}
        details={growthPricingDetails}
        note="Agency time from £75 an hour, with no lock-in."
      />

      <Faqs
        id="growth-faqs"
        title={
          <>
            Website <br />
            support <span className="text-black/50">FAQs</span>
          </>
        }
        items={growthFaqs}
      />

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <span className="block w-fit bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] whitespace-nowrap text-transparent">
                <span className="text-white">
                  Describe <br />
                  the
                </span>{" "}
                manual <br />
                process today.
              </span>
            }
            subtitle="Awkward bits included. We’ll tell you what can be automated, what shouldn’t be, and what a first workflow would cost."
            quote="Our site hasn’t been updated since launch and the developer has gone."
            submitLabel="Send my site details"
            services={growthFormServices}
          />
        }
      />
    </>
  );
};

export default GrowthSupport;
