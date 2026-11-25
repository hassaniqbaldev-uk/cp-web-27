import { printEventsFaqs, printEventsFormServices } from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import Faqs from "@/components/sections/Faqs";
import PrintEventsBrand from "@/components/sections/PrintEventsBrand";
import PrintEventsHero from "@/components/sections/PrintEventsHero";
import PrintEventsItems from "@/components/sections/PrintEventsItems";
import PrintEventsPricing from "@/components/sections/PrintEventsPricing";
import PrintEventsProcess from "@/components/sections/PrintEventsProcess";
import PrintEventsQuote from "@/components/sections/PrintEventsQuote";
import PrintEventsStand from "@/components/sections/PrintEventsStand";
import PrintEventsWork from "@/components/sections/PrintEventsWork";

const PrintEvents = () => {
  return (
    <>
      <PrintEventsHero />

      <PrintEventsBrand />

      <PrintEventsItems />

      <PrintEventsWork />

      <PrintEventsQuote />

      <PrintEventsProcess />

      <PrintEventsStand />

      <PrintEventsPricing />

      <Faqs
        id="print-events-faqs"
        title={
          <span className="whitespace-nowrap">
            Print and event <br />
            <span className="text-black/50">design questions</span>
          </span>
        }
        items={printEventsFaqs}
      />

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <>
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  Got an event
                </span>{" "}
                <br />
                or a print run <br />
                coming up?
              </>
            }
            subtitle="Tell us the piece, the sizes and the date. We’ll tell you the cost and what we need from you."
            quote="500 A5 flyers for an open day on 12 March, or a 3m backdrop for a trade show."
            submitLabel="Send my print details"
            services={printEventsFormServices}
          />
        }
      />
    </>
  );
};

export default PrintEvents;
