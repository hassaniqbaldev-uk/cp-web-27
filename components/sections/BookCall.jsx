"use client";

import { contactLinks } from "@/config/common";
import Link from "next/link";
import Button from "../ui/Button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Container } from "../ui/Container";
import ParticleLogo from "../ui/ParticleLogo";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const HEADSET_ARTWORK = "/images/common/headset-particle.svg";

const contactRingClassName =
  "gradient-border [--gradient-border-width:1.24px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)]";

const floatingContacts = [
  {
    id: "email",
    className: "top-[55%] left-[15%]",
    orientation: "right",
  },
  {
    id: "phone",
    className: "top-[34%] right-[14%]",
    orientation: "left",
  },
].map((placement) => ({
  ...placement,
  link: contactLinks.find((contact) => contact.id === placement.id),
}));

const defaultTitle = (
  <>
    Book a free <br />
    <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
      15 minute call
    </span>{" "}
    <br />
    no hard sell.
  </>
);

// Mouse users open these on hover; touch users (no hover) open them with a tap.
const openOnHoverOrTap = (open, { reason, event, cancel }) => {
  if (!open || (reason !== "trigger-press" && reason !== "trigger-focus")) {
    return;
  }

  const isTouch =
    event?.pointerType === "touch" ||
    !window.matchMedia("(hover: hover)").matches;

  if (!isTouch) cancel();
};

const BookCall = ({
  label = "Let's work together",
  title = defaultTitle,
  subtitle = "just a chance to see if working together makes sense.",
  ctaLabel = "Get free consultation",
  ctaHref = "/contact",
  logoSvg,
  logoSvgSrc = HEADSET_ARTWORK,
  aside,
  showContacts = true,
  id = "book-call",
  className = "py-[65px] bg-black",
}) => {
  return (
    <>
      <Section id={id} className={className}>
        <Container>
          <div className="grid grid-cols-2 items-center gap-[45px]">
            <div className="flex flex-col items-start">
              <SectionHeading
                label={label}
                title={title}
                subtitle={subtitle}
                labelClassName="text-[22px] font-medium tracking-[-0.02em] text-white uppercase"
                titleClassName="text-[85px] mt-[10px] leading-[80px] font-extrabold tracking-[-0.07em] text-white"
                subtitleClassName="text-[18px] text-grey mt-[20px] max-w-[450px] leading-[28px] tracking-[-0.02em]"
              />

              <div className="flex">
                <Button
                  href={ctaHref}
                  className="mt-[45px] rounded-full bg-white px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  {ctaLabel}
                </Button>
              </div>
            </div>

            <div className="relative w-full">
              {aside}

              {!aside && (
                <ParticleLogo
                  svg={logoSvg}
                  svgSrc={logoSvg ? undefined : logoSvgSrc}
                  className="aspect-square w-full"
                />
              )}

              {!aside &&
                showContacts &&
                floatingContacts.map(
                  ({ className: positionClassName, orientation, link }) => {
                    if (!link) return null;

                    const {
                      id: contactId,
                      icon: Icon,
                      label: name,
                      href,
                    } = link;

                    return (
                      <Popover key={contactId} onOpenChange={openOnHoverOrTap}>
                        <div
                          className={`absolute z-[100] ${positionClassName}`}
                        >
                          <PopoverTrigger
                            openOnHover
                            delay={0}
                            closeDelay={180}
                            className={`relative cursor-pointer ${contactRingClassName} flex size-[60px] items-center justify-center rounded-full bg-white/20 backdrop-blur-[20px]`}
                          >
                            <Icon
                              size={22}
                              strokeWidth={2}
                              className="text-white"
                            />
                          </PopoverTrigger>
                        </div>

                        <PopoverContent
                          side={orientation}
                          sideOffset={10}
                          className={`${contactRingClassName} flex w-max flex-row items-center gap-0 rounded-full bg-white/20 px-[20px] py-[12px] shadow-none ring-0 backdrop-blur-[20px] duration-350`}
                        >
                          <Link
                            href={href}
                            className="text-[25px] font-medium tracking-[-0.04em] whitespace-nowrap text-white"
                          >
                            {name}
                          </Link>
                        </PopoverContent>
                      </Popover>
                    );
                  },
                )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BookCall;
