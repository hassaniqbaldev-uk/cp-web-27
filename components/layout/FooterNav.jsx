import { footerNavigation } from "@/config/navigation";
import Link from "next/link";

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
    <nav className="flex gap-[60px]">
      {footerNavigation.map(({ id, title, links }) => (
        <div key={id}>
          <h3 className="sr-only">{title}</h3>

          <LinkList links={links} />
        </div>
      ))}
    </nav>
  );
};

export default FooterNav;
