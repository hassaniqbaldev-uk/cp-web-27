import { guaranteeCaseStudy, guarantees } from "@/config/common";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import Section from "../ui/Section";

const Guarantees = () => {
  return (
    <>
      <Section className="py-3xl">
        <Container>
          {/* The section has no visible heading, but the cards below are
              headings, so this names the group and keeps the outline in order
              rather than jumping from the page h1 straight to h3s. */}
          <h2 className="sr-only">Our guarantees</h2>

          <div className="gap-sm grid grid-cols-4">
            {guarantees.map(({ id, title, description }) => (
              <div
                key={id}
                className="border-grey p-md flex flex-col rounded-md border"
              >
                <h3 className="text-body-01 font-bold tracking-[-0.02em] text-black">
                  {title}
                </h3>

                <p className="text-body-03 text-text-body mt-sm leading-[2.4rem] tracking-[-0.02em]">
                  {description}
                </p>
              </div>
            ))}

            <div className="relative overflow-hidden rounded-md">
              <Image
                src={guaranteeCaseStudy.image}
                alt={guaranteeCaseStudy.imageAlt}
                fill
                sizes="30rem"
                className="object-cover"
              />

              <div className="relative flex h-full flex-col justify-between p-[2.5rem]">
                <Image
                  src={guaranteeCaseStudy.logo}
                  alt={guaranteeCaseStudy.logoAlt}
                  width={guaranteeCaseStudy.logoWidth}
                  height={guaranteeCaseStudy.logoHeight}
                  className="w-auto self-start"
                />

                <div className="flex flex-col items-start">
                  <h3 className="text-subheading-01 font-bold tracking-[-0.04em] text-white">
                    {guaranteeCaseStudy.title}
                  </h3>

                  <p className="text-body-03 tracking-[-0.02em] text-white">
                    {guaranteeCaseStudy.subtitle}
                  </p>
                </div>

                {/* Label and arrow sit in one link rather than two, so there is
                    a single target with a single accessible name. */}
                <Link
                  href={guaranteeCaseStudy.href}
                  className="gap-sm flex items-center justify-between"
                >
                  <span className="text-body-03 text-blue font-bold tracking-[-0.02em]">
                    {guaranteeCaseStudy.ctaLabel}
                  </span>

                  <span className="flex size-[4rem] shrink-0 items-center justify-center rounded-full bg-white">
                    <MoveRight
                      aria-hidden="true"
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
