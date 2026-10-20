import { guaranteeCaseStudy, guarantees } from "@/config/common";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import Section from "../ui/Section";

const Guarantees = () => {
  return (
    <>
      <Section className="py-[120px]">
        <Container>
          <div className="grid grid-cols-4 gap-[20px]">
            {guarantees.map(({ id, title, description }) => (
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
                src={guaranteeCaseStudy.image}
                alt={guaranteeCaseStudy.imageAlt}
                fill
                sizes="300px"
                className="object-cover"
              />

              <div className="relative flex h-full flex-col justify-between p-[25px]">
                <Image
                  src={guaranteeCaseStudy.logo}
                  alt={guaranteeCaseStudy.logoAlt}
                  width={guaranteeCaseStudy.logoWidth}
                  height={guaranteeCaseStudy.logoHeight}
                  className="w-auto self-start"
                />

                <div className="flex flex-col items-start">
                  <h3 className="text-[25px] font-bold tracking-[-0.04em] text-white">
                    {guaranteeCaseStudy.title}
                  </h3>

                  <p className="text-[16px] tracking-[-0.02em] text-white">
                    {guaranteeCaseStudy.subtitle}
                  </p>
                </div>

                <Link
                  href={guaranteeCaseStudy.href}
                  className="flex items-center justify-between gap-[20px]"
                >
                  <span className="text-blue text-[16px] font-bold tracking-[-0.02em]">
                    {guaranteeCaseStudy.ctaLabel}
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

export default Guarantees;
