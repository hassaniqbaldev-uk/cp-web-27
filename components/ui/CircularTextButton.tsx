import Image from "next/image";
import Link from "next/link";

type CircularTextButtonProps = {
  href: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  srLabel: string;
  children: React.ReactNode;
  className?: string;
  ringClassName?: string;
};

export default function CircularTextButton({
  href,
  image,
  imageWidth,
  imageHeight,
  srLabel,
  children,
  className = "",
  ringClassName = "",
}: CircularTextButtonProps) {
  return (
    <Link
      href={href}
      className={`group relative flex items-center justify-center ${className}`}
    >
      <span className="sr-only">{srLabel}</span>

      <Image
        src={image}
        alt=""
        aria-hidden="true"
        width={imageWidth}
        height={imageHeight}
        className={ringClassName}
      />

      <span aria-hidden="true" className="absolute">
        {children}
      </span>
    </Link>
  );
}
