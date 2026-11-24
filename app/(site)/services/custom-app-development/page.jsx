import {
  customAppCaseStudies,
  customAppFaqs,
  customAppPricingPlans,
} from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import CustomAppBuildSteps from "@/components/sections/CustomAppBuildSteps";
import CustomAppFit from "@/components/sections/CustomAppFit";
import CustomAppHero from "@/components/sections/CustomAppHero";
import CustomAppSolutions from "@/components/sections/CustomAppSolutions";
import CustomAppScoping from "@/components/sections/CustomAppScoping";
import CustomAppTechStack from "@/components/sections/CustomAppTechStack";
import Faqs from "@/components/sections/Faqs";
import ServiceCaseStudies from "@/components/sections/ServiceCaseStudies";
import ServiceCostCalculator from "@/components/sections/ServiceCostCalculator";
import ServicePricing from "@/components/sections/ServicePricing";

const CustomAppDevelopment = () => {
  return (
    <>
      <CustomAppHero />

      <CustomAppFit />

      <CustomAppSolutions />

      <ServiceCaseStudies
        id="custom-app-case-study"
        title="Case Studies"
        items={customAppCaseStudies}
        showProjectsLink
      />

      <CustomAppBuildSteps />

      <CustomAppScoping />

      <CustomAppTechStack />

      <ServiceCostCalculator id="custom-app-cost-calculator" />

      <ServicePricing
        id="custom-app-pricing"
        title={
          <>
            How much does custom <br />
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              software cost?
            </span>
          </>
        }
        subtitle="Custom software projects from £5,000. Staged payments. You own the code."
        plans={customAppPricingPlans}
        note="UK software agencies typically charge £25,000 to £50,000 for a first release. Ours start from £5,000."
      />

      <Faqs
        id="custom-app-faqs"
        title={
          <>
            Custom <span className="text-black/50">software FAQs</span>
          </>
        }
        items={customAppFaqs}
      />

      <Footer cta={<ServiceFooterCta />} />
    </>
  );
};

export default CustomAppDevelopment;
