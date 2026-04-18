import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="surface-card border-border/40 px-5 hover:border-primary/30 transition-colors"
        >
          <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold py-5 hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-foreground/75 leading-relaxed text-base pb-5">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
