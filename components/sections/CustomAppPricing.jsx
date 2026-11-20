import { customAppPricingPlans } from "@/config/common";
import {
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const planDetails = [
  { key: "timeline", label: "Timeline", icon: HiOutlineClock },
  { key: "youGet", label: "You get", icon: HiOutlineDocumentText },
  { key: "bestFor", label: "Best for", icon: HiOutlineUserGroup },
];

const CustomAppPricing = () => {
  return (
    <>
      <Section id="custom-app-pricing" className="bg-grey/40 py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                How much does custom <br />
                <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                  software cost?
                </span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            subtitle="Custom software projects from £5,000. Staged payments. You own the code."
            subtitleClassName="text-text-body mt-[20px] text-[18px] leading-[28px] tracking-[-0.02em]"
          />

          <ul className="mt-[45px] grid grid-cols-3 gap-[30px]">
            {customAppPricingPlans.map((plan) => {
              const {
                id,
                name,
                badge,
                price,
                suffix,
                ctaLabel,
                ctaHref,
                featured,
              } = plan;

              return (
                <li
                  key={id}
                  className={`flex flex-col rounded-[20px] p-[15px] ${
                    featured ? "bg-black" : "bg-white"
                  }`}
                >
                  <div
                    className={`flex h-[260px] flex-col justify-between rounded-[15px] p-[30px] ${
                      featured
                        ? "bg-[linear-gradient(135deg,#FFFFFF_45%,var(--color-blue)_100%)]"
                        : "bg-grey/60"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-[10px]">
                      <h3 className="text-[25px] font-bold tracking-[-0.04em] text-black">
                        {name}
                      </h3>

                      {badge && (
                        <span className="bg-blue rounded-full px-[15px] py-[6px] text-[12px] font-bold tracking-[-0.02em] text-white">
                          {badge}
                        </span>
                      )}
                    </div>

                    <p className="text-[65px] leading-none font-extrabold tracking-[-0.06em] text-black">
                      {price}
                      {suffix && (
                        <span className="ml-[5px] text-[16px] font-medium tracking-[-0.02em]">
                          {suffix}
                        </span>
                      )}
                    </p>
                  </div>

                  <dl className="mt-[30px] flex flex-col gap-[20px] px-[15px]">
                    {planDetails.map(({ key, label, icon: Icon }) => (
                      <div
                        key={key}
                        className="grid grid-cols-[130px_1fr] items-start gap-[15px]"
                      >
                        <dt
                          className={`flex items-center gap-[10px] text-[16px] font-bold tracking-[-0.02em] ${
                            featured ? "text-white" : "text-black"
                          }`}
                        >
                          <Icon size={20} className="text-blue shrink-0" />
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

          <p className="text-text-body mt-[45px] text-center text-[18px] leading-[28px] tracking-[-0.02em]">
            UK software agencies typically charge £25,000 to £50,000 for a first
            release. Ours start from £5,000.
          </p>
        </Container>
      </Section>
    </>
  );
};

export default CustomAppPricing;
