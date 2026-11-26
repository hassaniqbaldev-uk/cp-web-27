import { aboutHighlights, aboutQuote, teamMembers } from "@/config/common";
import DragMarquee from "../ui/DragMarquee";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Section from "../ui/Section";

const About = () => {
  return (
    <>
      <Section className="pt-[120px] max-sm:pt-[80px]">
        <Container className="bg-grey/40 rounded-[20px] px-[80px] py-[80px] max-sm:w-[calc(100%-40px)] max-sm:px-[20px] max-sm:pt-[40px] max-sm:pb-[20px]">
          <SectionHeading
            title="Strategy first always."
            subtitle={
              "We’re a UK-led digital agency combining strategy, design and technology to build websites, online stores and software that solve real business problems. Senior people stay involved from the first call through launch, and after."
            }
            titleClassName="text-[65px] text-center mt-[10px] mb-[30px] font-extrabold tracking-[-0.06em] text-black leading-[65px] max-sm:mt-0 max-sm:mb-[16px] max-sm:text-[36px] max-sm:leading-[38px]"
            subtitleClassName="text-[18px] text-center leading-[28px] text-text-body max-w-[930px] tracking-[-0.02em] max-sm:text-[15px] max-sm:leading-[22px]"
          />

          <div className="mt-[60px] flex items-start justify-between gap-[20px] max-sm:mt-[30px] max-sm:flex-col max-sm:items-stretch max-sm:gap-[24px]">
            <ul className="flex w-[330px] flex-col gap-[28px] rounded-[20px] bg-white p-[30px] max-sm:w-full max-sm:gap-[24px] max-sm:bg-transparent max-sm:p-0">
              <li className="flex gap-[15px] max-sm:flex-col max-sm:items-center max-sm:gap-[10px] max-sm:text-center">
                <Image
                  src="/images/home/lock-icon.svg"
                  width={45}
                  height={50}
                  alt="Icon"
                  className="shrink-0 max-sm:h-[34px] max-sm:w-auto"
                />

                <div className="flex flex-col items-start max-sm:items-center">
                  <h3 className="text-[35px] leading-[35px] font-bold tracking-[-0.07em] text-black max-sm:text-[26px] max-sm:leading-[30px]">
                    12 Years
                  </h3>

                  <p className="text-text-body text-[18px] leading-[20px] tracking-[-0.02em] max-sm:mt-[4px] max-sm:text-[14px]">
                    years in business
                  </p>
                </div>
              </li>

              <span className="block h-px w-full bg-black/20 max-sm:hidden" />

              <li>
                <Button
                  href="/about"
                  className="w-full rounded-[60px] bg-black px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:py-[12px] max-sm:text-[15px]"
                >
                  Read our story
                </Button>
              </li>
            </ul>

            <blockquote className="flex w-[385px] flex-col items-start gap-[20px] rounded-[20px] bg-white px-[30px] py-[35px] max-sm:w-full max-sm:gap-[14px] max-sm:p-[24px]">
              <Image
                src="/icons/quote-icon.svg"
                alt=""
                width={36}
                height={27}
              />

              <p className="text-text-body text-[22px] font-medium tracking-[-0.02em] max-sm:text-[17px] max-sm:leading-[25px]">
                &quot;{aboutQuote}&quot;
              </p>
            </blockquote>
          </div>

          <div className="relative mt-[70px] max-sm:mt-[30px]">
            <div className="pointer-events-none absolute bottom-0 left-1/2 z-[10] w-max -translate-x-1/2 max-sm:static max-sm:mx-auto max-sm:w-[240px] max-sm:translate-x-0">
              <Image
                src="/images/home/hassan-about-img.png"
                alt=""
                width={473}
                height={509}
                className="block max-sm:h-auto max-sm:w-full"
              />
            </div>

            <div className="relative z-[20] rounded-[10px] bg-white p-[20px] max-sm:p-[8px]">
              <div className="relative overflow-hidden">
                <DragMarquee
                  as="div"
                  pauseOnHover
                  trackClassName="flex w-max items-center"
                  slideClassName="shrink-0"
                >
                  {teamMembers.map(({ id, src, width, height }) => (
                    <Image
                      key={id}
                      src={src}
                      alt=""
                      width={width}
                      height={height}
                      draggable={false}
                      className="mx-[7.5px] shrink-0 rounded-[10px] max-sm:mx-[4px] max-sm:size-[70px]"
                    />
                  ))}
                </DragMarquee>

                <span className="pointer-events-none absolute inset-y-0 left-0 w-[120px] bg-linear-to-r from-white to-transparent max-sm:w-[30px]" />

                <span className="pointer-events-none absolute inset-y-0 right-0 w-[120px] bg-linear-to-l from-white to-transparent max-sm:w-[30px]" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default About;
