import { aiAutomate } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const AiAutomate = () => {
  return (
    <>
      <Section
        id="ai-automate"
        className="bg-orange/10 relative overflow-hidden py-[120px]"
      >
        <Image
          src="/images/services/gradient-bg-ai-automate.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10">
          <SectionHeading
            className="text-center"
            title="What we automate"
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <ul className="mt-[55px] grid grid-cols-4 gap-[30px]">
            {aiAutomate.map(({ id, title, description }, index) => (
              <li
                key={id}
                className="flex min-h-[554px] flex-col items-center rounded-full bg-white px-[30px] pt-[46px] pb-[80px] text-center"
              >
                <span className="bg-orange/10 text-orange flex size-[185px] shrink-0 items-center justify-center rounded-full text-[85px] leading-[85px] font-bold tracking-[-0.06em]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-[40px] max-w-[170px] text-[25px] leading-[33px] font-bold tracking-[-0.06em] text-balance whitespace-pre-line text-black">
                  {title}
                </h3>

                <p className="text-text-body mt-[15px] max-w-[195px] text-[18px] leading-[24px] tracking-[-0.02em]">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default AiAutomate;
