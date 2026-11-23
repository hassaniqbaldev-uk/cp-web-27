import { brandingFaqs, brandingPricingPlans } from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import BrandingBrandCheck from "@/components/sections/BrandingBrandCheck";
import BrandingCaseStudy from "@/components/sections/BrandingCaseStudy";
import BrandingHero from "@/components/sections/BrandingHero";
import BrandingIdentity from "@/components/sections/BrandingIdentity";
import BrandingNeeds from "@/components/sections/BrandingNeeds";
import BrandingProcess from "@/components/sections/BrandingProcess";
import BrandingRollout from "@/components/sections/BrandingRollout";
import BrandingSocialDesign from "@/components/sections/BrandingSocialDesign";
import Faqs from "@/components/sections/Faqs";
import ServicePricing from "@/components/sections/ServicePricing";

const Branding = () => {
  return (
    <>
      <BrandingHero />

      <BrandingNeeds />

      <BrandingProcess />

      <BrandingCaseStudy />

      <BrandingBrandCheck />

      <BrandingIdentity />

      <BrandingRollout />

      <BrandingSocialDesign />

      <ServicePricing
        id="branding-pricing"
        title={
          <>
            How much does <br />
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              branding cost?
            </span>
          </>
        }
        subtitle="Branding from £1,000. You approve the direction before we build the full system."
        plans={brandingPricingPlans}
        note="Agencies typically charge £3,000 to £10,000 for a full brand identity. Ours start from £1,000."
      />

      <Faqs
        id="branding-faqs"
        title={
          <>
            Branding <br />
            <span className="text-black/50">FAQs</span>
          </>
        }
        items={brandingFaqs}
      />

      <Footer cta={<ServiceFooterCta />} />
    </>
  );
};

export default Branding;
