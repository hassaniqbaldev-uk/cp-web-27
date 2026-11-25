import {
  shopifyFaqs,
  shopifyFormServices,
  shopifyPricingDetails,
  shopifyPricingPlans,
  shopifyProjects,
} from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import Faqs from "@/components/sections/Faqs";
import ServicePricing from "@/components/sections/ServicePricing";
import ServiceProjects from "@/components/sections/ServiceProjects";
import ShopifyAudit from "@/components/sections/ShopifyAudit";
import ShopifyBuild from "@/components/sections/ShopifyBuild";
import ShopifyHero from "@/components/sections/ShopifyHero";
import ShopifyMigration from "@/components/sections/ShopifyMigration";
import ShopifyNative from "@/components/sections/ShopifyNative";

const Shopify = () => {
  return (
    <>
      <ShopifyHero />

      <ShopifyNative />

      <ShopifyBuild />

      <ServiceProjects
        id="shopify-projects"
        title={
          <>
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              Shopify stores
            </span>{" "}
            we’ve built
          </>
        }
        items={shopifyProjects}
        large
      />

      <ShopifyMigration />

      <ServicePricing
        id="shopify-pricing"
        title={
          <>
            How much does a <br />
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              Shopify store cost?
            </span>
          </>
        }
        subtitle="Shopify stores from £3,500. Migration from WooCommerce, Magento or Squarespace included where needed."
        plans={shopifyPricingPlans}
        details={shopifyPricingDetails}
      />

      <ShopifyAudit />

      <Faqs
        id="shopify-faqs"
        title={
          <>
            Shopify <br />
            <span className="text-black/50">FAQs</span>
          </>
        }
        items={shopifyFaqs}
      />

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <>
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  Let’s talk
                </span>{" "}
                <br />
                about your <br />
                store
              </>
            }
            subtitle="Send us the store URL and a sentence on what’s not working. We’ll tell you what we’d change and what it would cost to run."
            quote="Our theme fights our range and we pay for too many apps"
            submitLabel="Send my store details"
            services={shopifyFormServices}
          />
        }
      />
    </>
  );
};

export default Shopify;
