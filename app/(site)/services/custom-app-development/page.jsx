import { customAppFaqs } from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import CustomAppBuildSteps from "@/components/sections/CustomAppBuildSteps";
import CustomAppCaseStudy from "@/components/sections/CustomAppCaseStudy";
import CustomAppCostCalculator from "@/components/sections/CustomAppCostCalculator";
import CustomAppPricing from "@/components/sections/CustomAppPricing";
import CustomAppSolutions from "@/components/sections/CustomAppSolutions";
import CustomAppScoping from "@/components/sections/CustomAppScoping";
import CustomAppTechStack from "@/components/sections/CustomAppTechStack";
import Faqs from "@/components/sections/Faqs";

const CustomAppDevelopment = () => {
  return (
    <>
      <CustomAppSolutions />

      <CustomAppCaseStudy />

      <CustomAppBuildSteps />

      <CustomAppScoping />

      <CustomAppTechStack />

      <CustomAppCostCalculator />

      <CustomAppPricing />

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
