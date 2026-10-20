import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Button({
  href,
  children,
  className = "",
  iconClassName = "",
  iconSize = 18,
  showArrow = true,
  ...props
}) {
  const isExternal = /^(https?:)?\/\//.test(href) || href.startsWith("mailto:");

  return (
    <Link
      href={href}
      className={`group hover:bg-dark-pink! active:bg-dark-pink! inline-flex items-center justify-center gap-[10px] transition-colors duration-300 ease-out hover:text-white! active:text-white! ${className}`}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      {children}

      {showArrow && (
        <ArrowUpRight
          size={iconSize}
          strokeWidth={2.5}
          className={`shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45 group-active:rotate-45 ${iconClassName}`}
        />
      )}
    </Link>
  );
}
