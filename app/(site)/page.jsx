import About from "@/components/sections/About";
import Brands from "@/components/sections/Brands";
import CaseStudy from "@/components/sections/CaseStudy";
import Faqs from "@/components/sections/Faqs";
import Hero from "@/components/sections/Hero";
import HowWeWork from "@/components/sections/HowWeWork";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import Work from "@/components/sections/Work";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <CaseStudy />
      <HowWeWork />
      <Process />
      <WhoWeHelp />
      <About />
      <Work />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
