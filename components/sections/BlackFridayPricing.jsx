import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { Check } from "lucide-react";

const fixedPrices = [
  {
    id: "wordpress",
    title: "WordPress & WooCommerce",
    description: "Builds, migrations, fixes and speed work",
    price: "$2,000",
  },
  {
    id: "shopify",
    title: "Shopify",
    description: "New stores, rebuilds and theme work",
    price: "$4,500",
  },
  {
    id: "print",
    title: "Print",
    description: "Brochure design with print-ready files",
    price: "$120",
  },
];

const PlanCard = ({
  variant,
  name,
  oldPrice,
  price,
  unit,
  features,
  ctaLabel,
  ctaHref,
  children,
}) => {
  const isGradient = variant === "gradient";

  return (
    <div
      className={`flex flex-col rounded-[20px] p-[40px] text-white ${
        isGradient
          ? "bg-[linear-gradient(110deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)]"
          : "bg-black"
      }`}
    >
      <div className="flex items-center justify-between gap-[20px]">
        <h3 className="text-[22px] font-bold tracking-[-0.03em]">{name}</h3>

        <span className="text-[12px] font-extrabold tracking-[0.08em] text-white uppercase">
          Black Friday price
        </span>
      </div>

      <div className="mt-[20px] flex items-end gap-[12px]">
        <span className="text-[22px] text-white/50 line-through">
          {oldPrice}
        </span>

        <span className="text-[56px] leading-none font-extrabold tracking-[-0.04em]">
          {price}
        </span>

        {unit && <span className="text-[20px] text-white/70">{unit}</span>}
      </div>

      <p className="mt-[20px] text-[15px] leading-[22px] tracking-[-0.02em] text-white/80">
        {children}
      </p>

      <ul className="mt-[30px] flex flex-col gap-[8px]">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-[5px] text-[15px] tracking-[-0.02em] text-white"
          >
            <Check size={16} strokeWidth={3} className="shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        href={ctaHref}
        className={`mt-[35px] self-start rounded-full px-[24px] py-[14px] text-[14px] font-extrabold tracking-[-0.02em] uppercase ${
          isGradient
            ? "bg-white text-black"
            : "border border-white/40 text-white"
        }`}
      >
        {ctaLabel}
      </Button>
    </div>
  );
};

const BlackFridayPricing = () => {
  return (
    <Section id="black-friday-pricing" className="pb-[120px]">
      <Container>
        <p className="text-center text-[22px] font-medium tracking-[-0.02em] text-black uppercase">
          Prices
        </p>

        <h2 className="mt-[2.5px] text-center text-[52px] leading-[56px] font-extrabold tracking-[-0.07em] text-black">
          Per job or monthly,
          <br />
          <span className="text-black/40">your margin stays safe.</span>
        </h2>

        <div className="mt-[50px] grid grid-cols-2 gap-[20px]">
          <PlanCard
            variant="gradient"
            name="Per job"
            oldPrice="$40"
            price="$30/hr"
            ctaLabel="Send us a small job"
            ctaHref="#black-friday-hero"
            features={[
              "Pay per signed-off milestone",
              "No minimums, no lock-in",
              "3-month guarantee",
            ]}
          >
            Or a fixed quote for bigger builds. Book by 30 November and <br />
            <span className="font-bold text-white">
              keep this rate for 6 months.
            </span>
          </PlanCard>

          <PlanCard
            variant="dark"
            name="Monthly partnership"
            oldPrice="$2,000"
            price="$1,500"
            unit="/month"
            ctaLabel="Ask about monthly"
            ctaHref="/contact"
            features={[
              "Design, builds, maintenance and SEO",
              "Same developers every time, your jobs go first",
              "Invoiced on the 1st, charged at month end",
            ]}
          >
            One price for support across the board. We agree a clear list of
            work each month, no timesheets. Book by 30 November and keep <br />{" "}
            this rate for{" "}
            <span className="font-bold text-white">6 months.</span>
          </PlanCard>
        </div>

        <p className="mt-[40px] text-center text-[20px] font-bold text-black">
          Prefer a fixed price? Typical starting points:
        </p>

        <div className="mt-[30px] grid grid-cols-3 gap-[16px]">
          {fixedPrices.map(({ id, title, description, price }) => (
            <div key={id} className="rounded-[16px] bg-[#F6F6F6] p-[30px]">
              <h3 className="text-[18px] font-bold tracking-[-0.02em] text-black">
                {title}
              </h3>

              <p className="mt-[8px] text-[14px] leading-[20px] tracking-[-0.02em] text-[#555555]">
                {description}
              </p>

              <p className="mt-[18px] flex items-baseline gap-[8px] border-t border-[#EEEEEE] pt-[17px]">
                <span className="text-[14px] tracking-[-0.02em] text-[#6B6B6B]">
                  From
                </span>

                <span className="text-[28px] font-extrabold tracking-[-0.04em] text-black">
                  {price}
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-[50px] text-center">
          <p className="text-text-body text-[14px] font-medium">
            Prices in USD. Black Friday 25% applies to hourly and monthly work.
          </p>

          <p className="mt-[4px] text-[14px] tracking-[-0.02em] text-[#4A4A4A]">
            Card via Stripe or Direct Debit via GoCardless
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default BlackFridayPricing;
