import { testimonials, workProjects } from "@/config/common";
import type { Testimonial, WorkProject } from "@/types/common";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import CircularTextButton from "../ui/CircularTextButton";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

/**
 * The about page's copy, kept as the defaults so pages that want it render
 * `<WorkReviews />` and nothing else. Anywhere else passes its own.
 */
const defaultTitle = (
  <>
    The work is the <br />
    best introduction.
  </>
);

// TODO: choose which project and which review lead this section, rather than
// taking whichever happens to be first.
const defaultProject = workProjects[0];
const defaultReview = testimonials[0];

type WorkReviewsProps = {
  label?: string;
  /** Accepts nodes, so it can carry a line break or a coloured span. */
  title?: React.ReactNode;
  project?: WorkProject;
  review?: Testimonial;
  /** Where the circular button goes. */
  exploreHref?: string;
  reviewsHref?: string;
  /**
   * Unique per page. Two of these on one page would otherwise give the
   * document two elements with the same id, which breaks fragment links.
   */
  id?: string;
  className?: string;
};

const WorkReviews = ({
  label = "Work + reviews",
  title = defaultTitle,
  project = defaultProject,
  review = defaultReview,
  exploreHref = "/case-studies",
  reviewsHref = "/testimonials",
  id = "work-reviews",
  className = "py-3xl max-425:py-xl max-425:px-[3rem] bg-grey/40",
}: WorkReviewsProps) => {
  return (
    <>
      <Section id={id} className={className}>
        <Container>
          <div className="gap-lg max-425:flex-col flex items-center justify-between">
            <SectionHeading
              label={label}
              title={title}
              labelClassName="text-body-01 max-425:text-center max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02 max-425:text-center max-425:text-[3.5rem] max-425:leading-[3.5rem] max-425:max-w-[35rem] mt-xs leading-[9rem] max-425:mx-auto font-extrabold tracking-[-0.07em] text-black"
            />

            <CircularTextButton
              href={exploreHref}
              image="/images/home/circular-text-projects.png"
              imageWidth={431}
              imageHeight={412}
              srLabel="Explore all projects"
              className="max-425:size-[10rem] size-[14rem] shrink-0"
              ringClassName="h-auto w-full"
            >
              <ArrowUpRight
                size={28}
                strokeWidth={2.5}
                className="text-black"
              />
            </CircularTextButton>
          </div>

          <div className="gap-md mt-xl max-425:flex-col flex">
            <div className="p-md max-425:p-xs max-425:pb-md max-425:w-full max-425:text-center w-[79rem] rounded-md bg-white">
              <div className="max-425:h-[25rem] relative h-[42.4rem] w-full overflow-hidden rounded-md">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="gap-sm pt-sm max-425:flex-col flex items-center justify-between">
                <div>
                  {/* h3, since the section heading above is the h2. */}
                  <h3 className="text-subheading-02 max-425:text-[2.2rem] font-bold tracking-[-0.07em] text-black">
                    {project.title}
                  </h3>

                  <p className="text-body-03 max-425:text-[1.4rem] text-text-body font-medium tracking-[-0.02em]">
                    {project.subtitle}
                  </p>
                </div>

                <Button
                  href={project.href}
                  aria-label={`Visit the ${project.title} live site`}
                  className="text-body-03 max-425:text-[1.4rem] px-sm py-xs max-425:w-full shrink-0 rounded-full bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
                >
                  {project.ctaLabel}
                </Button>
              </div>
            </div>

            <div className="max-425:w-full flex w-[37rem] shrink-0 flex-col items-stretch">
              {/* figure and figcaption are the pair that ties a quote to the
                  person who said it. */}
              <figure className="p-md max-425:p-sm h-full rounded-md bg-white">
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

                <blockquote className="text-body-01 max-425:text-[1.6rem] mt-sm font-medium tracking-[-0.02em] text-black">
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
                href={reviewsHref}
                className="text-body-03 max-425:text-[1.4rem] py-xs mt-md border-text-body/30 justify-center rounded-full border font-extrabold tracking-[-0.02em] text-black uppercase"
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

export default WorkReviews;
