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
      <Section className="py-[120px]">
        <Container className="bg-grey/40 relative rounded-[20px] px-[80px] pt-[80px] pb-[45px]">
          <SectionHeading
            label="About Creative Pixels"
            title="Strategy first always."
            subtitle={
              "We're a UK digital agency combining strategy, design and technology to build websites, ecommerce experiences and digital products that solve real business problems. Senior people stay involved from the first conversation through launch - and beyond."
            }
            labelClassName="text-[22px] text-center font-medium tracking-[-0.02em] text-black uppercase"
            titleClassName="text-[85px] text-center mt-[10px] mb-[30px] font-extrabold tracking-[-0.07em] text-black leading-[90px]"
            subtitleClassName="text-[18px] text-center leading-[28px] text-text-body tracking-[-0.02em]"
          />

          <div className="mt-[80px] mb-[65px] flex items-start justify-between gap-[20px]">
            <div className="pointer-events-none absolute bottom-0 left-[310px] z-[10] w-max">
              <Image
                src="/images/home/hassan-about-img.png"
                alt=""
                width={542}
                height={576}
                className="block"
              />
            </div>

            <div className="flex flex-col items-start">
              <ul className="items-center justify-between gap-[45px]">
                {aboutHighlights.map(
                  ({ id, icon: Icon, title, subtitle }, index) => (
                    <li key={id} className="">
                      <div className="flex items-start gap-[20px]">
                        <Icon
                          size={37}
                          strokeWidth={1.5}
                          className="text-orange relative top-[6px] shrink-0"
                        />

                        <div className="flex flex-col items-start">
                          <h3 className="text-[35px] font-bold tracking-[-0.07em] text-black">
                            {title}
                          </h3>

                          <p className="text-text-body text-[18px] leading-[28px] tracking-[-0.02em]">
                            {subtitle}
                          </p>
                        </div>
                      </div>

                      {index < aboutHighlights.length - 1 && (
                        <span className="bg-grey left-[20px] my-[20px] block h-px w-[308px]" />
                      )}
                    </li>
                  ),
                )}
              </ul>

              <div className="flex">
                <Button
                  href="/about"
                  className="mt-[45px] rounded-[60px] bg-black px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
                >
                  Read our story
                </Button>
              </div>
            </div>

            <blockquote className="flex w-[385px] flex-col items-start gap-[20px] rounded-[20px] bg-white px-[30px] py-[35px]">
              <Image
                src="/icons/quote-icon.svg"
                alt=""
                width={36}
                height={27}
              />

              <p className="text-text-body text-[22px] font-medium tracking-[-0.02em]">
                &quot;{aboutQuote}&quot;
              </p>
            </blockquote>
          </div>

          <div className="relative z-[20] rounded-[10px] bg-white p-[20px]">
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
                    className="mx-[7.5px] shrink-0 rounded-[10px]"
                  />
                ))}
              </DragMarquee>

              <span className="pointer-events-none absolute inset-y-0 left-0 w-[120px] bg-linear-to-r from-white to-transparent" />

              <span className="pointer-events-none absolute inset-y-0 right-0 w-[120px] bg-linear-to-l from-white to-transparent" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default About;
