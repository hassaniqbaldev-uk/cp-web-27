import { croFaqs, croFormServices, croPricingPlans } from "@/config/common";
import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import CroCaseStudy from "@/components/sections/CroCaseStudy";
import CroFixes from "@/components/sections/CroFixes";
import CroHero from "@/components/sections/CroHero";
import CroNeeds from "@/components/sections/CroNeeds";
import CroProcess from "@/components/sections/CroProcess";
import Faqs from "@/components/sections/Faqs";
import ServicePricing from "@/components/sections/ServicePricing";

const Cro = () => {
  return (
    <>
      <CroHero />

      <CroNeeds />

      <CroProcess />

      <CroFixes />

      <CroCaseStudy />

      <ServicePricing
        id="cro-pricing"
        title={
          <>
            How much does{" "}
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              CRO cost?
            </span>
          </>
        }
        subtitle="CRO review from £750. Ongoing optimisation from £750 a month."
        plans={croPricingPlans}
      />

      <Faqs
        id="cro-faqs"
        title={
          <>
            CRO <br />
            <span className="text-black/50">FAQs</span>
          </>
        }
        items={croFaqs}
      />

      <Footer
        cta={
          <ServiceFooterCta
            title={
              <>
                Traffic but not <br />
                enough <br />
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  enquiries?
                </span>
              </>
            }
            subtitle="Send the URL. We’ll tell you the first three things we’d change."
            quote="Plenty of traffic but checkout conversion is low."
            submitLabel="Send my CRO details"
            services={croFormServices}
          />
        }
      />
    </>
  );
};

export default Cro;
