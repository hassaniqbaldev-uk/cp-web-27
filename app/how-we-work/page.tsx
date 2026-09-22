import { howWeWorkFaqs } from "@/config/common";
import BookCall from "@/components/sections/BookCall";
import Faqs from "@/components/sections/Faqs";
import HowWeWorkCards from "@/components/sections/HowWeWorkCards";
import HowWeWorkHero from "@/components/sections/HowWeWorkHero";

const HowWeWork = () => {
  return (
    <>
      <HowWeWorkHero />
      <HowWeWorkCards />
      <Faqs
        id="how-we-work-faqs"
        label="Process questions"
        title={
          <>
            Before you ask.{" "}
            <span className="text-black/50">The answers are here.</span>
          </>
        }
        items={howWeWorkFaqs}
      />

      {/* The headset is the default artwork, so it is not passed. */}
      <BookCall id="how-we-work-book-call" />
    </>
  );
};

export default HowWeWork;
