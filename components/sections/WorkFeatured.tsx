import { workCaseStudies } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";

const WorkFeatured = () => {
  return (
    <>
      <Section
        id="work-featured"
        className="py-3xl max-425:py-xl max-425:px-[3rem]"
      >
        <Container>
          {/* Names the group, since each case study below carries a heading and
              the outline would otherwise jump from the page h1 to a run of
              h2s with nothing introducing them. */}
          <h2 className="sr-only">Featured work</h2>

          {/* A list, so the case studies announce as a set rather than a run of
              unrelated blocks. */}
          <ul className="gap-md max-425:gap-lg flex flex-col">
            {workCaseStudies.map(
              ({
                id,
                image,
                imageAlt,
                tags,
                title,
                description,
                role,
                platform,
                href,
                panelClassName,
                imagePanelClassName,
              }) => (
                <li
                  key={id}
                  className="gap-xs max-425:flex-col flex items-stretch"
                >
                  <div
                    className={`max-425:aspect-[515/533] max-425:h-auto max-425:w-full relative flex h-[53.3rem] w-[51.5rem] shrink-0 items-center justify-center overflow-hidden rounded-md ${imagePanelClassName}`}
                  >
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div
                    className={`p-lg max-425:p-md flex flex-1 flex-col items-start rounded-md ${panelClassName}`}
                  >
                    {/* A list, so the four read as a set of labels rather than
                        four loose words. */}
                    <ul className="gap-xs flex flex-wrap items-center">
                      {tags.map((tag) => (
                        <li
                          key={tag}
                          className="text-body-04 max-425:text-[1.2rem] px-sm max-425:px-xs py-xs rounded-full border border-black/20 tracking-[-0.02em] text-black"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-heading-02 max-425:text-[4rem] max-425:leading-[4.2rem] max-425:mt-sm mt-md leading-[7rem] font-extrabold tracking-[-0.07em] text-black">
                      {title}
                    </h3>

                    <p className="text-body-02 max-425:text-[1.4rem] max-425:leading-[2.2rem] text-text-body mt-sm leading-[2.6rem] tracking-[-0.02em]">
                      {description}
                    </p>

                    <dl className="gap-xs mt-md max-425:mt-sm flex flex-wrap items-center">
                      <div className="gap-sm max-425:gap-xs px-sm max-425:px-xs py-xs flex items-center rounded-xs bg-white">
                        <dt className="text-body-03 max-425:text-[1.2rem] font-bold tracking-[-0.02em] text-black uppercase">
                          Role
                        </dt>

                        <dd className="text-body-03 max-425:text-[1.2rem] text-text-body tracking-[-0.02em]">
                          {role}
                        </dd>
                      </div>

                      <div className="gap-sm max-425:gap-xs px-sm max-425:px-xs py-xs flex items-center rounded-xs bg-white">
                        <dt className="text-body-03 max-425:text-[1.2rem] font-bold tracking-[-0.02em] text-black uppercase">
                          Platform
                        </dt>

                        <dd className="text-body-03 max-425:text-[1.2rem] text-text-body tracking-[-0.02em]">
                          {platform}
                        </dd>
                      </div>
                    </dl>

                    {/* Each one names its own case study: four identical labels
                        would be indistinguishable in a list of links. */}
                    <Button
                      href={href}
                      aria-label={`View the ${title} case study`}
                      className="text-body-03 max-425:text-[1.4rem] max-425:w-full max-425:mt-md px-sm py-xs mt-lg rounded-full bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
                    >
                      View case study
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

export default WorkFeatured;
