import { testimonials, workProjects } from "@/config/common";

import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import CircularTextButton from "../ui/CircularTextButton";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const defaultTitle = (
  <>
    The work is the <br />
    best introduction.
  </>
);

const defaultProject = workProjects[0];
const defaultReview = testimonials[0];

const WorkReviews = ({
  label = "Work + reviews",
  title = defaultTitle,
  project = defaultProject,
  review = defaultReview,
  exploreHref = "/work",
  reviewsHref = "/testimonials",
  id = "work-reviews",
  className = "py-[120px] bg-grey/40",
}) => {
  return (
    <>
      <Section id={id} className={className}>
        <Container>
          <div className="flex items-center justify-between gap-[45px]">
            <SectionHeading
              label={label}
              title={title}
              labelClassName="text-[22px] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-[85px] mt-[10px] leading-[90px] font-extrabold tracking-[-0.07em] text-black"
            />

            <div className="shrink-0">
              <CircularTextButton
                href={exploreHref}
                image="/images/home/circular-text-projects.png"
                imageWidth={431}
                imageHeight={412}
                className="size-[140px] shrink-0"
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

          <div className="mt-[65px] flex gap-[30px]">
            <div className="w-[790px] rounded-[20px] bg-white p-[30px]">
              <div className="relative h-[424px] w-full overflow-hidden rounded-[20px]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between gap-[20px] pt-[20px]">
                <div>
                  <h3 className="text-[35px] font-bold tracking-[-0.07em] text-black">
                    {project.title}
                  </h3>

                  <p className="text-text-body text-[16px] font-medium tracking-[-0.02em]">
                    {project.subtitle}
                  </p>
                </div>

                <Button
                  href={project.href}
                  className="shrink-0 rounded-full bg-black px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase"
                >
                  {project.ctaLabel}
                </Button>
              </div>
            </div>

            <div className="flex w-[370px] shrink-0 flex-col items-stretch">
              <figure className="h-full rounded-[20px] bg-white p-[30px]">
                <div className="flex items-center justify-between gap-[20px]">
                  <Image
                    src={review.avatar}
                    alt=""
                    width={265}
                    height={265}
                    className="size-[50px] shrink-0 rounded-full object-cover"
                  />

                  <span className="border-grey flex shrink-0 items-center rounded-full border px-[20px] py-[10px]">
                    <Image
                      src={review.logo}
                      alt={review.logoAlt}
                      width={review.logoWidth}
                      height={review.logoHeight}
                      className="h-[20px] w-auto"
                    />
                  </span>
                </div>

                <Image
                  src="/icons/quote-icon.svg"
                  alt=""
                  width={37}
                  height={28}
                  className="mt-[30px]"
                />

                <blockquote className="mt-[20px] text-[22px] font-medium tracking-[-0.02em] text-black">
                  {review.quote}
                </blockquote>

                <figcaption className="mt-[30px] flex items-end justify-between gap-[20px]">
                  <div className="border-text-body/30 border-l pl-[12px]">
                    <p className="text-[16px] font-bold tracking-[-0.02em] text-black">
                      {review.name}
                    </p>

                    <p className="text-text-body text-[14px] tracking-[-0.02em]">
                      {review.role}
                    </p>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="flex">
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

                    <p className="text-orange text-[14px] tracking-[-0.02em]">
                      {review.rating.toFixed(1)} Rating
                    </p>
                  </div>
                </figcaption>
              </figure>

              <Button
                href={reviewsHref}
                className="border-text-body/30 mt-[30px] justify-center rounded-full border py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-black uppercase"
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
