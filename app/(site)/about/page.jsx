import AboutBehaviours from "@/components/sections/AboutBehaviours";
import BookCall from "@/components/sections/BookCall";
import AboutHero from "@/components/sections/AboutHero";
import AboutJourney from "@/components/sections/AboutJourney";
import AboutReach from "@/components/sections/AboutReach";
import AboutStory from "@/components/sections/AboutStory";
import WorkReviews from "@/components/sections/WorkReviews";
import AboutTeam from "@/components/sections/AboutTeam";
import Brands from "@/components/sections/Brands";
import Footer from "@/components/layout/Footer";
import AboutFooterCta from "@/components/layout/AboutFooterCta";

const About = () => {
  return (
    <>
      <AboutHero />
      <Brands />
      <AboutStory />
      <AboutJourney />
      <AboutTeam />
      <AboutBehaviours />
      <AboutReach />
      <WorkReviews />
      <Footer cta={<AboutFooterCta />} />
    </>
  );
};

export default About;
