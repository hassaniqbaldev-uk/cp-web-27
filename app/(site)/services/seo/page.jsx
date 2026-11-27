import {
  customAppCaseStudies,
  seoFaqs,
  seoFormServices,
  seoPricingPlans,
} from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import Faqs from "@/components/sections/Faqs";
import SeoCheck from "@/components/sections/SeoCheck";
import SeoHero from "@/components/sections/SeoHero";
import SeoMonthly from "@/components/sections/SeoMonthly";
import SeoNeeds from "@/components/sections/SeoNeeds";
import SeoProcess from "@/components/sections/SeoProcess";
import ServiceCaseStudies from "@/components/sections/ServiceCaseStudies";
import ServicePricing from "@/components/sections/ServicePricing";

const Seo = () => {
  return (
    <>
      <SeoHero />

      <SeoNeeds />

      <SeoMonthly />

      <ServiceCaseStudies
        id="seo-case-studies"
        title={
          <>
            Results, including rebuilds <br className="max-sm:hidden" />
            <span className="text-black/50">where rankings were kept</span>
          </>
        }
        items={customAppCaseStudies.slice(4, 8)}
        outlinedDots
      />

      <SeoProcess />

      <SeoCheck />

      <ServicePricing
        id="seo-pricing"
        title={
          <>
            How much does <br />
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              SEO cost?
            </span>
          </>
        }
        subtitle="SEO audit from £750. Monthly SEO from £500. Measured against a baseline we agree at the start."
        plans={seoPricingPlans}
        note={
          <>
            Small SEO agencies typically charge £1,000 to £2,500 a month. Ours
            start from £500, <br className="max-sm:hidden" />
            on a rolling monthly contract.
          </>
        }
      />

      <Faqs
        id="seo-faqs"
        title={
          <>
            SEO <span className="text-black/50">FAQs</span>
          </>
        }
        items={seoFaqs}
      />

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <>
                Not being <br />
                found for the{" "}
                <span className="block w-fit bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent max-sm:mx-auto">
                  searches <br className="max-sm:hidden" />
                  that matter?
                </span>
              </>
            }
            subtitle="Send the URL and the three searches you want to be found for. We’ll tell you where you stand and what would move it."
            quote="We used to rank for our main service and now we don’t"
            submitLabel="Send my SEO details"
            services={seoFormServices}
            phoneTitleClassName="max-sm:text-[32px] max-sm:leading-[34px]"
          />
        }
      />
    </>
  );
};

export default Seo;
