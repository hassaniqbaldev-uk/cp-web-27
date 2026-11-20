import { howWeWorkFaqs } from "@/config/common";
import BookCall from "@/components/sections/BookCall";
import Faqs from "@/components/sections/Faqs";
import HowWeWorkCards from "@/components/sections/HowWeWorkCards";
import HowWeWorkHero from "@/components/sections/HowWeWorkHero";
import Footer from "@/components/layout/Footer";

const HowWeWork = () => {
  return (
    <>
      <HowWeWorkHero />
      <HowWeWorkCards />
      <Faqs
        id="how-we-work-faqs"
        title={
          <>
            Before you ask.{" "}
            <span className="text-black/50">The answers are here.</span>
          </>
        }
        items={howWeWorkFaqs}
      />

      <BookCall id="how-we-work-book-call" />
      <Footer />
    </>
  );
};

export default HowWeWork;
