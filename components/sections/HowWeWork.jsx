import { howWeWorkCaseStudy, howWeWorkItems } from "@/config/common";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const HowWeWork = () => {
  return (
    <>
      <Section className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          <div className="flex items-end justify-between gap-[20px] max-sm:flex-col max-sm:items-center max-sm:gap-[24px] max-sm:text-center">
            <SectionHeading
              title="How we work"
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[36px] max-sm:leading-[38px]"
            />

            <div className="flex">
              <Button
                href="/contact"
                className="min-w-max rounded-[60px] bg-black px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:text-[16px]"
              >
                Book a 15-min call
              </Button>
            </div>
          </div>

          <div className="mt-[60px] grid grid-cols-5 gap-[10px] max-sm:mt-[30px] max-sm:grid-cols-1">
            {howWeWorkItems.map(({ id, title, description }) => (
              <div
                key={id}
                className="border-grey flex flex-col rounded-[20px] border p-[30px] max-sm:p-[24px]"
              >
                <h3 className="text-[22px] font-bold tracking-[-0.02em] text-black">
                  {title}
                </h3>

                <p className="text-text-body mt-[20px] text-[16px] leading-[24px] tracking-[-0.02em] max-sm:mt-[12px]">
                  {description}
                </p>
              </div>
            ))}

            <div className="relative overflow-hidden rounded-[20px] max-sm:h-[300px]">
              <Image
                src={howWeWorkCaseStudy.image}
                alt={howWeWorkCaseStudy.imageAlt}
                fill
                sizes="(max-width: 479px) 100vw, 300px"
                className="object-cover"
              />

              <div className="relative flex h-full flex-col justify-between p-[25px]">
                <Image
                  src={howWeWorkCaseStudy.logo}
                  alt={howWeWorkCaseStudy.logoAlt}
                  width={howWeWorkCaseStudy.logoWidth}
                  height={howWeWorkCaseStudy.logoHeight}
                  className="w-auto self-start"
                />

                <div className="flex flex-col items-start">
                  <h3 className="text-[25px] font-bold tracking-[-0.04em] text-white">
                    {howWeWorkCaseStudy.title}
                  </h3>

                  <p className="text-[16px] tracking-[-0.02em] text-white">
                    {howWeWorkCaseStudy.subtitle}
                  </p>
                </div>

                <Link
                  href={howWeWorkCaseStudy.href}
                  className="flex items-center justify-between gap-[20px]"
                >
                  <span className="text-blue text-[16px] font-bold tracking-[-0.02em]">
                    {howWeWorkCaseStudy.ctaLabel}
                  </span>

                  <span className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-white">
                    <MoveRight
                      size={20}
                      strokeWidth={2.5}
                      className="text-black"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default HowWeWork;
