"use client";

import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { contactPhone, mainNavigation } from "@/config/navigation";
import { useLenis } from "lenis/react";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";

const SCROLL_THRESHOLD = 20;

const MARK_WIDTH = "var(--mark-w)";
const LOGO_WIDTH = "var(--logo-w)";

const LIGHT_ROUTES = ["/about", "/partner-with-us"];

const NAV_LINK_CLASSNAME =
  "text-[18px] font-normal tracking-[-0.02em] capitalize transition-opacity duration-300 group-hover/nav:opacity-40 hover:opacity-100! data-popup-open:opacity-100!";

const MENU_POSITIONER_CLASSNAME = "z-1000";

const MENU_ITEM_CLASSNAME =
  "hover:bg-grey focus:bg-grey block rounded-[5px] px-[10px] py-[8px] text-[16px] text-black";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();

  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const isLightPage = LIGHT_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  const isDark = isScrolled || isLightPage;

  const textClassName = isDark ? "text-black" : "text-white";

  return (
    <header className="fixed top-0 left-0 z-999 w-full pt-[20px] [--logo-w:145px] [--mark-w:56px] max-sm:px-[12px] max-sm:pt-[12px]">
      <Container
        className={`flex items-center justify-between rounded-[60px] border transition-all duration-300 ${
          isScrolled
            ? "border-black/10 bg-white px-[20px] py-[15px] shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
            : "border-transparent bg-transparent p-0 shadow-none"
        } max-sm:border-black/10 max-sm:bg-white max-sm:py-[6px] max-sm:pr-[6px] max-sm:pl-[16px] max-sm:shadow-[0_4px_24px_rgba(0,0,0,0.08)]`}
      >
        <div className="flex items-center gap-[30px]">
          <Link href="/" aria-label="Creative Pixels home">
            <Image
              src="/images/common/cp-logo-with-text-dark.svg"
              alt=""
              width={171}
              height={65}
              priority
              className="hidden h-[40px] w-auto max-sm:block"
            />

            <span
              style={{
                width: isScrolled
                  ? LOGO_WIDTH
                  : `calc(${LOGO_WIDTH} - ${MARK_WIDTH})`,
              }}
              className="block overflow-hidden transition-[width] duration-500 max-sm:hidden"
            >
              <Image
                src={
                  isDark
                    ? "/images/common/cp-logo-with-text-dark.svg"
                    : "/images/common/cp-logo-with-text.svg"
                }
                alt=""
                width={171}
                height={65}
                priority
                style={{
                  width: LOGO_WIDTH,
                  marginLeft: isScrolled ? 0 : `calc(${MARK_WIDTH} * -1)`,
                }}
                className="h-auto max-w-none transition-[margin] duration-500"
              />
            </span>
          </Link>

          <span
            className={`h-[50px] w-px transition-colors duration-300 max-sm:hidden ${
              isDark ? "bg-black/20" : "bg-text-body"
            }`}
          />

          <nav className="max-sm:hidden">
            <ul className="group/nav flex items-center gap-[30px]">
              {mainNavigation.map((item) =>
                item.children ? (
                  <li key={item.href}>
                    <DropdownMenu modal={false}>
                      <DropdownMenuTrigger
                        className={`inline-flex cursor-pointer items-center gap-[10px] ${NAV_LINK_CLASSNAME} ${textClassName}`}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          strokeWidth={2.5}
                          className="shrink-0 in-data-popup-open:rotate-180"
                        />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        sideOffset={10}
                        positionerClassName={MENU_POSITIONER_CLASSNAME}
                        className="w-auto min-w-[180px] rounded-[10px] bg-white p-[5px] text-black shadow-lg ring-0"
                      >
                        {item.children.map((child) => (
                          <DropdownMenuItem
                            key={child.href}
                            render={<Link href={child.href} />}
                            className={MENU_ITEM_CLASSNAME}
                          >
                            {child.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${NAV_LINK_CLASSNAME} ${textClassName}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-[10px] max-sm:hidden">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="bg-dark-pink inline-flex size-[53px] cursor-pointer items-center justify-center rounded-full text-white">
              <Phone size={24} strokeWidth={2} />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              sideOffset={10}
              positionerClassName={MENU_POSITIONER_CLASSNAME}
              className="w-auto rounded-[10px] bg-white p-[5px] text-black shadow-lg ring-0"
            >
              <DropdownMenuItem
                render={<a href={contactPhone.href} />}
                className={`${MENU_ITEM_CLASSNAME} font-medium whitespace-nowrap`}
              >
                {contactPhone.label}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            href="/contact"
            className={`rounded-[60px] px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] uppercase transition-colors duration-300 ${
              isDark ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Free Website Audit
          </Button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="bg-dark-pink hidden size-[42px] shrink-0 cursor-pointer items-center justify-center rounded-full text-white max-sm:flex"
        >
          <HiOutlineBars3BottomRight size={22} />
        </button>
      </Container>

      <div
        aria-hidden={!open}
        inert={!open}
        data-lenis-prevent
        className={`fixed inset-0 z-[100] flex flex-col overflow-y-auto overscroll-contain bg-black px-[20px] pt-[18px] pb-[30px] transition-[opacity,transform] duration-300 ease-out sm:hidden ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-[0.98] opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_35%_at_0%_0%,rgba(236,145,34,0.35)_0%,rgba(236,53,147,0.15)_40%,rgba(0,0,0,0)_70%)]" />

        <div className="relative z-10 flex min-h-full shrink-0 flex-col">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Creative Pixels home" onClick={close}>
              <Image
                src="/images/common/cp-logo-with-text.svg"
                alt=""
                width={171}
                height={65}
                className="h-[40px] w-auto"
              />
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="bg-dark-pink flex size-[42px] cursor-pointer items-center justify-center rounded-full text-white"
            >
              <HiOutlineXMark size={22} />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-[30px]">
            <Accordion className="text-white">
              {mainNavigation.map((item) =>
                item.children ? (
                  <AccordionItem
                    key={item.href}
                    value={item.href}
                    className="border-b border-white/10"
                  >
                    <AccordionTrigger
                      className="py-[20px] text-[24px] font-bold tracking-[-0.02em]"
                      indicatorClassName="text-white/70 [&_svg]:size-[20px]"
                    >
                      {item.label}
                    </AccordionTrigger>

                    <AccordionContent className="flex flex-col pb-[16px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={close}
                          className="py-[8px] text-[16px] tracking-[-0.02em] text-white/70"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className="flex items-center justify-between border-b border-white/10 py-[20px] text-[24px] font-bold tracking-[-0.02em]"
                  >
                    {item.label}

                    <ArrowRight
                      size={20}
                      strokeWidth={2}
                      className="text-white/70"
                    />
                  </Link>
                ),
              )}
            </Accordion>
          </nav>

          <div className="mt-auto flex flex-col gap-[12px] pt-[40px]">
            <Button
              href="/contact"
              onClick={close}
              className="w-full rounded-full bg-white px-[24px] py-[16px] text-[14px] font-extrabold tracking-[-0.02em] text-black uppercase"
            >
              Free Website Audit
            </Button>

            <a
              href={contactPhone.href}
              className="flex w-full items-center justify-center gap-[10px] rounded-full border border-white/40 px-[24px] py-[16px] text-[14px] font-extrabold tracking-[-0.02em] text-white uppercase"
            >
              <Phone size={18} strokeWidth={2} />
              {contactPhone.label}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
