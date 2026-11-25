import { ecommerceNeeds } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const NeedCard = ({ icon: Icon, title, description, cta, className = "" }) => (
  <div
    className={`bg-grey/40 relative z-10 flex min-h-[364px] w-[380px] shrink-0 flex-col items-start rounded-[20px] p-[30px] ${className}`}
  >
    <span className="flex size-[64px] shrink-0 items-center justify-center rounded-full bg-white text-black">
      <Icon size={34} />
    </span>

    <h3 className="mt-[35px] text-[25px] leading-[30px] font-bold tracking-[-0.06em] text-black">
      {title}
    </h3>

    <p className="text-text-body mt-[15px] mb-[25px] text-[18px] leading-[24px] tracking-[-0.02em]">
      {description}
    </p>

    <div className="mt-auto flex w-full">
      <Button
        href={cta.href}
        className="w-full rounded-full bg-black px-[20px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-white uppercase"
      >
        {cta.label}
      </Button>
    </div>
  </div>
);

const EcommerceNeeds = () => {
  const [rebuild, migration] = ecommerceNeeds;

  return (
    <>
      <Section id="ecommerce-needs" className="pt-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                New store, rebuild or migration: <br />
                <span className="text-black/50">what do you need?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            subtitle={
              <>
                A store is judged on the checkout, not the homepage. Most stores
                we see look fine on the homepage and lose <br />
                orders on the product page, the basket and the checkout on a
                phone. So we design the whole route to the sale.
              </>
            }
            subtitleClassName="text-text-body mt-[25px] text-[18px] leading-[24px] tracking-[-0.02em]"
          />

          <div className="mt-[70px] flex items-start justify-between">
            <NeedCard {...rebuild} />

            {/* The image and its fade share one grid cell. */}
            <div className="mx-[-44px] mt-[6px] grid w-[527px] shrink-0">
              <Image
                src="/images/services/phone-ecommerce-needs.png"
                alt="Footcare online store on a phone"
                width={527}
                height={565}
                className="col-start-1 row-start-1 h-auto w-[527px]"
              />

              <span className="pointer-events-none col-start-1 row-start-1 h-[183px] w-[500px] self-end justify-self-center bg-[linear-gradient(to_top,#FFFFFF_0%,rgba(255,255,255,0)_100%)]" />
            </div>

            <NeedCard {...migration} className="mt-[115px]" />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default EcommerceNeeds;
