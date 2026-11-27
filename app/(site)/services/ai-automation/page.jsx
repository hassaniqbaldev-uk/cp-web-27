import { aiFaqs, aiFormServices, aiPricingPlans } from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import AiAutomate from "@/components/sections/AiAutomate";
import AiHero from "@/components/sections/AiHero";
import AiNeeds from "@/components/sections/AiNeeds";
import AiResult from "@/components/sections/AiResult";
import AiSafety from "@/components/sections/AiSafety";
import Faqs from "@/components/sections/Faqs";
import ServiceCostCalculator from "@/components/sections/ServiceCostCalculator";
import ServicePricing from "@/components/sections/ServicePricing";

const AiAutomation = () => {
  return (
    <>
      <AiHero />

      <AiNeeds />

      <AiAutomate />

      <ServiceCostCalculator
        id="ai-cost-calculator"
        hoursLabel="Hours per week spent on the task"
        note={
          <>
            Your first automation starts <br />
            from £1,500.
          </>
        }
      />

      <AiResult />

      <AiSafety />

      <ServicePricing
        id="ai-pricing"
        title={
          <>
            How much does <br />
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              automation cost?
            </span>
          </>
        }
        subtitle="Your first automation from £1,500. Scoped around one workflow, live in 2 to 4 weeks."
        plans={aiPricingPlans}
      />

      <Faqs
        id="ai-faqs"
        title={
          <>
            AI and <br className="max-sm:hidden" />
            automation <br />
            <span className="text-black/50">FAQs</span>
          </>
        }
        items={aiFaqs}
      />

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <span className="block w-fit bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] whitespace-nowrap text-transparent max-sm:mx-auto">
                <span className="text-white">
                  Describe <br />
                  the
                </span>{" "}
                manual <br />
                process today.
              </span>
            }
            subtitle="Awkward bits included. We’ll tell you what can be automated, what shouldn’t be, and what a first workflow would cost."
            quote="We copy enquiries from email into the CRM by hand every day."
            submitLabel="Send my process details"
            services={aiFormServices}
          />
        }
      />
    </>
  );
};

export default AiAutomation;
