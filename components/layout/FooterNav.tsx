"use client";

import { footerNavigation } from "@/config/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Accordion from "../ui/Accordion";

/**
 * The footer's link columns, which fold into an accordion at 425.
 *
 * Its own component so the footer around it stays a server component: this is
 * the only part of it that needs state.
 */
const MEDIA_QUERY = "(max-width: 425px)";

type FooterLink = { href: string; label: string };

/** The same list in both layouts, so a change to it lands in both. */
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

  // A second navigation landmark needs its own name, so it is not confused
  // with the header's.
  if (isNarrow) {
    return (
      <nav aria-label="Footer" className="w-full">
        {/* The accordion the FAQs use, so a panel opens the same way wherever
            it appears. It wraps each trigger in a heading of its own, which is
            what the columns carried before. */}
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
          indicatorClassName="size-[2.4rem] text-white"
          iconClassName="size-[1.8rem]"
          contentClassName="pb-sm"
        />
      </nav>
    );
  }

  return (
    <nav aria-label="Footer" className="gap-lg flex">
      {footerNavigation.map(({ id, title, links }) => (
        <div key={id}>
          {/* A heading rather than a paragraph, so the column can be jumped to,
              and it names the list beneath it. */}
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
