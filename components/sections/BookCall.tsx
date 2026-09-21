"use client";

import { contactLinks } from "@/config/common";
import { useState } from "react";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import ParticleLogo from "../ui/ParticleLogo";
import Popover from "../ui/Popover";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// Reused rather than restated, so these cannot drift out of step with the
// Contact section. Positions are a share of the box, so they track the logo
// instead of sitting at a fixed pixel offset.
const floatingContacts = [
  // The trigger sits at the root's top right corner, so x = 0 is its right
  // edge and it extends 6rem to the left of that. The panel is offset from
  // there, and grows out of the side it sits on.
  {
    id: "email",
    className: "top-[55%] left-[20%]",
    panelPositionClassName: "top-[0.3rem] left-[1rem]",
    panelOrigin: "left center",
  },
  {
    id: "phone",
    className: "top-[34%] right-[15%]",
    panelPositionClassName: "top-[0.3rem] right-[7rem]",
    panelOrigin: "right center",
  },
].map((placement) => ({
  ...placement,
  link: contactLinks.find((contact) => contact.id === placement.id),
}));

// Fetched rather than inlined, so the markup stays out of the page's
// JavaScript and is cached like any other asset.
const HEADSET_ARTWORK = "/images/common/headset-particle.svg";

const contactRingClassName =
  "gradient-border [--gradient-border-width:1.24px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)]";

/**
 * The home page's copy, kept as the defaults so pages that want it render
 * `<BookCall />` and nothing else. Anywhere else passes its own.
 */
const defaultTitle = (
  <>
    Book a free <br />
    {/* pr compensates for the negative tracking, which otherwise pulls the
        paint box in and clips the last glyph of a gradient span. */}
    <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
      15 minute call
    </span>{" "}
    <br />
    no hard sell.
  </>
);

type BookCallProps = {
  label?: string;
  /** Accepts nodes, so part of it can carry the gradient. */
  title?: React.ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /**
   * Artwork for the particle field. Defaults to the headset, so pages that
   * want it pass nothing.
   */
  logoSvg?: string;
  /** Artwork fetched at runtime, for files too large to inline. */
  logoSvgSrc?: string;
  logoLabel?: string;
  /**
   * The email and phone popovers over the logo. Turn them off on pages that
   * want the particle logo on its own.
   */
  showContacts?: boolean;
  /**
   * Unique per page. Two of these on one page would otherwise give the
   * document two elements with the same id, which breaks fragment links.
   */
  id?: string;
  className?: string;
};

const BookCall = ({
  label = "Let's work together",
  title = defaultTitle,
  subtitle = "just a chance to see if working together makes sense.",
  ctaLabel = "Get free consultation",
  ctaHref = "/contact",
  logoSvg,
  logoSvgSrc = HEADSET_ARTWORK,
  logoLabel = "Headset made of drifting particles",
  showContacts = true,
  id = "book-call",
  className = "py-xl bg-black",
}: BookCallProps) => {
  // One id rather than a flag each, so opening one closes the other.
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <Section id={id} className={className}>
        <Container>
          <div className="gap-lg grid grid-cols-2 items-center">
            <div className="flex flex-col items-start">
              <SectionHeading
                label={label}
                title={title}
                subtitle={subtitle}
                labelClassName="text-body-01 font-medium tracking-[-0.02em] text-white uppercase"
                titleClassName="text-heading-02 mt-xs leading-[8rem] font-extrabold tracking-[-0.07em] text-white"
                subtitleClassName="text-body-02 text-grey mt-sm max-w-[35rem] leading-[2.8rem] tracking-[-0.02em]"
              />

              <Button
                href={ctaHref}
                className="text-body-03 px-sm py-xs mt-lg rounded-full bg-white font-extrabold tracking-[-0.02em] text-black uppercase"
              >
                {ctaLabel}
              </Button>
            </div>

            {/* The width sits on the wrapper, not the logo: a grid item sizes
                to its content, so a w-full child of an auto-width parent
                collapses and the canvas never gets a size to draw into. */}
            <div className="relative w-full">
              <ParticleLogo
                svg={logoSvg}
                svgSrc={logoSvg ? undefined : logoSvgSrc}
                label={logoLabel}
                className="aspect-square w-full"
              />

              {showContacts &&
                floatingContacts.map(
                  ({
                    className: positionClassName,
                    panelPositionClassName,
                    panelOrigin,
                    link,
                  }) => {
                    if (!link) return null;

                    const {
                      id: contactId,
                      icon: Icon,
                      label: name,
                      href,
                    } = link;

                    return (
                      <Popover
                        key={contactId}
                        title={name}
                        href={href}
                        className={positionClassName}
                        panelPositionClassName={panelPositionClassName}
                        panelOrigin={panelOrigin}
                        isOpen={openId === contactId}
                        onOpenChange={(open) =>
                          setOpenId(open ? contactId : null)
                        }
                        squareClassName={`${contactRingClassName} flex size-[6rem] items-center justify-center rounded-full bg-white/20 backdrop-blur-[20px]`}
                        panelClassName={`${contactRingClassName} items-center rounded-full bg-white/20 px-[2rem] py-[1.2rem] backdrop-blur-[20px]`}
                        trigger={
                          <Icon
                            aria-hidden="true"
                            size={22}
                            strokeWidth={2}
                            className="text-white"
                          />
                        }
                      >
                        <span className="text-subheading-01 font-medium tracking-[-0.04em] whitespace-nowrap text-white">
                          {name}
                        </span>
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
