import { customAppCaseStudy } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import CircularTextButton from "../ui/CircularTextButton";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const CustomAppCaseStudy = () => {
  const {
    image,
    imageWidth,
    imageHeight,
    imageAlt,
    tag,
    title,
    ctaLabel,
    href,
  } = customAppCaseStudy;

  return (
    <>
      <Section id="custom-app-case-study" className="py-[120px]">
        <Container>
          <div className="relative flex justify-center text-center">
            <SectionHeading
              title="Case Studies"
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            />

            <div className="absolute top-[-70px] right-[320px]">
              <CircularTextButton
                href="/work"
                image="/images/home/circular-text-projects.png"
                imageWidth={113}
                imageHeight={113}
                className="size-[112px]"
                ringClassName="h-auto w-full"
              >
                <ArrowUpRight
                  size={28}
                  strokeWidth={2.5}
                  className="text-black"
                />
              </CircularTextButton>
            </div>
          </div>

          <div className="mt-[80px] flex items-center gap-[45px] rounded-[20px] bg-white p-[45px] shadow-[0px_20px_80px_0px_rgba(0,0,0,0.08)]">
            <div className="bg-grey/60 relative h-[380px] w-[560px] shrink-0 overflow-hidden rounded-[20px]">
              {image && (
                <Image
                  src={image}
                  alt={imageAlt}
                  width={imageWidth}
                  height={imageHeight}
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <div className="flex flex-col items-start">
              <span className="bg-blue/10 text-blue rounded-full px-[25px] py-[12px] text-[16px] font-semibold tracking-[-0.02em] uppercase">
                {tag}
              </span>

              <h3 className="mt-[30px] text-[45px] leading-[50px] font-bold tracking-[-0.05em] text-black">
                {title}
              </h3>

              <div className="flex">
                <Button
                  href={href}
                  className="mt-[30px] rounded-full bg-black px-[20px] py-[12px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase"
                >
                  {ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default CustomAppCaseStudy;
