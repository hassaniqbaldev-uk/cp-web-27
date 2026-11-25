import {
  metaAdsFaqs,
  metaAdsFormServices,
  metaAdsPricingDetails,
  metaAdsPricingPlans,
  metaAdsResults,
} from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import Faqs from "@/components/sections/Faqs";
import MetaAdsFit from "@/components/sections/MetaAdsFit";
import MetaAdsHero from "@/components/sections/MetaAdsHero";
import MetaAdsOffer from "@/components/sections/MetaAdsOffer";
import MetaAdsProcess from "@/components/sections/MetaAdsProcess";
import MetaAdsReview from "@/components/sections/MetaAdsReview";
import ServicePricing from "@/components/sections/ServicePricing";
import ServiceResults from "@/components/sections/ServiceResults";

const MetaAds = () => {
  return (
    <>
      <MetaAdsHero />

      <MetaAdsOffer />

      <MetaAdsProcess />

      <MetaAdsFit />

      <ServiceResults
        id="meta-ads-results"
        title={
          <>
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              Meta Ads
            </span>{" "}
            results
          </>
        }
        subtitle="What you get every month: spend, leads, cost per lead, and what we’re changing next."
        items={metaAdsResults}
        background="/images/services/gradient-bg-ai-automate.png"
        iconClassName="bg-blue/10 text-blue"
      />

      <MetaAdsReview />

      <ServicePricing
        id="meta-ads-pricing"
        title={
          <>
            How much does <br />
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              Meta ads management cost?
            </span>
          </>
        }
        subtitle="Meta ads from £500 a month + ad spend. Creative and copy included."
        plans={metaAdsPricingPlans}
        details={metaAdsPricingDetails}
        note={
          <>
            UK agencies charge £500 to £1,650 a month for Meta ads, often with
            creative <br />
            extra. Ours start from £500, with creative included.
          </>
        }
      />

      <Faqs
        id="meta-ads-faqs"
        title={
          <>
            Meta ads <br />
            <span className="text-black/50">questions</span>
          </>
        }
        items={metaAdsFaqs}
      />

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <>
                <span className="mr-[-0.07em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  Social ads
                </span>{" "}
                that <br />
                get likes and <br />
                not much else?
              </>
            }
            subtitle="Send us the ad, the page and what happens after the form. We will tell you which one is losing the lead."
            quote="Lots of likes but no enquiries, leads go cold, ads going to the homepage"
            submitLabel="Send my ad details"
            services={metaAdsFormServices}
          />
        }
      />
    </>
  );
};

export default MetaAds;
