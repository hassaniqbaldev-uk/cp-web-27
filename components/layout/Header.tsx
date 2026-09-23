"use client";

import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Dropdown from "@/components/ui/Dropdown";
import Image from "next/image";
import { contactPhone, mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ChevronDown, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PHONE_DROPDOWN_ID = "phone";

// Far enough that the background does not flicker on and off while the page
// settles, close enough that it lands as soon as the hero starts moving.
const SCROLL_THRESHOLD = 20;

// The mark occupies the left of the artwork and the wordmark the rest, so
// hiding the first and showing the whole are a width and an offset apart.
//
// Read from custom properties set on the header rather than written as fixed
// values: an inline style cannot be overridden by a media query, so the two
// widths have to live in CSS for the logo to resize at a breakpoint. The
// reveal below is unaffected, since calc() accepts a var().
const MARK_WIDTH = "var(--mark-w)";
const LOGO_WIDTH = "var(--logo-w)";

// Routes whose hero is light. The header needs its dark treatment from the top
// there, rather than only once a white band is behind it.
const LIGHT_ROUTES = ["/about"];

const Header = () => {
  // A single id rather than per-dropdown state, so opening one closes the rest.
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => (open: boolean) => setOpenId(open ? id : null);

  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Passive, so the listener can never delay the scroll itself, and it reads
    // scrollY rather than measuring, which would force a layout every frame.
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

    // Run once on mount: a reload part way down the page starts scrolled.
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLightPage = LIGHT_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  // Colour follows what is behind the header, which is light either once the
  // white band appears or from the top on a light page. The mark reveal and
  // the band itself still follow the scroll alone.
  const isDark = isScrolled || isLightPage;

  const textClassName = isDark ? "text-black" : "text-white";

  return (
    <header className="pt-sm max-768:px-[2rem] max-425:[--logo-w:9.6rem] max-425:[--mark-w:3.71rem] max-1280:px-[4rem] fixed top-0 left-0 z-999 w-full [--logo-w:14.5rem] [--mark-w:5.6rem]">
      <Container
        className={`flex items-center justify-between rounded-xl transition-all duration-300 ${
          isScrolled ? "px-sm bg-white py-[1.5rem]" : "bg-transparent p-0"
        }`}
      >
        <div className="gap-md max-425:gap-sm flex items-center">
          <Link href="/" aria-label={`${siteConfig.name} — home`}>
            {/* A window over the artwork. Closed, it starts where the wordmark
                does, so only that shows; opened, it widens to the full logo
                while the artwork slides right into place, which reads as the
                mark arriving from the left. */}
            <span
              aria-hidden="true"
              style={{
                width: isScrolled
                  ? LOGO_WIDTH
                  : `calc(${LOGO_WIDTH} - ${MARK_WIDTH})`,
              }}
              className="block overflow-hidden transition-[width] duration-500 motion-reduce:transition-none"
            >
              <Image
                // The wordmark has its colour baked in, so the white band
                // gets a copy of the artwork with a dark one.
                src={
                  isDark
                    ? "/images/common/cp-logo-with-text-dark.svg"
                    : "/images/common/cp-logo-with-text.svg"
                }
                alt=""
                width={171}
                height={65}
                style={{
                  width: LOGO_WIDTH,
                  marginLeft: isScrolled ? 0 : `calc(${MARK_WIDTH} * -1)`,
                }}
                // max-w-none so the artwork keeps its full width inside a
                // narrower window rather than being squeezed to fit.
                className="max-425:h-[3.6rem] h-auto max-w-none transition-[margin] duration-500 motion-reduce:transition-none"
              />
            </span>
          </Link>

          <span
            aria-hidden="true"
            className={`max-1280:hidden h-[5rem] w-px transition-colors duration-300 ${
              isDark ? "bg-black/20" : "bg-text-body"
            }`}
          />

          <nav aria-label="Main" className="max-1280:hidden">
            <ul className="gap-md flex items-center">
              {mainNavigation.map((item) =>
                item.children ? (
                  <li key={item.href}>
                    <Dropdown
                      isOpen={openId === item.href}
                      onOpenChange={toggle(item.href)}
                      triggerClassName={`text-body-02 font-normal tracking-[-0.02em] capitalize ${textClassName}`}
                      panelClassName="top-full left-0 mt-[1rem] min-w-[18rem] rounded-sm bg-white p-[0.5rem] text-black shadow-lg"
                      trigger={
                        <>
                          {item.label}
                          <ChevronDown
                            size={16}
                            strokeWidth={2.5}
                            aria-hidden="true"
                            className={`shrink-0 ${openId === item.href ? "rotate-180" : ""}`}
                          />
                        </>
                      }
                    >
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpenId(null)}
                              className="text-body-03 hover:bg-grey block rounded-xs px-[1rem] py-[0.8rem]"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Dropdown>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-body-02 font-normal tracking-[-0.02em] capitalize ${textClassName}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        <div className="gap-xs max-425:gap-[0.4rem] flex items-center">
          <Dropdown
            isOpen={openId === PHONE_DROPDOWN_ID}
            onOpenChange={toggle(PHONE_DROPDOWN_ID)}
            className="max-425:hidden"
            triggerLabel="Phone number"
            triggerClassName="size-[5.3rem] justify-center rounded-full bg-dark-pink  text-white"
            panelClassName="top-full right-0 mt-[1rem] rounded-sm bg-white p-[1rem] text-black shadow-lg"
            trigger={<Phone size={24} strokeWidth={2} aria-hidden="true" />}
          >
            <a
              href={contactPhone.href}
              className="text-body-03 block font-medium whitespace-nowrap"
            >
              {contactPhone.label}
            </a>
          </Dropdown>

          <Button
            href="/contact"
            className={`text-body-02 px-sm py-xs max-425:hidden rounded-xl font-extrabold tracking-[-0.02em] uppercase transition-colors duration-300 ${
              isDark ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Free Website Audit
          </Button>

          {/* Takes over from the nav, which is hidden from this width down.
              Inert until there is a panel for it to open. */}
          <button
            type="button"
            aria-label="Open menu"
            className={`max-1280:flex max-425:size-[3.2rem] bg-dark-pink hidden size-[5.3rem] shrink-0 cursor-pointer items-center justify-center rounded-full text-white transition-colors duration-300`}
          >
            <Menu
              size={24}
              strokeWidth={2}
              aria-hidden="true"
              className="max-425:size-[1.6rem] size-[2.4rem]"
            />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
