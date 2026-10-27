"use client";

import { Container } from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "What you get", href: "#what-you-get" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Prices", href: "#prices" },
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

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="bg-[linear-gradient(90deg,#EC4899_0%,#F7931E_100%)] py-[12px] max-sm:px-[20px]">
        <p className="text-center text-[15px] font-bold tracking-[-0.02em] text-white max-sm:text-[11px] max-sm:font-semibold">
          Black Friday: 25% off for 6 months. 10 spots only.{" "}
          <Link href="#prices" className="underline underline-offset-2">
            See offer
          </Link>
        </p>
      </div>

      <Container className="flex items-center justify-between py-[25px] max-sm:px-[20px] max-sm:py-[16px]">
        <Link href="/black-friday" aria-label="Creative Pixels home">
          <Image
            src="/images/common/cp-logo-with-text.svg"
            alt="Creative Pixels"
            width={197}
            height={70}
            priority
            className="h-[70px] w-auto max-sm:h-[42px]"
          />
        </Link>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="hidden size-[44px] items-center justify-center rounded-[10px] border border-white/30 text-white max-sm:flex"
        >
          <Menu size={22} strokeWidth={2} />
        </button>

        <nav aria-label="Primary" className="max-sm:hidden">
          <ul className="flex items-center gap-[40px]">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[18px] font-semibold tracking-[-0.02em] text-white capitalize transition-opacity duration-300 hover:opacity-60"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-black px-[20px] pt-[16px] pb-[30px] transition-[opacity,transform] duration-300 ease-out ${
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
                    onClick={close}
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
                onClick={close}
                className="w-full justify-center rounded-full bg-white px-[24px] py-[16px] text-[14px] font-extrabold tracking-[-0.02em] text-black uppercase"
              >
                Send us a small job
              </Button>

              <Button
                href="/contact"
                onClick={close}
                showArrow={false}
                className="w-full justify-center rounded-full border border-white/40 px-[24px] py-[16px] text-[14px] font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Book a 15-min call
              </Button>
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
