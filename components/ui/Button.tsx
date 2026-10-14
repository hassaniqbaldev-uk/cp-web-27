import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
  iconSize?: number;
  showArrow?: boolean;
} & Omit<
  React.ComponentPropsWithoutRef<typeof Link>,
  "href" | "className" | "children"
>;

export default function Button({
  href,
  children,
  className = "",
  iconClassName = "",
  iconSize = 18,
  showArrow = true,
  ...props
}: ButtonProps) {
  const isExternal = /^(https?:)?\/\//.test(href) || href.startsWith("mailto:");

  return (
    <Link
      href={href}
      className={`group gap-xs hover:bg-dark-pink! active:bg-dark-pink! inline-flex items-center justify-center transition-colors duration-300 ease-out hover:text-white! active:text-white! motion-reduce:transition-none ${className}`}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      {children}

      {showArrow && (
        <ArrowUpRight
          size={iconSize}
          strokeWidth={2.5}
          aria-hidden="true"
          className={`shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45 group-active:rotate-45 motion-reduce:transition-none ${iconClassName}`}
        />
      )}
    </Link>
  );
}
