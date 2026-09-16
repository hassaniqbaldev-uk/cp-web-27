"use client";

import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Dropdown from "@/components/ui/Dropdown";
import Logo from "@/components/ui/Logo";
import { contactPhone, mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const PHONE_DROPDOWN_ID = "phone";

const Header = () => {
  // A single id rather than per-dropdown state, so opening one closes the rest.
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => (open: boolean) => setOpenId(open ? id : null);

  return (
    <header className="fixed top-0 left-0 z-999 w-full">
      <Container className="pt-sm flex items-center justify-between">
        <div className="gap-lg flex items-center">
          <Link href="/" aria-label={`${siteConfig.name} — home`}>
            <Logo title={null} className="h-auto w-[10.3rem] text-white" />
          </Link>

          <span aria-hidden="true" className="bg-text-body h-[5rem] w-px" />

          <nav aria-label="Main">
            <ul className="gap-md flex items-center">
              {mainNavigation.map((item) =>
                item.children ? (
                  <li key={item.href}>
                    <Dropdown
                      isOpen={openId === item.href}
                      onOpenChange={toggle(item.href)}
                      triggerClassName="text-body-02 font-normal tracking-[-0.02em] text-white capitalize"
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
                      className="text-body-02 font-normal tracking-[-0.02em] text-white capitalize"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        <div className="gap-xs flex items-center">
          <Dropdown
            isOpen={openId === PHONE_DROPDOWN_ID}
            onOpenChange={toggle(PHONE_DROPDOWN_ID)}
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
            className="text-body-02 px-sm py-xs rounded-xl bg-white font-extrabold tracking-[-0.02em] text-black uppercase"
          >
            Free Website Audit
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
