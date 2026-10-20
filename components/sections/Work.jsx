import { workProjects } from "@/config/common";
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
          <div className="relative flex justify-center gap-[20px] text-center">
            <CircularTextButton
              href="/work"
              image="/images/home/circular-text-projects.png"
              imageWidth={431}
              imageHeight={412}
              className="size-[140px]"
              ringClassName="h-auto w-full"
            >
              <ArrowUpRight
                size={28}
                strokeWidth={2.5}
                className="text-black"
              />
            </CircularTextButton>

            <SectionHeading
              label="OUR WORK"
              title="Digital done right"
              labelClassName="text-[22px] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-[85px] leading-[90px] mt-[10px] font-extrabold tracking-[-0.07em] text-black"
            />
          </div>

          <ul className="mt-[80px] grid grid-cols-2 items-start gap-[30px]">
            {workProjects.map(
              ({ id, image, imageAlt, title, subtitle, ctaLabel, href }) => (
                <li key={id} className="overflow-hidden even:mt-[30px]">
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[20px]">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes="580px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-[20px] pt-[20px]">
                    <div>
                      <h3 className="text-[35px] font-bold tracking-[-0.07em] text-black">
                        {title}
                      </h3>

                      <p className="text-text-body text-[16px] font-medium tracking-[-0.02em]">
                        {subtitle}
                      </p>
                    </div>

                    <Button
                      href={href}
                      className="bg-grey shrink-0 rounded-[60px] px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-black uppercase transition-colors duration-300 hover:bg-black hover:text-white"
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
