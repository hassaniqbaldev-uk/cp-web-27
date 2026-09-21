import AboutBehaviours from "@/components/sections/AboutBehaviours";
import AboutHero from "@/components/sections/AboutHero";
import AboutJourney from "@/components/sections/AboutJourney";
import AboutReach from "@/components/sections/AboutReach";
import AboutStory from "@/components/sections/AboutStory";
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
    </>
  );
};

export default About;
