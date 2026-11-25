import {
  ecommerceFaqs,
  ecommerceFormServices,
  ecommercePricingPlans,
} from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import EcommerceHero from "@/components/sections/EcommerceHero";
import EcommerceIncluded from "@/components/sections/EcommerceIncluded";
import EcommerceNeeds from "@/components/sections/EcommerceNeeds";
import EcommercePlatforms from "@/components/sections/EcommercePlatforms";
import EcommerceQuiz from "@/components/sections/EcommerceQuiz";
import EcommerceWork from "@/components/sections/EcommerceWork";
import Faqs from "@/components/sections/Faqs";
import ServicePricing from "@/components/sections/ServicePricing";

const Ecommerce = () => {
  return (
    <>
      <EcommerceHero />

      <EcommerceNeeds />

      <EcommercePlatforms />

      <EcommerceQuiz />

      <EcommerceIncluded />

      <EcommerceWork />

      <ServicePricing
        id="ecommerce-pricing"
        title={
          <>
            How much does an <br />
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              ecommerce website cost?
            </span>
          </>
        }
        subtitle="Online stores from £3,500. Staged payments. 3-month guarantee."
        plans={ecommercePricingPlans}
        note="Agency-built online stores typically cost £5,000 to £15,000. Ours start from £3,500."
      />

      <Faqs
        id="ecommerce-faqs"
        title={
          <>
            Ecommerce <br />
            <span className="text-black/50">FAQs</span>
          </>
        }
        items={ecommerceFaqs}
      />

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <>
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  Losing orders
                </span>{" "}
                <br />
                or outgrowing <br />
                your platform?
              </>
            }
            subtitle="Send us the store URL and tell us how you sell today. We’ll look before we talk."
            quote="We’re on Squarespace with 300 products and want to move to Shopify."
            submitLabel="Send my store details"
            services={ecommerceFormServices}
          />
        }
      />
    </>
  );
};

export default Ecommerce;
