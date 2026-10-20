import { footerNavigation } from "@/config/navigation";
import Link from "next/link";

const LinkList = ({ links }) => (
  <ul className="flex flex-col items-start">
    {links.map(({ href, label }) => (
      <li key={href}>
        <Link
          href={href}
          className="text-[16px] leading-[36px] tracking-[-0.02em] text-white/70 transition-colors duration-300 hover:text-white"
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
);

const FooterNav = () => {
  return (
    <nav className="flex gap-[45px]">
      {footerNavigation.map(({ id, title, links }) => (
        <div key={id}>
          <h3 className="text-[16px] font-bold tracking-[-0.02em] text-white uppercase">
            {title}
          </h3>

          <div className="mt-[30px]">
            <LinkList links={links} />
          </div>
        </div>
      ))}
    </nav>
  );
};

export default FooterNav;
