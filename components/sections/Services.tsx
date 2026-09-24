import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { serviceDisciplines } from "@/config/common";
import Accordion from "../ui/Accordion";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const Services = () => {
  return (
    <>
      <Section className="pb-3xl max-425:pb-xl max-425:px-[2rem]">
        <Container>
          <div className="gap-sm max-425:gap-[3.5rem] max-425:items-center max-425:flex-col max-425:text-center flex items-end justify-between">
            <SectionHeading
              label="Our Services"
              title={
                <>
                  <span className="mr-[-0.07em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                    Four disciplines.
                  </span>{" "}
                  <br />
                  One joined-up team.
                </>
              }
              labelClassName="text-body-01 max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02 max-425:max-w-[31rem] max-425:text-[4.5rem] max-425:leading-[4.5rem] mt-xs max-425:mt-[.5rem] font-extrabold tracking-[-0.07em] text-black leading-[9rem]"
            />

            <Button
              href="/services"
              className="text-body-02 px-sm py-xs max-425:text-[1.4rem] min-w-max rounded-xl bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
            >
              Explore all services
            </Button>
          </div>

          <Accordion
            className="mt-lg"
            openFirstOnView
            items={serviceDisciplines.map(
              ({
                id,
                icon: Icon,
                title,
                categories,
                iconClassName,
                dotClassName,
                detail,
                featured,
              }) => ({
                id,
                title: (
                  <span key={id} className="gap-sm flex items-center">
                    <Icon
                      aria-hidden="true"
                      size={45}
                      strokeWidth={1.5}
                      className={`shrink-0 ${iconClassName} max-425:size-[2.8rem]`}
                    />

                    <span className="text-heading-03 max-425:text-[2.5rem] font-bold tracking-[-0.07em] text-black">
                      {title}
                    </span>

                    <span
                      aria-hidden="true"
                      className="bg-grey max-425:hidden h-[3rem] w-px shrink-0 transition-opacity duration-300 group-aria-expanded:opacity-0"
                    />

                    <span className="text-body-04 max-425:hidden text-text-body inline-flex items-center font-normal tracking-[-0.02em] transition-opacity duration-300 group-aria-expanded:opacity-0">
                      {categories.map((category, index) => (
                        <Fragment key={category}>
                          {index > 0 && (
                            <span
                              aria-hidden="true"
                              className="text-body-02 px-xs"
                            >
                              &middot;
                            </span>
                          )}
                          {category}
                        </Fragment>
                      ))}
                    </span>
                  </span>
                ),
                content: (
                  <div
                    key={id}
                    className="gap-lg max-425:gap-[3.5rem] bg-blue/20 max-425:flex-col max-425:p-[3rem] p-lg flex items-center justify-between rounded-md"
                  >
                    <div className="max-425:w-full w-[62.5rem]">
                      <ul className="gap-sm max-425:gap-[1.4rem] max-425:flex-col max-425:items-start flex items-center">
                        {detail.highlights.map(
                          (
                            { id: highlightId, icon: HighlightIcon, text },
                            index,
                          ) => (
                            <li
                              key={highlightId}
                              className="gap-sm max-425:gap-[1.4rem] max-425:w-full max-425:flex-col max-425:items-start flex items-center"
                            >
                              <span className="gap-xs flex items-center">
                                <HighlightIcon
                                  aria-hidden="true"
                                  size={18}
                                  strokeWidth={1.5}
                                  className={`shrink-0 ${iconClassName}`}
                                />

                                <span className="text-body-03 max-425:text-[1.4rem] text-text-body font-medium tracking-[-0.02em]">
                                  {text}
                                </span>
                              </span>

                              {index < detail.highlights.length - 1 && (
                                <span
                                  aria-hidden="true"
                                  className="max-425:h-px max-425:w-full h-[1.6rem] w-px shrink-0 bg-black/30"
                                />
                              )}
                            </li>
                          ),
                        )}
                      </ul>

                      <h4 className="text-subheading-02 max-425:text-[3.5rem] max-425:leading-[4.3rem] mt-sm font-medium tracking-[-0.06em] text-black">
                        {detail.title}
                      </h4>

                      <p className="text-body-02 max-425:text-[1.6rem] text-text-body mt-xs max-425:leading-[2.4rem] leading-[2.8rem] tracking-[-0.02em]">
                        {detail.subtitle}
                      </p>

                      <ul className="gap-xs max-425:grid-cols-1 mt-sm grid grid-cols-2">
                        {detail.features.map((feature) => (
                          <li
                            key={feature}
                            className="gap-xs flex items-center"
                          >
                            <span
                              aria-hidden="true"
                              className={`size-[.8rem] shrink-0 ${dotClassName}`}
                            />

                            <span className="text-body-02 text-text-body font-medium tracking-[-0.02em]">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <span
                        aria-hidden="true"
                        className="my-md max-425:my-sm block h-px w-full bg-black/20"
                      />

                      <ul className="gap-lg max-425:gap-[1.4rem] flex">
                        {detail.pricing.map(
                          ({ id: priceId, label, price }, index) => (
                            <li
                              key={priceId}
                              className="gap-lg max-425:gap-[1.4rem] flex items-center"
                            >
                              <span className="flex flex-col items-start">
                                <span className="text-body-04 max-425:text-[1rem] text-text-body font-medium tracking-[-0.02em]">
                                  {label}
                                </span>

                                <span className="text-body-01 max-425:mt-[.2rem] max-425:text-[1.8rem] font-bold tracking-[-0.07em] text-black">
                                  {price}
                                </span>
                              </span>

                              {index < detail.pricing.length - 1 && (
                                <span
                                  aria-hidden="true"
                                  className="h-[4rem] w-px shrink-0 bg-black/20"
                                />
                              )}
                            </li>
                          ),
                        )}
                      </ul>

                      <Button
                        href={detail.cta.href}
                        className="text-body-02 px-sm max-425:w-full py-xs mt-lg max-425:mt-[2.5rem] max-425:text-[1.3rem] rounded-xl bg-white font-extrabold tracking-[-0.02em] text-black uppercase"
                      >
                        {detail.cta.label}
                      </Button>
                    </div>

                    <div className="max-425:w-full max-425:h-[25rem] max-425:w-[29rem] relative h-[53.6rem] w-[44rem] overflow-hidden rounded-md">
                      <Image
                        src={featured.image}
                        alt={featured.imageAlt}
                        width={featured.width}
                        height={featured.height}
                        className="block h-full w-full object-cover"
                      />

                      <div className="p-xs absolute right-0 bottom-0 left-0">
                        <Link
                          href={featured.href}
                          className="gap-sm p-sm max-425:p-[.5rem] gradient-border max-425:inline-flex max-425:float-end max-425:rounded-[1000px] flex items-end justify-between rounded-[16px] bg-black/30 backdrop-blur-[20px]"
                        >
                          <span className="max-425:hidden flex flex-col items-start">
                            <span className="text-body-04 font-semibold tracking-[-0.02em] text-white">
                              {featured.label}
                            </span>

                            <h4 className="text-body-02 font-bold tracking-[-0.02em] text-white">
                              {featured.title}
                            </h4>

                            <span className="text-body-04 font-semibold tracking-[-0.02em] text-white">
                              {featured.categories
                                .slice(0, 2)
                                .map((category, index) => (
                                  <Fragment key={category}>
                                    {index > 0 && (
                                      <span
                                        aria-hidden="true"
                                        className="px-xs"
                                      >
                                        &middot;
                                      </span>
                                    )}
                                    {category}
                                  </Fragment>
                                ))}
                            </span>
                          </span>

                          <span className="max-425:size-[3.5rem] flex size-[4.5rem] shrink-0 items-center justify-center rounded-full bg-white">
                            <ArrowUpRight
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
                ),
              }),
            )}
            itemClassName="border-black/30 border-b"
            triggerClassName="py-md max-425:py-sm"
            indicatorClassName="size-[5rem] max-425:size-[2.7rem] rounded-full border border-black text-black"
            iconClassName="max-425:size-[1.5rem]"
            contentClassName="pb-md"
          />
        </Container>
      </Section>
    </>
  );
};

export default Services;
