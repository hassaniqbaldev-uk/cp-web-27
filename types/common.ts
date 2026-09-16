export type HeroPopover = {
  id: string;
  title: string;
  href: string;
  image: string;
  /**
   * Tailwind position utilities for this popover, e.g. "right-[7rem] bottom-[9rem]".
   * Keep these as complete, literal class strings — Tailwind scans source files for
   * full class names, so anything built by concatenation will not be generated.
   */
  className: string;
};
