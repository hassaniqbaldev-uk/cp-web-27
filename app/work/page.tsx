import { workReview, workShowcase } from "@/config/common";
import BookCall from "@/components/sections/BookCall";
import BookCallForm from "@/components/ui/BookCallForm";
import WorkGrid from "@/components/sections/WorkGrid";
import WorkReviews from "@/components/sections/WorkReviews";
import WorkHero from "@/components/sections/WorkHero";
import WorkFeatured from "@/components/sections/WorkFeatured";

const Work = () => {
  return (
    <>
      <WorkHero />
      <WorkFeatured />
      <WorkGrid />
      {/* TODO: the project and the review are placeholders. */}
      <WorkReviews
        id="work-page-reviews"
        project={workShowcase}
        review={workReview}
      />

      <BookCall
        id="work-book-call"
        aside={<BookCallForm />}
        ctaLabel="How we work"
        ctaHref="/how-we-work"
        label="Let's work together"
        title={
          <>
            Nervous about{" "}
            {/* One span across both words, so the ramp runs from the pink at
                the start of "migration" to the orange "the" sits in — which
                is why "the" reads orange although it comes first. */}
            <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
              the migration?
            </span>
          </>
        }
        subtitle="Tell us about the brand, where it needs to show up and what it needs to say. We will tell you which of the three you actually need."
      />
    </>
  );
};

export default Work;
