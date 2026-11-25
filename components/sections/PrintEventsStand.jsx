import { printEventsStand } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const PrintEventsStand = () => {
  return (
    <>
      <Section
        id="print-events-stand"
        className="relative overflow-hidden bg-[#0A0616] pt-[120px] pb-[95px]"
      >
        <Image
          src="/images/services/gradient-bg-web-design-platforms.png"
          alt=""
          width={1920}
          height={663}
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 -translate-x-1/2"
        />

        <Container className="relative z-10">
          <SectionHeading
            className="text-center"
            title={
              <>
                A stand that looks like <br />
                <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                  the website.
                </span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-white"
            subtitle={
              <>
                Exhibitions are where people meet the brand in person, usually
                next to competitors. We design the whole set as <br />
                one piece: backdrop, banners, literature, badges and the
                follow-up email people receive when they get home.
              </>
            }
            subtitleClassName="mt-[25px] text-[22px] leading-[33px] tracking-[-0.02em] text-white"
          />

          <dl className="mt-[95px] flex flex-col gap-[2px]">
            {printEventsStand.map(({ id, title, description }) => (
              <div key={id} className="flex h-[102px]">
                <dt className="flex w-[505px] shrink-0 items-center rounded-full bg-[#262626] px-[41px] text-[25px] leading-[30px] font-bold tracking-[-0.06em] text-white">
                  {title}
                </dt>

                <dd className="flex flex-1 items-center rounded-full bg-[#363636] px-[41px] text-[16px] leading-[24px] tracking-[-0.02em] text-white">
                  {description}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
    </>
  );
};

export default PrintEventsStand;
