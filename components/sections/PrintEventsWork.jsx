import { printEventsWork } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const PrintEventsWork = () => {
  return (
    <>
      <Section id="print-events-work" className="py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                <span className="text-dark-pink">Print</span> we’ve designed
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <ul className="mt-[62px] grid grid-cols-2 items-start gap-x-[30px] gap-y-[45px]">
            {printEventsWork.map(
              ({ id, image, imageAlt, tag, title, growth, period, cta }) => (
                <li key={id} className="even:mt-[30px]">
                  <div className="bg-grey/60 relative h-[484px] overflow-hidden rounded-[20px]">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes="585px"
                      className="object-cover"
                    />

                    <span className="absolute bottom-[20px] left-[20px] rounded-full bg-white/25 px-[18px] py-[8px] text-[16px] leading-[26px] tracking-[-0.02em] text-white backdrop-blur-[20px]">
                      {tag}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-[20px] px-[20px] pt-[22px]">
                    <div>
                      <h3 className="text-[35px] leading-[42px] font-bold tracking-[-0.06em] whitespace-nowrap text-black">
                        {title}
                      </h3>

                      <p className="text-text-body mt-[4px] text-[16px] leading-[24px] tracking-[-0.02em]">
                        <span className="font-bold text-[#22C05B]">
                          {growth}
                        </span>{" "}
                        {period}
                      </p>
                    </div>

                    <Button
                      href={cta.href}
                      className="bg-grey/80 shrink-0 rounded-full px-[24px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase [&:active]:bg-black! [&:hover]:bg-black!"
                    >
                      {cta.label}
                    </Button>
                  </div>
                </li>
              ),
            )}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default PrintEventsWork;
