"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { serviceDisciplines } from "@/config/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const disciplineItems = serviceDisciplines.map(
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
      <span key={id} className="flex items-center gap-[20px]">
        <Icon
          size={45}
          strokeWidth={1.5}
          className={`shrink-0 ${iconClassName}`}
        />

        <span className="text-[45px] font-bold tracking-[-0.07em] text-black">
          {title}
        </span>

        <span className="bg-grey h-[30px] w-px shrink-0" />

        <span className="text-text-body inline-flex items-center text-[14px] font-normal tracking-[-0.02em]">
          {categories.map((category, index) => (
            <Fragment key={category}>
              {index > 0 && (
                <span className="px-[10px] text-[18px]">&middot;</span>
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
        className="bg-blue/20 flex items-center justify-between gap-[45px] rounded-[20px] p-[45px]"
      >
        <div className="w-[625px]">
          <ul className="flex items-center gap-[20px]">
            {detail.highlights.map(
              ({ id: highlightId, icon: HighlightIcon, text }, index) => (
                <li key={highlightId} className="flex items-center gap-[20px]">
                  <span className="flex items-center gap-[10px]">
                    <HighlightIcon
                      size={18}
                      strokeWidth={1.5}
                      className={`shrink-0 ${iconClassName}`}
                    />

                    <span className="text-text-body text-[16px] font-medium tracking-[-0.02em]">
                      {text}
                    </span>
                  </span>

                  {index < detail.highlights.length - 1 && (
                    <span className="h-[16px] w-px shrink-0 bg-black/30" />
                  )}
                </li>
              ),
            )}
          </ul>

          <h4 className="mt-[20px] text-[35px] font-medium tracking-[-0.06em] text-black">
            {detail.title}
          </h4>

          <p className="text-text-body mt-[10px] text-[18px] leading-[28px] tracking-[-0.02em]">
            {detail.subtitle}
          </p>

          <ul className="mt-[20px] grid grid-cols-2 gap-[10px]">
            {detail.features.map((feature) => (
              <li key={feature} className="flex items-center gap-[10px]">
                <span className={`size-[8px] shrink-0 ${dotClassName}`} />

                <span className="text-text-body text-[18px] font-medium tracking-[-0.02em]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <span className="my-[30px] block h-px w-full bg-black/20" />

          <ul className="flex gap-[45px]">
            {detail.pricing.map(({ id: priceId, label, price }, index) => (
              <li key={priceId} className="flex items-center gap-[45px]">
                <span className="flex flex-col items-start">
                  <span className="text-text-body text-[14px] font-medium tracking-[-0.02em]">
                    {label}
                  </span>

                  <span className="text-[22px] font-bold tracking-[-0.07em] text-black">
                    {price}
                  </span>
                </span>

                {index < detail.pricing.length - 1 && (
                  <span className="h-[40px] w-px shrink-0 bg-black/20" />
                )}
              </li>
            ))}
          </ul>

          <Button
            href={detail.cta.href}
            className="mt-[45px] rounded-[60px] bg-white px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
          >
            {detail.cta.label}
          </Button>
        </div>

        <div className="relative h-[536px] w-[440px] overflow-hidden rounded-[20px]">
          <Image
            src={featured.image}
            alt={featured.imageAlt}
            width={featured.width}
            height={featured.height}
            className="block h-full w-full object-cover"
          />

          <div className="absolute right-0 bottom-0 left-0 p-[10px]">
            <Link
              href={featured.href}
              className="gradient-border flex items-end justify-between gap-[20px] rounded-[16px] bg-black/30 p-[20px] backdrop-blur-[20px]"
            >
              <span className="flex flex-col items-start">
                <span className="text-[14px] font-semibold tracking-[-0.02em] text-white">
                  {featured.label}
                </span>

                <h4 className="text-[18px] font-bold tracking-[-0.02em] text-white">
                  {featured.title}
                </h4>

                <span className="text-[14px] font-semibold tracking-[-0.02em] text-white">
                  {featured.categories.slice(0, 2).map((category, index) => (
                    <Fragment key={category}>
                      {index > 0 && <span className="px-[10px]">&middot;</span>}
                      {category}
                    </Fragment>
                  ))}
                </span>
              </span>

              <span className="flex size-[45px] shrink-0 items-center justify-center rounded-full bg-white">
                <ArrowUpRight
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
);

const Services = () => {
  const [openItems, setOpenItems] = useState([]);

  const accordionRef = useRef(null);
  const hasInteracted = useRef(false);

  // Open the first discipline once the list scrolls into view, unless the
  // visitor has already opened one themselves.
  useEffect(() => {
    const node = accordionRef.current;
    const firstId = disciplineItems[0]?.id;

    if (!node || !firstId) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (!hasInteracted.current) setOpenItems([firstId]);

        observer.disconnect();
      },
      { rootMargin: "0px 0px -50% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Section className="pb-[120px]">
        <Container>
          <div className="flex items-end justify-between gap-[20px]">
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
              labelClassName="text-[22px] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-[85px] mt-[10px] font-extrabold tracking-[-0.07em] text-black leading-[90px]"
            />

            <div className="flex">
              <Button
                href="/services"
                className="min-w-max rounded-[60px] bg-black px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Explore all services
              </Button>
            </div>
          </div>

          <Accordion
            ref={accordionRef}
            value={openItems}
            onValueChange={(value) => {
              hasInteracted.current = true;
              setOpenItems(value);
            }}
            className="mt-[45px]"
          >
            {disciplineItems.map(({ id, title, content }) => (
              <AccordionItem
                key={id}
                value={id}
                className="border-b border-black/30"
              >
                <AccordionTrigger
                  className="py-[30px]"
                  indicatorClassName="size-[50px] rounded-full border border-black text-black"
                >
                  {title}
                </AccordionTrigger>

                <AccordionContent className="pb-[30px]">
                  {content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Section>
    </>
  );
};

export default Services;
