import { HeadingReveal } from "../animations/FadeUp";

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
  /**
   * Reveals the heading as it scrolls into view: the label slides up out of
   * a mask, then the title a line at a time, then the subtitle a line at a
   * time. Off by default, so a heading only moves where a section asks it to.
   */
  reveal?: boolean;
  /** With reveal: seconds before the label starts, for a hero that waits on
   *  the header dropping in. */
  revealDelay?: number;
  /**
   * With reveal: told how many lines the title broke into, so a hero can play
   * what follows it in the slots after its last line. Only from a client
   * component, since it is a function.
   */
  onRevealTitleMeasure?: (lineCount: number) => void;
  /** With reveal: the same for the subtitle, for a hero whose next item
   *  follows the subtitle rather than the title. */
  onRevealSubtitleMeasure?: (lineCount: number) => void;
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
  reveal = false,
  revealDelay,
  onRevealTitleMeasure,
  onRevealSubtitleMeasure,
  className,
  labelClassName,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  if (reveal) {
    return (
      <HeadingReveal
        as={Heading}
        delay={revealDelay}
        onTitleMeasure={onRevealTitleMeasure}
        onSubtitleMeasure={onRevealSubtitleMeasure}
        titleId={titleId}
        label={label}
        title={title}
        subtitle={subtitle}
        className={className}
        labelClassName={labelClassName}
        titleClassName={titleClassName}
        subtitleClassName={subtitleClassName}
      />
    );
  }

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
