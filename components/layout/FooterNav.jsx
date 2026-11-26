import { footerNavigation } from "@/config/navigation";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const LinkList = ({ links }) => (
  <ul className="flex flex-col items-start">
    {links.map(({ href, label }) => (
      <li key={href}>
        <Link
          href={href}
          className="text-[16px] leading-[36px] tracking-[-0.02em] text-white/80 transition-colors duration-300 hover:text-white"
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
);

const FooterNav = () => {
  return (
    <>
      <nav className="flex gap-[60px] max-sm:hidden">
        {footerNavigation.map(({ id, title, links }) => (
          <div key={id}>
            <h3 className="sr-only">{title}</h3>

            <LinkList links={links} />
          </div>
        ))}
      </nav>

      {/* Phones: one accordion row per column. */}
      <nav className="hidden w-full max-sm:block">
        <Accordion className="border-t border-white/10">
          {footerNavigation.map(({ id, title, links }) => (
            <AccordionItem
              key={id}
              value={id}
              className="border-b border-white/10"
            >
              <AccordionTrigger
                className="py-[16px] text-[20px] font-bold tracking-[-0.02em] text-white"
                indicatorClassName="text-white/70 [&_svg]:size-[18px]"
              >
                {title}
              </AccordionTrigger>

              <AccordionContent className="pb-[12px]">
                <LinkList links={links} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </nav>
    </>
  );
};

export default FooterNav;
