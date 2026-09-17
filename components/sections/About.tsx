import { aboutHighlights, aboutQuote, teamMembers } from "@/config/common";
import { Quote } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Section from "../ui/Section";

const About = () => {
  return (
    <>
      <Section className="py-3xl">
        <Container className="bg-grey/40 pt-2xl pb-lg px-2xl relative rounded-md">
          <SectionHeading
            label="About Creative Pixels"
            title="Strategy first always."
            subtitle={
              "We're a UK digital agency combining strategy, design and technology to build websites, ecommerce experiences and digital products that solve real business problems. Senior people stay involved from the first conversation through launch - and beyond."
            }
            labelClassName="text-body-01 text-center font-medium tracking-[-0.02em] text-black uppercase"
            titleClassName="text-heading-02 text-center mt-xs mb-md font-extrabold tracking-[-0.07em] text-black leading-[9rem]"
            subtitleClassName="text-body-02 text-center leading-[2.8rem] text-text-body tracking-[-0.02em]"
          />

          <div className="gap-sm mt-2xl mb-xl flex items-start justify-between">
            {/* Decorative: the surrounding copy already carries the meaning,
                so an empty alt keeps it out of the accessibility tree. */}
            <Image
              src="/images/home/hassan-about-img.png"
              alt=""
              width={542}
              height={576}
              className="pointer-events-none absolute bottom-0 left-[31rem] z-[10]"
            />

            <div className="flex flex-col items-start">
              <ul>
                {aboutHighlights.map(
                  ({ id, icon: Icon, title, subtitle }, index) => (
                    <li key={id}>
                      <div className="gap-sm flex items-start">
                        <Icon
                          aria-hidden="true"
                          size={37}
                          strokeWidth={1.5}
                          className="text-orange relative top-[.6rem] shrink-0"
                        />

                        <div className="flex flex-col items-start">
                          <h3 className="text-subheading-02 font-bold tracking-[-0.07em] text-black">
                            {title}
                          </h3>

                          <p className="text-body-02 text-text-body leading-[2.8rem] tracking-[-0.02em]">
                            {subtitle}
                          </p>
                        </div>
                      </div>

                      {index < aboutHighlights.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="bg-grey my-sm block h-px w-[30.8rem]"
                        />
                      )}
                    </li>
                  ),
                )}
              </ul>

              <Button
                href="/about"
                className="text-body-02 px-sm py-xs mt-lg rounded-xl bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Read our story
              </Button>
            </div>

            <blockquote className="px-md gap-sm flex w-[38.5rem] flex-col items-start rounded-md bg-white py-[3.5rem]">
              <Quote
                aria-hidden="true"
                size={40}
                strokeWidth={2}
                className="text-orange"
              />

              <p className="text-body-01 text-text-body font-medium tracking-[-0.02em]">
                &quot;{aboutQuote}&quot;
              </p>
            </blockquote>
          </div>

          {/* The marquee repeats its children to loop, so the visible track is
              hidden from assistive tech and the team is listed once below.
              Nothing in here is focusable, so nothing becomes unreachable. */}
          <div
            aria-hidden="true"
            className="p-sm relative z-[20] rounded-sm bg-white"
          >
            <Marquee
              autoFill
              speed={40}
              gradient
              gradientColor="white"
              gradientWidth="12rem"
            >
              {teamMembers.map(({ id, src, width, height }) => (
                <Image
                  key={id}
                  src={src}
                  alt=""
                  width={width}
                  height={height}
                  className="mx-[1.5rem] rounded-sm"
                />
              ))}
            </Marquee>
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
