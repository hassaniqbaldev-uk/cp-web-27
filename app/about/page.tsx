import AboutBehaviours from "@/components/sections/AboutBehaviours";
import BookCall from "@/components/sections/BookCall";
import AboutHero from "@/components/sections/AboutHero";
import AboutJourney from "@/components/sections/AboutJourney";
import AboutReach from "@/components/sections/AboutReach";
import AboutStory from "@/components/sections/AboutStory";
import AboutWork from "@/components/sections/AboutWork";
import AboutTeam from "@/components/sections/AboutTeam";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutJourney />
      <AboutTeam />
      <AboutBehaviours />
      <AboutReach />
      <AboutWork />

      {/* TODO: point the button at the real page — /how-we-work does not
          exist yet. */}
      <BookCall
        id="about-book-call"
        showContacts={false}
        label="How we work"
        title={
          <>
            Want to see{" "}
            {/* pr compensates for the negative tracking, which otherwise pulls
                the paint box in and clips the last glyph. */}
            <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
              How we work
            </span>
          </>
        }
        subtitle="Scoping, payments, reviews, launch and what happens after. Written down, so there are no surprises."
        logoSvgSrc="/images/about/hand-particle.svg"
        logoLabel="Pointing hand made of drifting particles"
        ctaLabel="How we work"
        ctaHref="/how-we-work"
      />
    </>
  );
};

export default About;
