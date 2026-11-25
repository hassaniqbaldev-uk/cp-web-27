import {
  paidMediaFaqs,
  paidMediaFormServices,
  paidMediaPricingDetails,
  paidMediaPricingPlans,
} from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import Faqs from "@/components/sections/Faqs";
import PaidMediaChannels from "@/components/sections/PaidMediaChannels";
import PaidMediaCheck from "@/components/sections/PaidMediaCheck";
import PaidMediaHero from "@/components/sections/PaidMediaHero";
import PaidMediaJob from "@/components/sections/PaidMediaJob";
import PaidMediaPages from "@/components/sections/PaidMediaPages";
import PaidMediaWaste from "@/components/sections/PaidMediaWaste";
import ServicePricing from "@/components/sections/ServicePricing";

const PaidMedia = () => {
  return (
    <>
      <PaidMediaHero />

      <PaidMediaChannels />

      <PaidMediaJob />

      <PaidMediaWaste />

      <PaidMediaCheck />

      <PaidMediaPages />

      <ServicePricing
        id="paid-media-pricing"
        title={
          <>
            How much does <br />
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              paid media cost?
            </span>
          </>
        }
        subtitle="Paid media from £500 a month per channel + ad spend. Landing pages built in house."
        plans={paidMediaPricingPlans}
        details={paidMediaPricingDetails}
        note={
          <>
            Landing pages from £1,000, built by the same team · No setup fee
            when you start on <br />a 3-month plan · Ad spend is paid straight
            to Google or Meta.
          </>
        }
      />

      <Faqs
        id="paid-media-faqs"
        title={
          <>
            Paid media <br />
            <span className="text-black/50">questions</span>
          </>
        }
        items={paidMediaFaqs}
      />

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <>
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  Not sure
                </span>{" "}
                <br />
                where your <br />
                ad budget is <br />
                going?
              </>
            }
            subtitle="Send us the accounts and the pages. We’ll show you what’s working, what’s wasting money and which channel to put more into."
            quote="Spending on Google and Meta but not sure which brings enquiries."
            submitLabel="Send my ad details"
            services={paidMediaFormServices}
          />
        }
      />
    </>
  );
};

export default PaidMedia;
