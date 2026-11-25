import {
  brandingCaseStudies,
  brandingFaqs,
  brandingPricingPlans,
} from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import BrandingBrandCheck from "@/components/sections/BrandingBrandCheck";
import ServiceProjects from "@/components/sections/ServiceProjects";
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

      <ServiceProjects
        id="branding-case-study"
        title={
          <>
            Brand identity <br />
            <span className="text-black/50">projects, shown in use</span>
          </>
        }
        items={brandingCaseStudies}
        showProjectsLink
      />

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

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <>
                Tell us about <br />
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  your brand.
                </span>
              </>
            }
            subtitle="Tell us where your brand shows up today and what’s not working. We’ll tell you if it needs a refresh, a rebrand or something new, and what it would cost."
            quote="our logo is dated and nothing matches across the site and socials"
            submitLabel="Send my brand details"
          />
        }
      />
    </>
  );
};

export default Branding;
