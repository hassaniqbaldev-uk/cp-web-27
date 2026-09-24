import { aboutHighlights, aboutQuote, teamMembers } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import DragMarquee from "../ui/DragMarquee";
import { Container } from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Section from "../ui/Section";

const About = () => {
  return (
    <>
      <Section className="py-3xl max-425:px-[2rem] max-425:py-xl">
        <Container className="bg-grey/40 max-425:pt-[5rem] pt-2xl max-425:pb-[2rem] pb-lg px-2xl max-425:px-[2rem] relative rounded-md">
          <SectionHeading
            label="About Creative Pixels"
            title="Strategy first always."
            subtitle={
              "We're a UK digital agency combining strategy, design and technology to build websites, ecommerce experiences and digital products that solve real business problems. Senior people stay involved from the first conversation through launch - and beyond."
            }
            labelClassName="text-body-01 max-425:text-[1.4rem] text-center font-medium tracking-[-0.02em] text-black uppercase"
            titleClassName="text-heading-02 max-425:text-[4.5rem] max-425:leading-[4.5rem] max-425:max-w-[30rem] text-center mt-xs mb-md max-425:mb-sm font-extrabold tracking-[-0.07em] text-black leading-[9rem]"
            subtitleClassName="text-body-02 text-center leading-[2.8rem] text-text-body tracking-[-0.02em] max-425:text-[1.6rem] max-425:leading-[2.4rem] max-425:max-w-[30rem]"
          />

          <div className="gap-sm mt-2xl max-425:mt-[3rem] max-425:mb-[24rem] mb-xl max-425:flex-col flex items-start justify-between">
            <Image
              src="/images/home/hassan-about-img.png"
              alt=""
              width={542}
              height={576}
              className="max-425:left-1/2 max-425:-translate-x-1/2 max-425:h-auto max-425:max-w-[30rem] pointer-events-none absolute bottom-0 left-[31rem] z-[10]"
            />

            <div className="max-425:items-center max-425:w-full flex flex-col items-start">
              <ul className="max-425:flex max-425:w-full gap-lg items-center justify-between">
                {aboutHighlights.map(
                  ({ id, icon: Icon, title, subtitle }, index) => (
                    <li key={id} className="max-425:flex max-425:items-center">
                      <div className="gap-sm max-425:gap-xs max-425:flex-col max-425:items-center max-425:text-center flex items-start">
                        <Icon
                          aria-hidden="true"
                          size={37}
                          strokeWidth={1.5}
                          className="text-orange max-425:top-0 relative top-[.6rem] shrink-0"
                        />

                        <div className="max-425:items-center flex flex-col items-start">
                          <h3 className="text-subheading-02 max-425:text-[2.5rem] font-bold tracking-[-0.07em] text-black">
                            {title}
                          </h3>

                          <p className="text-body-02 max-425:text-[1.4rem] text-text-body max-425:leading-[2rem] leading-[2.8rem] tracking-[-0.02em]">
                            {subtitle}
                          </p>
                        </div>
                      </div>

                      {index < aboutHighlights.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="bg-grey my-sm max-425:my-0 max-425:relative max-425:h-[11.6rem] max-425:w-px left-[2rem] block h-px w-[30.8rem]"
                        />
                      )}
                    </li>
                  ),
                )}
              </ul>

              <Button
                href="/about"
                className="text-body-02 max-425:w-full max-425:text-[1.4rem] px-sm py-xs mt-lg rounded-xl bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Read our story
              </Button>
            </div>

            <blockquote className="px-md gap-sm max-425:w-full max-425:py-md flex w-[38.5rem] flex-col items-start rounded-md bg-white py-[3.5rem]">
              <Image
                src="/icons/quote-icon.svg"
                alt=""
                width={36}
                height={27}
              />

              <p className="text-body-01 max-425:text-[1.8rem] text-text-body font-medium tracking-[-0.02em]">
                &quot;{aboutQuote}&quot;
              </p>
            </blockquote>
          </div>

          <div
            aria-hidden="true"
            className="p-sm max-425:p-[1rem] relative z-[20] rounded-sm bg-white"
          >
            <div className="relative overflow-hidden">
              <DragMarquee query={null} pauseOnHover>
                <div className="flex w-max items-center">
                  {[0, 1].map((pass) =>
                    teamMembers.map(({ id, src, width, height }) => (
                      <Image
                        key={`${id}-${pass}`}
                        src={src}
                        alt=""
                        width={width}
                        height={height}
                        className="max-425:mx-[.4rem] max-425:size-[6.7rem] mx-[1.5rem] shrink-0 rounded-sm"
                      />
                    )),
                  )}
                </div>
              </DragMarquee>

              <span className="max-425:w-[6rem] pointer-events-none absolute inset-y-0 left-0 w-[12rem] bg-linear-to-r from-white to-transparent" />

              <span className="max-425:w-[6rem] pointer-events-none absolute inset-y-0 right-0 w-[12rem] bg-linear-to-l from-white to-transparent" />
            </div>
          </div>

          <ul className="sr-only">
            {teamMembers.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default About;
