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
      <Section id="work" className="py-3xl">
        <Container>
          {/* Relative so the button can be pulled out to the left without
              knocking the heading off centre. */}
          <div className="gap-sm relative flex justify-center text-center">
            {/* The wrapper owns the position, leaving the button free to
                use transform for its magnetic offset. */}
            <div className="">
              <CircularTextButton
                href="/work"
                image="/images/home/circular-text-projects.png"
                imageWidth={431}
                imageHeight={412}
                srLabel="Explore all projects"
                className="size-[14rem]"
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
              labelClassName="text-body-01  font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02  leading-[9rem] mt-xs font-extrabold tracking-[-0.07em] text-black"
            />
          </div>

          <ul className="gap-md mt-2xl grid grid-cols-2 items-start">
            {workProjects.map(
              ({ id, image, imageAlt, title, subtitle, ctaLabel, href }) => (
                <li key={id} className="even:mt-md overflow-hidden">
                  {/* Fixed ratio box so every thumbnail reserves the same
                      space and the grid does not shift as images load. */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-md">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes="58rem"
                      className="object-cover"
                    />
                  </div>

                  <div className="gap-sm pt-sm flex items-center justify-between">
                    <div>
                      <h3 className="text-subheading-02 font-bold tracking-[-0.07em] text-black">
                        {title}
                      </h3>

                      <p className="text-body-03 text-text-body font-medium tracking-[-0.02em]">
                        {subtitle}
                      </p>
                    </div>

                    {/* Four identical labels would be indistinguishable in a
                        list of links, so each one names its own project. */}
                    <Button
                      href={href}
                      aria-label={`Visit the ${title} live site`}
                      className="text-body-03 px-sm py-xs bg-grey shrink-0 rounded-xl font-extrabold tracking-[-0.02em] text-black uppercase transition-colors duration-300 hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white"
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
