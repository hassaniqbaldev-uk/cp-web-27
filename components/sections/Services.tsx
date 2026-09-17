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
      <Section className="pb-3xl">
        <Container>
          <div className="gap-sm flex items-end justify-between">
            <SectionHeading
              label="Our Services"
              title={
                <>
                  {/* The negative tracking on the heading also applies after
                      the final character, pulling the span's box in so
                      bg-clip-text slices the full stop. The padding gives the
                      gradient somewhere to paint; the matching negative margin
                      keeps the layout identical. */}
                  <span className="mr-[-0.07em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                    Four disciplines.
                  </span>{" "}
                  <br />
                  One joined-up team.
                </>
              }
              labelClassName="text-body-01 font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02 mt-xs font-extrabold tracking-[-0.07em] text-black leading-[9rem]"
            />

            <Button
              href="/services"
              className="text-body-02 px-sm py-xs min-w-max rounded-xl bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
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
                  <span className="gap-sm flex items-center">
                    <Icon
                      aria-hidden="true"
                      size={45}
                      strokeWidth={1.5}
                      className={`shrink-0 ${iconClassName}`}
                    />

                    <span className="text-heading-03 font-bold tracking-[-0.07em] text-black">
                      {title}
                    </span>

                    {/* Fades out once the panel is open. Driven off the
                        trigger's aria-expanded, so no extra state is needed. */}
                    <span
                      aria-hidden="true"
                      className="bg-grey h-[3rem] w-px shrink-0 transition-opacity duration-300 group-aria-expanded:opacity-0"
                    />

                    <span className="text-body-04 text-text-body inline-flex items-center font-normal tracking-[-0.02em] transition-opacity duration-300 group-aria-expanded:opacity-0">
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
                  <div className="gap-lg bg-blue/20 p-lg flex items-center justify-between rounded-md">
                    <div className="w-[62.5rem]">
                      <ul className="gap-sm flex items-center">
                        {detail.highlights.map(
                          (
                            { id: highlightId, icon: HighlightIcon, text },
                            index,
                          ) => (
                            <li
                              key={highlightId}
                              className="gap-sm flex items-center"
                            >
                              <span className="gap-xs flex items-center">
                                <HighlightIcon
                                  aria-hidden="true"
                                  size={18}
                                  strokeWidth={1.5}
                                  className={`shrink-0 ${iconClassName}`}
                                />

                                <span className="text-body-03 text-text-body font-medium tracking-[-0.02em]">
                                  {text}
                                </span>
                              </span>

                              {index < detail.highlights.length - 1 && (
                                <span
                                  aria-hidden="true"
                                  className="h-[1.6rem] w-px shrink-0 bg-black/30"
                                />
                              )}
                            </li>
                          ),
                        )}
                      </ul>

                      <h4 className="text-subheading-02 mt-sm font-medium tracking-[-0.06em] text-black">
                        {detail.title}
                      </h4>

                      <p className="text-body-02 text-text-body mt-xs leading-[2.8rem] tracking-[-0.02em]">
                        {detail.subtitle}
                      </p>

                      <ul className="gap-xs mt-sm gap-xs grid grid-cols-2">
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
                        className="my-md block h-px w-full bg-black/20"
                      />

                      <ul className="gap-lg flex">
                        {detail.pricing.map(
                          ({ id: priceId, label, price }, index) => (
                            <li
                              key={priceId}
                              className="gap-lg flex items-center"
                            >
                              <span className="flex flex-col items-start">
                                <span className="text-body-04 text-text-body font-medium tracking-[-0.02em]">
                                  {label}
                                </span>

                                <span className="text-body-01 font-bold tracking-[-0.07em] text-black">
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
                        className="text-body-02 px-sm py-xs mt-lg rounded-xl bg-white font-extrabold tracking-[-0.02em] text-black uppercase"
                      >
                        {detail.cta.label}
                      </Button>
                    </div>

                    <div className="relative w-[44rem] overflow-hidden rounded-md">
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
                          className="gap-sm p-sm gradient-border flex items-end justify-between rounded-[16px] bg-black/30 backdrop-blur-[20px]"
                        >
                          <span className="flex flex-col items-start">
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

                          <span className="flex size-[4.5rem] shrink-0 items-center justify-center rounded-full bg-white">
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
            triggerClassName="py-md"
            indicatorClassName="size-[5rem] rounded-full border border-black text-black"
            contentClassName="pb-md"
          />
        </Container>
      </Section>
    </>
  );
};

export default Services;
