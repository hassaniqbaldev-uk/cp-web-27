import { partnerFaqs, partnerReview, partnerShowcase } from "@/config/common";
import BookCall from "@/components/sections/BookCall";
import Faqs from "@/components/sections/Faqs";
import PartnerCostComparison from "@/components/sections/PartnerCostComparison";
import PartnerFit from "@/components/sections/PartnerFit";
import PartnerHandover from "@/components/sections/PartnerHandover";
import WorkReviews from "@/components/sections/WorkReviews";
import PartnerHero from "@/components/sections/PartnerHero";
import PartnerWorkflow from "@/components/sections/PartnerWorkflow";

const PartnerWithUs = () => {
  return (
    <>
      <PartnerHero />
      <PartnerWorkflow />
      <PartnerCostComparison />
      <PartnerHandover />
      <PartnerFit />
      {/* TODO: the copy, the project and the review are placeholders. */}
      <WorkReviews
        id="partner-work-reviews"
        label="Work + reviews"
        title={
          <>
            Built for agencies, <br />
            signed by them.
          </>
        }
        project={partnerShowcase}
        review={partnerReview}
      />

      {/* TODO: placeholder questions until the real ones are written. */}
      <Faqs
        id="partner-faqs"
        label="Agency questions"
        title={
          <>
            Working with us.{" "}
            <span className="text-black/50">The parts that matter.</span>
          </>
        }
        items={partnerFaqs}
      />

      <BookCall
        id="partner-book-call"
        showContacts={false}
        logoSvgSrc="/images/common/cp-logo-particle.svg"
        logoLabel="CP logo formed from drifting particles"
        label="Let's work together"
        title={
          <>
            Need capacity for something <br />
            <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
              live right now?
            </span>
          </>
        }
        subtitle="Tell us the job, the deadline and where you need support. A rough requirement is enough. Yes or no on fit within 48 hours."
        ctaLabel="Tell us about the idea"
      />
    </>
  );
};

export default PartnerWithUs;
