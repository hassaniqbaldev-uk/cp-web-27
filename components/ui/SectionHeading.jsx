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
}) {
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
