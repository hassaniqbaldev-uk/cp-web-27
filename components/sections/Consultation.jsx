import { consultationBenefits } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const Consultation = () => {
  return (
    <>
      <Section
        id="consultation"
        className="relative overflow-hidden bg-[radial-gradient(117.98%_100%_at_76.32%_0%,rgba(0,0,0,0.6)_0%,#000000_45%)] py-[120px]"
      >
        <div className="absolute top-0 left-1/2 h-full w-full max-w-[1440px] -translate-x-1/2">
          <Starfield className="absolute right-0 bottom-[-50px] z-0 h-[200px] w-[770px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />
        </div>

        <Container className="relative z-10">
          <div className="flex items-center justify-between gap-[45px]">
            <div className="flex w-[650px] flex-col items-start">
              <SectionHeading
                label="Book your September slot"
                title={
                  <>
                    <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                      Got something
                    </span>{" "}
                    <br />
                    you need to build, <br />
                    fix or grow?
                  </>
                }
                subtitle="Tell us what you're trying to achieve and we'll help you figure out the best way forward."
                labelClassName="text-[22px] font-medium tracking-[-0.02em] text-white uppercase"
                titleClassName="text-[85px] mt-[10px] mb-[30px] leading-[85px] font-extrabold tracking-[-0.07em] text-white"
                subtitleClassName="text-[18px] text-white max-w-[380px] leading-[28px] tracking-[-0.02em]"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="mt-[45px] rounded-[60px] bg-white px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  Request a growth review
                </Button>
              </div>
            </div>

            <div className="gradient-border w-[450px] rounded-[20px] bg-white/20 p-[45px] backdrop-blur-[10px] [--gradient-border-image:linear-gradient(140.55deg,rgba(255,255,255,0)_7.24%,rgba(255,255,255,0.6)_47.59%,rgba(255,255,255,0)_76.61%)] [--gradient-border-width:1.24px]">
              <div className="flex items-center gap-[20px]">
                <Image
                  src="/images/home/hassan-avatar-img.png"
                  alt=""
                  width={96}
                  height={96}
                  className="size-[96px] shrink-0 rounded-full object-cover"
                />

                <div>
                  <p className="text-[35px] leading-[35px] font-bold tracking-[-0.07em] text-white">
                    15 minutes call
                  </p>

                  <p className="text-[18px] tracking-[-0.02em] text-white">
                    with Hassan
                  </p>

                  <p className="mt-[10px] flex items-center gap-[10px]">
                    <span className="size-[12px] shrink-0 animate-pulse rounded-full bg-[#6FDC8C]" />

                    <span className="text-[16px] tracking-[-0.02em] text-white">
                      Available this week
                    </span>
                  </p>
                </div>
              </div>

              <Button
                href="/contact"
                className="mt-[30px] w-full rounded-[60px] bg-white py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-black uppercase"
              >
                Book a call
              </Button>

              <div className="relative mt-[30px]">
                <ul className="grid grid-cols-2 gap-[30px]">
                  {consultationBenefits.map(
                    ({ id, icon: Icon, title, subtitle }) => (
                      <li key={id} className="flex items-center gap-[10px]">
                        <Icon
                          size={28}
                          strokeWidth={2}
                          className="shrink-0 text-white"
                        />

                        <div>
                          <p className="text-[18px] leading-[20px] font-bold tracking-[-0.02em] text-white">
                            {title}
                          </p>

                          <p className="text-[16px] tracking-[-0.02em] text-white">
                            {subtitle}
                          </p>
                        </div>
                      </li>
                    ),
                  )}
                </ul>

                <span className="pointer-events-none absolute inset-y-0 left-[170px] w-px bg-white/30" />

                <span className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/30" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Consultation;
