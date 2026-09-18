import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Guarantees from "@/components/sections/Guarantees";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Expertise />
      <Guarantees />
      <Process />
      <Work />
    </>
  );
};

export default Home;
