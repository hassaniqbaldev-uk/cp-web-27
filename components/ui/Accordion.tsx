export type AccordionItem = {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  headingLevel?: "h3" | "h4";
  className?: string;
  itemClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
};

export default function Accordion({
  items,
  headingLevel: Heading = "h3",
  className,
  itemClassName,
  triggerClassName,
  contentClassName,
}: AccordionProps) {
  return (
    <div className={className}>
      {items.map(({ id, title, content }) => (
        <div key={id} className={itemClassName}>
          <Heading
            className={`flex w-full items-center ${triggerClassName ?? ""}`}
          >
            {title}
          </Heading>

          <div className={contentClassName}>{content}</div>
        </div>
      ))}
    </div>
  );
}
