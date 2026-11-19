import { homeWorkProjects } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import CircularTextButton from "../ui/CircularTextButton";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const Work = () => {
  return (
    <>
      <Section id="work" className="py-[120px]">
        <Container>
          <div className="relative flex justify-center text-center">
            <SectionHeading
              title="Work with a job to do"
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            />

            <div className="absolute top-[-70px] right-[190px]">
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

          <ul className="mt-[80px] grid grid-cols-2 items-start gap-[30px]">
            {homeWorkProjects.map(
              ({ id, image, imageAlt, tag, title, ctaLabel, href }) => (
                <li key={id} className="overflow-hidden even:mt-[45px]">
                  <div className="relative aspect-[585/383] w-full overflow-hidden rounded-[20px]">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes="585px"
                      className="object-cover"
                    />

                    <span className="absolute bottom-[15px] left-[15px] rounded-[60px] bg-white/20 px-[15px] py-[6px] text-[12px] font-semibold tracking-[-0.02em] text-white uppercase backdrop-blur-[20px]">
                      {tag}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-[20px] pt-[20px]">
                    <h3 className="max-w-[360px] text-[25px] leading-[31px] font-bold tracking-[-0.05em] text-black">
                      {title}
                    </h3>

                    <Button
                      href={href}
                      className="shrink-0 rounded-[60px] bg-black px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase"
                    >
                      {ctaLabel}
                    </Button>
                  </div>
                </li>
              ),
            )}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default Work;
