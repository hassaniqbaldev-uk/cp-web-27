import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  /**
   * All visual styling lives here — colour, padding, radius, font size. The
   * component itself only sets layout and motion, so nothing it applies can
   * collide with the utilities passed in.
   */
  className?: string;
  /** Styling for the arrow, e.g. a different colour to the label. */
  iconClassName?: string;
  iconSize?: number;
  /** Set false for a label-only button. */
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
      className={`group gap-xs inline-flex items-center justify-center ${className}`}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      {children}

      {showArrow && (
        <ArrowUpRight
          size={iconSize}
          strokeWidth={2.5}
          aria-hidden="true"
          className={`shrink-0 ${iconClassName}`}
        />
      )}
    </Link>
  );
}
