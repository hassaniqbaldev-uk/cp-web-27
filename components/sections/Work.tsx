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
      <Section id="work" className="py-3xl max-425:px-[3rem] max-425:py-xl">
        <Container>
          {/* Relative so the button can be pulled out to the left without
              knocking the heading off centre. */}
          <div className="gap-sm max-425:gap-md max-425:flex-col-reverse max-425:items-center relative flex justify-center text-center">
            {/* The wrapper owns the position, leaving the button free to
                use transform for its magnetic offset. */}
            <div className="">
              <CircularTextButton
                href="/work"
                image="/images/home/circular-text-projects.png"
                imageWidth={431}
                imageHeight={412}
                srLabel="Explore all projects"
                className="max-425:size-[10rem] size-[14rem]"
                ringClassName="h-auto w-full"
              >
                <ArrowUpRight
                  size={28}
                  strokeWidth={2.5}
                  className="text-black"
                />
              </CircularTextButton>
            </div>

            {/* TODO: replace the label, title and subtitle with the real copy. */}
            <SectionHeading
              label="OUR WORK"
              title="Digital done right"
              labelClassName="text-body-01 max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02 max-425:text-[4.5rem] max-425:leading-[4.5rem] leading-[9rem] mt-xs font-extrabold tracking-[-0.07em] text-black"
            />
          </div>

          <ul className="gap-md max-425:gap-lg max-425:mt-lg mt-2xl max-425:grid-cols-1 grid grid-cols-2 items-start">
            {workProjects.map(
              ({ id, image, imageAlt, title, subtitle, ctaLabel, href }) => (
                <li
                  key={id}
                  className="even:mt-md max-425:even:mt-0 overflow-hidden"
                >
                  {/* Fixed ratio box so every thumbnail reserves the same
                      space and the grid does not shift as images load. */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-md">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 425px) 100vw, 58rem"
                      className="object-cover"
                    />
                  </div>

                  <div className="gap-sm pt-sm flex items-center justify-between">
                    <div>
                      <h3 className="text-subheading-02 max-425:text-[2.2rem] font-bold tracking-[-0.07em] text-black">
                        {title}
                      </h3>

                      <p className="text-body-03 max-425:text-[1.4rem] text-text-body font-medium tracking-[-0.02em]">
                        {subtitle}
                      </p>
                    </div>

                    {/* Four identical labels would be indistinguishable in a
                        list of links, so each one names its own project. */}
                    <Button
                      href={href}
                      aria-label={`Visit the ${title} live site`}
                      className="text-body-03 max-425:text-[1.2rem] max-425:px-xs px-sm py-xs bg-grey shrink-0 rounded-xl font-extrabold tracking-[-0.02em] text-black uppercase transition-colors duration-300 hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white"
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
