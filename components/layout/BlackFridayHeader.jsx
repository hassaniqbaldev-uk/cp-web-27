"use client";

import { Container } from "../ui/Container";
import Button from "../ui/Button";
import BookCallButton from "../ui/BookCallButton";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "What you get", href: "#black-friday-compare" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Prices", href: "#black-friday-pricing" },
  { label: "FAQ", href: "#faq" },
];

const menuLinks = [
  { label: "Why us", href: "#black-friday-founder" },
  { label: "Prices", href: "#black-friday-pricing" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Our work", href: "#black-friday-work" },
  { label: "FAQ", href: "#faq" },
];

const BlackFridayHeader = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const close = () => setOpen(false);
  const lenis = useLenis();

  const handleNav = (event, href) => {
    close();

    if (!href.startsWith("#") || !lenis) return;

    const target = document.querySelector(href);

    if (!target) return;

    event.preventDefault();

    // The open menu locked scroll and paused Lenis; undo both now so scrollTo
    // can run before the close effect's cleanup catches up.
    document.body.style.overflow = "";
    lenis.start();
    lenis.scrollTo(target, { force: true });
  };

  useEffect(() => {
    if (!open) return;

    // Pause Lenis so it stops hijacking wheel/touch — the overlay then scrolls
    // natively and the page behind stays put.
    lenis?.stop();
    document.body.style.overflow = "hidden";

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, lenis]);

  // Collapse the top bar and give the nav a background once scrolled past it.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div
        className={`overflow-hidden bg-[linear-gradient(90deg,#EC4899_0%,#F7931E_100%)] transition-all duration-300 max-sm:px-[20px] ${
          isScrolled
            ? "max-h-0 py-0 opacity-0"
            : "max-h-[80px] py-[12px] opacity-100"
        }`}
      >
        <p className="text-center text-[15px] font-bold tracking-[-0.02em] text-white max-sm:text-[11px] max-sm:font-semibold">
          Black Friday: 25% off for 6 months. 10 spots only.{" "}
          <Link
            href="#black-friday-pricing"
            onClick={(event) => handleNav(event, "#black-friday-pricing")}
            className="underline underline-offset-2"
          >
            See offer
          </Link>
        </p>
      </div>

      <div className={isScrolled ? "px-[20px] pt-[12px] max-sm:px-[16px]" : ""}>
        <Container
          className={`flex items-center justify-between rounded-[60px] border transition-all duration-300 ${
            isScrolled
              ? "border-black/10 bg-white px-[30px] py-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] max-sm:px-[20px]"
              : "border-transparent py-[25px] max-xl:px-[40px] max-sm:px-[20px] max-sm:py-[16px]"
          }`}
        >
          <Link href="/black-friday" aria-label="Creative Pixels home">
            <Image
              src={
                isScrolled
                  ? "/images/common/cp-logo-with-text-dark.svg"
                  : "/images/common/cp-logo-with-text.svg"
              }
              alt="Creative Pixels"
              width={197}
              height={70}
              priority
              className="h-[70px] w-auto max-sm:h-[42px]"
            />
          </Link>

          <div className="flex items-center gap-[40px] max-xl:gap-[20px]">
            <nav aria-label="Primary" className="max-xl:hidden">
              <ul className="flex items-center gap-[40px]">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={(event) => handleNav(event, href)}
                      className={`text-[18px] font-semibold tracking-[-0.02em] capitalize transition-opacity duration-300 hover:opacity-60 ${
                        isScrolled ? "text-black" : "text-white"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="tel:+441618202667"
              aria-label="Call us on 0161 820 2667"
              className="bg-dark-pink flex size-[44px] shrink-0 items-center justify-center rounded-full text-white max-sm:size-[40px]"
            >
              <Phone size={20} strokeWidth={2} />
            </a>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className={`hidden size-[44px] items-center justify-center rounded-[10px] border transition-colors max-xl:flex ${
                isScrolled
                  ? "border-black/20 text-black"
                  : "border-white/30 text-white"
              }`}
            >
              <Menu size={22} strokeWidth={2} />
            </button>
          </div>
        </Container>
      </div>

      <div
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-[100] flex flex-col overflow-y-auto overscroll-contain bg-black px-[20px] pt-[16px] pb-[30px] transition-[opacity,transform] duration-300 ease-out ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-[0.98] opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_35%_at_0%_0%,rgba(236,145,34,0.35)_0%,rgba(236,53,147,0.15)_40%,rgba(0,0,0,0)_70%)]" />

        <div className="relative z-10 flex min-h-full flex-col">
          <div className="flex items-center justify-between">
            <Link
              href="/black-friday"
              aria-label="Creative Pixels home"
              onClick={close}
            >
              <Image
                src="/images/common/cp-logo-with-text.svg"
                alt="Creative Pixels"
                width={197}
                height={70}
                className="h-[42px] w-auto"
              />
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="flex size-[44px] items-center justify-center rounded-[10px] border border-white/30 text-white"
            >
              <X size={22} strokeWidth={2} />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-[30px]">
            <ul>
              {menuLinks.map(({ label, href }) => (
                <li key={href} className="border-b border-white/10">
                  <Link
                    href={href}
                    onClick={(event) => handleNav(event, href)}
                    className="flex items-center justify-between py-[22px] text-[24px] font-bold tracking-[-0.02em] text-white"
                  >
                    {label}

                    <ArrowRight
                      size={20}
                      strokeWidth={2}
                      className="text-white/70"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-[40px]">
            <p className="text-center text-[13px] tracking-[-0.02em] text-white">
              <span className="text-dark-pink font-bold">Black Friday:</span>{" "}
              25% off for 6 months. 10 spots only.
            </p>

            <div className="mt-[16px] flex flex-col gap-[12px]">
              <Button
                href="#black-friday-hero"
                onClick={(event) => handleNav(event, "#black-friday-hero")}
                className="w-full justify-center rounded-full bg-white px-[24px] py-[16px] text-[14px] font-extrabold tracking-[-0.02em] text-black uppercase"
              >
                Send us a small job
              </Button>

              <BookCallButton
                onClick={close}
                className="w-full rounded-full border border-white/40 px-[24px] py-[16px] text-[14px] font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Book a 15-min call
              </BookCallButton>
            </div>

            <div className="mt-[20px] flex items-center gap-[10px]">
              <Image
                src="/images/black-friday/hassan-avatar.png"
                alt=""
                width={28}
                height={28}
                className="size-[28px] rounded-full object-cover"
              />

              <span className="text-[13px] tracking-[-0.02em] text-white/70">
                Hassan replies within 1 working day
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlackFridayHeader;
