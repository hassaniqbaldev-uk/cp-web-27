import { aiAutomate } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// Desktop shows these in a row; phones scroll them in a drag marquee.
const cards = aiAutomate.map(({ id, title, description }, index) => (
  <div
    key={id}
    className="flex min-h-[554px] w-full flex-col items-center rounded-full bg-white px-[30px] pt-[46px] pb-[80px] text-center max-sm:min-h-[440px] max-sm:w-[240px] max-sm:px-[22px] max-sm:pt-[30px] max-sm:pb-[50px]"
  >
    <span className="bg-orange/10 text-orange flex size-[185px] shrink-0 items-center justify-center rounded-full text-[85px] leading-[85px] font-bold tracking-[-0.06em] max-sm:size-[140px] max-sm:text-[64px] max-sm:leading-[64px]">
      {String(index + 1).padStart(2, "0")}
    </span>

    <h3 className="mt-[40px] max-w-[170px] text-[25px] leading-[33px] font-bold tracking-[-0.06em] text-balance whitespace-pre-line text-black max-sm:mt-[26px] max-sm:text-[22px] max-sm:leading-[28px]">
      {title}
    </h3>

    <p className="text-text-body mt-[15px] max-w-[195px] text-[18px] leading-[24px] tracking-[-0.02em] max-sm:mt-[10px] max-sm:max-w-[180px] max-sm:text-[15px] max-sm:leading-[20px]">
      {description}
    </p>
  </div>
));

const AiAutomate = () => {
  return (
    <>
      <Section
        id="ai-automate"
        className="bg-orange/10 relative overflow-hidden py-[120px] max-sm:py-[80px]"
      >
        <Image
          src="/images/services/gradient-bg-ai-automate.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10 max-sm:px-[20px]">
          <SectionHeading
            className="text-center"
            title="What we automate"
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[36px] max-sm:leading-[38px]"
          />

          <ul className="mt-[55px] grid grid-cols-4 gap-[30px] max-sm:hidden">
            {cards.map((card) => (
              <li key={card.key} className="flex">
                {card}
              </li>
            ))}
          </ul>

          <DragMarquee
            pauseOnHover
            className="-mx-[20px] mt-[30px] hidden max-sm:block"
            trackClassName="flex w-max items-stretch"
            slideClassName="flex shrink-0 pr-[16px]"
          >
            {cards}
          </DragMarquee>
        </Container>
      </Section>
    </>
  );
};

export default AiAutomate;
