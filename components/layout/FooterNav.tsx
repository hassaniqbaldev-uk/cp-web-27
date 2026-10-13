"use client";

import { footerNavigation } from "@/config/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Accordion from "../ui/Accordion";

const MEDIA_QUERY = "(max-width: 425px)";

type FooterLink = { href: string; label: string };

const LinkList = ({ links }: { links: readonly FooterLink[] }) => (
  <ul className="flex flex-col items-start">
    {links.map(({ href, label }) => (
      <li key={href}>
        <Link
          href={href}
          className="text-body-03 leading-[3.6rem] tracking-[-0.02em] text-white/70 transition-colors duration-300 hover:text-white focus-visible:text-white"
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
);

const FooterNav = () => {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const narrow = window.matchMedia(MEDIA_QUERY);

    const sync = () => setIsNarrow(narrow.matches);

    sync();

    narrow.addEventListener("change", sync);

    return () => narrow.removeEventListener("change", sync);
  }, []);

  if (isNarrow) {
    return (
      <nav aria-label="Footer" className="w-full">
        <Accordion
          items={footerNavigation.map(({ id, title, links }) => ({
            id,
            title: (
              <span className="text-body-03 font-bold tracking-[-0.02em] text-white uppercase">
                {title}
              </span>
            ),
            content: <LinkList links={links} />,
          }))}
          itemClassName="border-b border-white/20"
          triggerClassName="py-sm gap-sm"
          contentClassName="pb-sm"
        />
      </nav>
    );
  }

  return (
    <nav aria-label="Footer" className="gap-lg flex">
      {footerNavigation.map(({ id, title, links }) => (
        <div key={id}>
          <h3
            id={`footer-${id}`}
            className="text-body-03 font-bold tracking-[-0.02em] text-white uppercase"
          >
            {title}
          </h3>

          <div aria-labelledby={`footer-${id}`} className="mt-md">
            <LinkList links={links} />
          </div>
        </div>
      ))}
    </nav>
  );
};

export default FooterNav;
