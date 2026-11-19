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
      <Section className="py-[120px]">
        <Container>
          <div className="flex items-end justify-between gap-[20px]">
            <SectionHeading
              title="How we work"
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            />

            <div className="flex">
              <Button
                href="/contact"
                className="min-w-max rounded-[60px] bg-black px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Book a 15-min call
              </Button>
            </div>
          </div>

          <div className="mt-[60px] grid grid-cols-5 gap-[10px]">
            {howWeWorkItems.map(({ id, title, description }) => (
              <div
                key={id}
                className="border-grey flex flex-col rounded-[20px] border p-[30px]"
              >
                <h3 className="text-[22px] font-bold tracking-[-0.02em] text-black">
                  {title}
                </h3>

                <p className="text-text-body mt-[20px] text-[16px] leading-[24px] tracking-[-0.02em]">
                  {description}
                </p>
              </div>
            ))}

            <div className="relative overflow-hidden rounded-[20px]">
              <Image
                src={howWeWorkCaseStudy.image}
                alt={howWeWorkCaseStudy.imageAlt}
                fill
                sizes="300px"
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
