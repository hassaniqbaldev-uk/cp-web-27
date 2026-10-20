"use client";

import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { contactPhone, mainNavigation } from "@/config/navigation";
import { ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLightPage = LIGHT_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  const isDark = isScrolled || isLightPage;

  const textClassName = isDark ? "text-black" : "text-white";

  return (
    <header className="fixed top-0 left-0 z-999 w-full pt-[20px] [--logo-w:145px] [--mark-w:56px]">
      <Container
        className={`flex items-center justify-between rounded-[60px] border transition-all duration-300 ${
          isScrolled
            ? "border-black/10 bg-white px-[20px] py-[15px] shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
            : "border-transparent bg-transparent p-0 shadow-none"
        }`}
      >
        <div className="flex items-center gap-[30px]">
          <Link href="/">
            <span
              style={{
                width: isScrolled
                  ? LOGO_WIDTH
                  : `calc(${LOGO_WIDTH} - ${MARK_WIDTH})`,
              }}
              className="block overflow-hidden transition-[width] duration-500"
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
            className={`h-[50px] w-px transition-colors duration-300 ${
              isDark ? "bg-black/20" : "bg-text-body"
            }`}
          />

          <nav className="">
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

        <div className="flex items-center gap-[10px]">
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
      </Container>
    </header>
  );
};

export default Header;
