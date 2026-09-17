type SectionHeadingProps = {
  /** Eyebrow text above the title. Deliberately not a heading element, so it
   *  does not break the page's heading outline. */
  label?: React.ReactNode;
  /** Accepts nodes, not just a string, so parts of the title can be styled —
   *  a coloured span or a gradient word, for example. */
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /**
   * Heading level. Defaults to h2: the page's single h1 belongs to the hero,
   * and sections sit below it. Drop to h3 only when nested inside another
   * section, so the outline stays in order.
   */
  as?: "h1" | "h2" | "h3" | "h4";
  /**
   * Put on the heading so a wrapping element can reference it with
   * `aria-labelledby`, which names the region for screen readers.
   */
  titleId?: string;
  /** All visual styling lives in these — the component sets none of its own. */
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
