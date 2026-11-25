import {
  googleAdsFaqs,
  googleAdsFormServices,
  googleAdsPricingDetails,
  googleAdsPricingPlans,
  googleAdsResults,
} from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import Faqs from "@/components/sections/Faqs";
import GoogleAdsCheck from "@/components/sections/GoogleAdsCheck";
import GoogleAdsClick from "@/components/sections/GoogleAdsClick";
import GoogleAdsFit from "@/components/sections/GoogleAdsFit";
import GoogleAdsHero from "@/components/sections/GoogleAdsHero";
import GoogleAdsProcess from "@/components/sections/GoogleAdsProcess";
import ServicePricing from "@/components/sections/ServicePricing";
import ServiceResults from "@/components/sections/ServiceResults";

const GoogleAds = () => {
  return (
    <>
      <GoogleAdsHero />

      <GoogleAdsFit />

      <GoogleAdsClick />

      <GoogleAdsProcess />

      <ServiceResults
        id="google-ads-results"
        title={
          <>
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              Google Ads
            </span>{" "}
            results
          </>
        }
        subtitle="What you get every month: spend, enquiries, cost per enquiry, and what we’re changing next."
        items={googleAdsResults}
        cta={{ label: "View all results", href: "/work" }}
      />

      <GoogleAdsCheck />

      <ServicePricing
        id="google-ads-pricing"
        title={
          <>
            How much does <br />
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              Google Ads cost?
            </span>
          </>
        }
        subtitle="Google Ads management from £500 a month + ad spend. Landing pages built in house."
        plans={googleAdsPricingPlans}
        details={googleAdsPricingDetails}
        note={
          <>
            UK agencies typically charge £750 to £3,000 a month to manage Google
            Ads. <br />
            Ours start from £500.
          </>
        }
        background="/images/services/gradient-bg-web-design-case-studies.png"
      />

      <Faqs
        id="google-ads-faqs"
        title={
          <>
            Google Ads <br />
            <span className="text-black/50">questions</span>
          </>
        }
        items={googleAdsFaqs}
      />

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <>
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  Running
                </span>{" "}
                <br />
                <span className="mr-[-0.07em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  search ads
                </span>{" "}
                to <br />a homepage?
              </>
            }
            subtitle="Send us the account and the page. We will show you where the budget is going and what a proper landing page would change."
            quote="Lots of clicks but few enquiries, no tracking, ads going to the homepage."
            submitLabel="Send my account details"
            services={googleAdsFormServices}
          />
        }
      />
    </>
  );
};

export default GoogleAds;
