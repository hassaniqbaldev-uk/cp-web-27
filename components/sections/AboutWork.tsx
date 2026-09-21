import { testimonials, workProjects } from "@/config/common";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import CircularTextButton from "../ui/CircularTextButton";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// TODO: choose which project and which review lead this section, rather than
// taking whichever happens to be first.
const project = workProjects[0];
const review = testimonials[0];

const AboutWork = () => {
  return (
    <>
      <Section id="work-reviews" className="py-3xl bg-grey/40">
        <Container>
          <div className="gap-lg flex items-center justify-between">
            <SectionHeading
              label="Work + reviews"
              title={
                <>
                  The work is the <br />
                  best introduction.
                </>
              }
              labelClassName="text-body-01 font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02 mt-xs leading-[9rem] font-extrabold tracking-[-0.07em] text-black"
            />

            <CircularTextButton
              href="/case-studies"
              image="/images/home/circular-text-projects.png"
              imageWidth={431}
              imageHeight={412}
              srLabel="Explore all projects"
              className="size-[14rem] shrink-0"
              ringClassName="h-auto w-full"
            >
              <ArrowUpRight
                size={28}
                strokeWidth={2.5}
                className="text-black"
              />
            </CircularTextButton>
          </div>

          <div className="gap-md mt-xl flex">
            <div className="p-md w-[79rem] rounded-md bg-white">
              <div className="relative h-[42.4rem] w-full overflow-hidden rounded-md">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="gap-sm pt-sm flex items-center justify-between">
                <div>
                  {/* h3, since the section heading above is the h2. */}
                  <h3 className="text-subheading-02 font-bold tracking-[-0.07em] text-black">
                    {project.title}
                  </h3>

                  <p className="text-body-03 text-text-body font-medium tracking-[-0.02em]">
                    {project.subtitle}
                  </p>
                </div>

                <Button
                  href={project.href}
                  aria-label={`Visit the ${project.title} live site`}
                  className="text-body-03 px-sm py-xs shrink-0 rounded-full bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
                >
                  {project.ctaLabel}
                </Button>
              </div>
            </div>

            <div className="flex w-[37rem] shrink-0 flex-col items-stretch">
              {/* figure and figcaption are the pair that ties a quote to the
                  person who said it. */}
              <figure className="p-md h-full rounded-md bg-white">
                <div className="gap-sm flex items-center justify-between">
                  {/* Decorative: the attribution below already names them. */}
                  <Image
                    src={review.avatar}
                    alt=""
                    aria-hidden="true"
                    width={265}
                    height={265}
                    className="size-[5rem] shrink-0 rounded-full object-cover"
                  />

                  <span className="px-sm py-xs border-grey flex shrink-0 items-center rounded-full border">
                    <Image
                      src={review.logo}
                      alt={review.logoAlt}
                      width={review.logoWidth}
                      height={review.logoHeight}
                      className="h-[2rem] w-auto"
                    />
                  </span>
                </div>

                <Image
                  src="/icons/quote-icon.svg"
                  alt=""
                  width={37}
                  height={28}
                  className="mt-md"
                />

                <blockquote className="text-body-01 mt-sm font-medium tracking-[-0.02em] text-black">
                  {review.quote}
                </blockquote>

                <figcaption className="gap-sm mt-md flex items-end justify-between">
                  <div className="border-text-body/30 border-l pl-[1.2rem]">
                    <p className="text-body-03 font-bold tracking-[-0.02em] text-black">
                      {review.name}
                    </p>

                    <p className="text-body-04 text-text-body tracking-[-0.02em]">
                      {review.role}
                    </p>
                  </div>

                  <div className="flex flex-col items-end">
                    {/* The stars are a picture of the score, so the figure
                        beside them carries it in text. */}
                    <span aria-hidden="true" className="flex">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          size={12}
                          className={
                            index < Math.round(review.rating)
                              ? "fill-orange text-orange"
                              : "text-text-body/30"
                          }
                        />
                      ))}
                    </span>

                    <p className="text-body-04 text-orange tracking-[-0.02em]">
                      {review.rating.toFixed(1)} Rating
                    </p>
                  </div>
                </figcaption>
              </figure>

              <Button
                href="/testimonials"
                className="text-body-03 py-xs mt-md border-text-body/30 justify-center rounded-full border font-extrabold tracking-[-0.02em] text-black uppercase"
              >
                View all reviews
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutWork;
