import {
  woocommerceFaqs,
  woocommerceFormServices,
  woocommercePricingDetails,
  woocommercePricingPlans,
} from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import Faqs from "@/components/sections/Faqs";
import ServicePricing from "@/components/sections/ServicePricing";
import WoocommerceBuilt from "@/components/sections/WoocommerceBuilt";
import WoocommerceCheck from "@/components/sections/WoocommerceCheck";
import WoocommerceFit from "@/components/sections/WoocommerceFit";
import WoocommerceHero from "@/components/sections/WoocommerceHero";
import WoocommerceIncluded from "@/components/sections/WoocommerceIncluded";

const Woocommerce = () => {
  return (
    <>
      <WoocommerceHero />

      <WoocommerceBuilt />

      <WoocommerceFit />

      <WoocommerceCheck />

      <WoocommerceIncluded />

      <ServicePricing
        id="woocommerce-pricing"
        title={
          <>
            How much does a <br />
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              WooCommerce store cost?
            </span>
          </>
        }
        subtitle="WooCommerce stores from £3,500. Migrations from Shopify, Magento and Squarespace available."
        plans={woocommercePricingPlans}
        details={woocommercePricingDetails}
        note="Agency-built online stores typically cost £5,000 to £15,000. Ours start from £3,500."
      />

      <Faqs
        id="woocommerce-faqs"
        title={
          <>
            Woo <br />
            Commerce <br />
            <span className="text-black/50">FAQs</span>
          </>
        }
        items={woocommerceFaqs}
      />

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <>
                A product <br />
                that doesn’t <br />
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  fit a standard
                </span>{" "}
                <br />
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  catalogue?
                </span>
              </>
            }
            subtitle="Send us the store URL and the product that’s hardest to sell online."
            quote="Made-to-measure products with prices that change by size."
            submitLabel="Send my store details"
            services={woocommerceFormServices}
          />
        }
      />
    </>
  );
};

export default Woocommerce;
