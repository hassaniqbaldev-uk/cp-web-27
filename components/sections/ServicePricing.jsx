import {
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const defaultDetails = [
  { key: "timeline", label: "Timeline", icon: HiOutlineClock },
  { key: "youGet", label: "You get", icon: HiOutlineDocumentText },
  { key: "bestFor", label: "Best for", icon: HiOutlineUserGroup },
];

// Shared 3-plan pricing section for service pages. Each page passes its own
// id, heading, subtitle, plans (from config/common.js) and closing note.
const ServicePricing = ({
  id,
  title,
  subtitle,
  plans,
  note,
  details = defaultDetails,
}) => {
  return (
    <>
      <Section id={id} className="bg-grey/40 py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={title}
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            subtitle={subtitle}
            subtitleClassName="text-text-body mt-[20px] text-[22px] leading-[28px] tracking-[-0.02em]"
          />

          <ul className="mt-[60px] grid grid-cols-3 gap-[30px]">
            {plans.map((plan) => {
              const {
                id: planId,
                name,
                badge,
                prefix,
                price,
                suffix,
                ctaLabel,
                ctaHref,
                featured,
              } = plan;

              return (
                <li
                  key={planId}
                  className={`flex flex-col rounded-[20px] p-[15px] ${
                    featured ? "bg-black" : "bg-white"
                  }`}
                >
                  <div
                    className={`flex h-[250px] flex-col justify-between rounded-[15px] p-[30px] ${
                      featured
                        ? "bg-[linear-gradient(135deg,#FFFFFF_45%,var(--color-blue)_100%)]"
                        : "bg-grey/60"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-[10px]">
                      <h3 className="text-[25px] leading-[27px] font-bold tracking-[-0.07em] text-black">
                        {name}
                      </h3>

                      {badge && (
                        <span className="bg-blue rounded-full px-[15px] py-[5px] text-[16px] leading-[27px] font-bold tracking-[-0.07em] text-white">
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

                      <p className="text-[65px] leading-[70px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-black">
                        {price}
                        {suffix && (
                          <span className="ml-[5px] inline-block text-[16px] leading-[20px] font-medium tracking-[-0.02em] whitespace-pre">
                            {suffix}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  <dl className="mt-[30px] flex flex-col gap-[20px] px-[15px]">
                    {details.map(({ key, label, icon: Icon }) => (
                      <div
                        key={key}
                        className="grid grid-cols-[130px_1fr] items-start gap-[15px]"
                      >
                        <dt
                          className={`flex items-start gap-[10px] text-[16px] font-bold tracking-[-0.02em] ${
                            featured ? "text-white" : "text-black"
                          }`}
                        >
                          <Icon
                            size={20}
                            className="text-blue mt-[2px] shrink-0"
                          />
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

                  <div className="mt-auto flex pt-[30px]">
                    <Button
                      href={ctaHref}
                      className={`w-full rounded-full px-[20px] py-[15px] text-[16px] font-extrabold tracking-[-0.02em] uppercase ${
                        featured ? "bg-white text-black" : "bg-black text-white"
                      }`}
                    >
                      {ctaLabel}
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>

          {note && (
            <p className="text-text-body mt-[60px] text-center text-[22px] leading-[28px] tracking-[-0.02em]">
              {note}
            </p>
          )}
        </Container>
      </Section>
    </>
  );
};

export default ServicePricing;
