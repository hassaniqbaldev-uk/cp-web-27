import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Guarantees from "@/components/sections/Guarantees";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Expertise />
      <Guarantees />
      <Process />
    </>
  );
};

export default Home;
