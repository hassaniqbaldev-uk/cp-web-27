type SectionHeadingProps = {
  label?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  titleId?: string;
  className?: string;
  labelClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  as: Heading = "h2",
  titleId,
  className,
  labelClassName,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {label && <p className={labelClassName}>{label}</p>}

      <Heading id={titleId} className={titleClassName}>
        {title}
      </Heading>

      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
    </div>
  );
}
