import Image from "next/image";
import {
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import Button from "../ui/Button";
import PhoneSlider from "../ui/PhoneSlider";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const defaultDetails = [
  { key: "timeline", label: "Timeline", icon: HiOutlineClock },
  { key: "youGet", label: "You get", icon: HiOutlineDocumentText },
  { key: "bestFor", label: "Best for", icon: HiOutlineUserGroup },
];

// Shared pricing section (2 or 3 plans) for service pages. Each page passes its own
// id, heading, subtitle, plans (from config/common.js) and closing note.
const ServicePricing = ({
  id,
  title,
  subtitle,
  plans,
  note,
  details = defaultDetails,
  background,
}) => {
  const cards = plans.map((plan) => {
    const {
      id: planId,
      name,
      badge,
      prefix,
      price,
      suffix,
      priceNote,
      ctaLabel,
      ctaHref,
      featured,
    } = plan;

    return (
      <div
        key={planId}
        className={`flex h-full flex-col rounded-[20px] p-[15px] max-sm:p-[12px] ${
          featured ? "bg-black" : "bg-white"
        }`}
      >
        <div
          className={`flex h-[250px] flex-col justify-between rounded-[15px] p-[30px] max-sm:h-auto max-sm:gap-[36px] max-sm:p-[22px] ${
            featured
              ? "bg-[linear-gradient(135deg,#FFFFFF_45%,var(--color-blue)_100%)]"
              : "bg-grey/60"
          }`}
        >
          <div className="flex items-center justify-between gap-[10px]">
            <h3 className="text-[25px] leading-[27px] font-bold tracking-[-0.07em] whitespace-pre-line text-black max-sm:text-[22px] max-sm:leading-[25px]">
              {name}
            </h3>

            {badge && (
              <span className="bg-blue rounded-full px-[15px] py-[5px] text-[16px] leading-[27px] font-bold tracking-[-0.07em] text-white max-sm:px-[12px] max-sm:py-[3px] max-sm:text-[14px]">
                {badge}
              </span>
            )}
          </div>

          <div>
            {prefix && (
              <span className="block text-[16px] leading-[20px] tracking-[-0.02em] text-black">
                {prefix}
              </span>
            )}

            <p className="text-[65px] leading-[70px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-black max-sm:text-[50px] max-sm:leading-[56px]">
              {price}
              {suffix && (
                <span className="ml-[5px] inline-block text-[16px] leading-[20px] font-medium tracking-[-0.02em] whitespace-pre">
                  {suffix}
                </span>
              )}
            </p>

            {priceNote && (
              <span className="mt-[8px] block text-[16px] leading-[20px] tracking-[-0.02em] text-black">
                {priceNote}
              </span>
            )}
          </div>
        </div>

        <dl className="mt-[30px] flex flex-col gap-[20px] px-[15px] max-sm:mt-[24px] max-sm:gap-[16px] max-sm:px-[10px]">
          {details.map(({ key, label, icon: Icon }) => (
            <div
              key={key}
              className="grid grid-cols-[130px_1fr] items-start gap-[15px] max-sm:grid-cols-[105px_1fr] max-sm:gap-[10px]"
            >
              <dt
                className={`flex items-start gap-[10px] text-[16px] font-bold tracking-[-0.02em] max-sm:gap-[8px] max-sm:text-[15px] ${
                  featured ? "text-white" : "text-black"
                }`}
              >
                <Icon size={20} className="text-blue mt-[2px] shrink-0" />
                {label}
              </dt>

              <dd
                className={`text-[14px] leading-[20px] tracking-[-0.02em] ${
                  featured ? "text-white/80" : "text-text-body"
                }`}
              >
                {plan[key]}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex pt-[30px] max-sm:pt-[24px]">
          <Button
            href={ctaHref}
            className={`w-full rounded-full px-[20px] py-[15px] text-[16px] font-extrabold tracking-[-0.02em] uppercase max-sm:py-[13px] max-sm:text-[15px] ${
              featured ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    );
  });

  return (
    <>
      <Section
        id={id}
        className={`py-[120px] max-sm:py-[80px] ${
          background ? "relative overflow-hidden" : "bg-grey/40"
        }`}
      >
        {background && (
          <Image
            src={background}
            alt=""
            fill
            sizes="100vw"
            className="pointer-events-none z-0 object-cover"
          />
        )}

        <Container
          className={`max-sm:px-[20px] ${background ? "relative z-10" : ""}`}
        >
          <SectionHeading
            className="text-center"
            title={title}
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[30px] max-sm:leading-[32px]"
            subtitle={subtitle}
            subtitleClassName="text-text-body mt-[20px] text-[22px] leading-[28px] tracking-[-0.02em] max-sm:mt-[16px] max-sm:text-[16px] max-sm:leading-[24px]"
          />

          <ul
            className={`mt-[60px] grid gap-[30px] max-sm:hidden ${
              plans.length === 2 ? "grid-cols-2" : "grid-cols-3"
            }`}
          >
            {cards.map((card) => (
              <li key={card.key}>{card}</li>
            ))}
          </ul>

          {/* Phones: one plan at a time. */}
          <PhoneSlider className="mt-[30px] hidden max-sm:block">
            {cards}
          </PhoneSlider>

          {note && (
            <p className="text-text-body mt-[60px] text-center text-[22px] leading-[28px] tracking-[-0.02em] max-sm:mt-[30px] max-sm:text-[16px] max-sm:leading-[24px]">
              {note}
            </p>
          )}
        </Container>
      </Section>
    </>
  );
};

export default ServicePricing;
