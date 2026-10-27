import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import BookCallButton from "../ui/BookCallButton";
import Image from "next/image";

const BlackFridayCta = () => {
  return (
    <Section
      id="black-friday-cta"
      className="relative py-[120px] max-sm:py-[60px]"
    >
      <Container className="relative z-10 max-xl:px-[40px] max-sm:px-[20px]">
        <div className="flex items-center justify-between gap-[60px] max-xl:flex-col max-xl:gap-[40px]">
          <div className="w-[430px] shrink-0 max-xl:w-full max-xl:text-center">
            <h2 className="text-[75px] leading-[80px] font-extrabold tracking-[-0.07em] text-white max-sm:text-[36px] max-sm:leading-[38px]">
              Try us on one
              <br />
              <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                small job.
              </span>
            </h2>

            <p className="mt-[20px] max-w-[380px] text-[18px] leading-[30px] tracking-[-0.02em] text-[#E4E4E4] max-xl:mx-auto max-sm:max-w-full max-sm:text-[14px] max-sm:leading-[20px]">
              Flexible milestones and a 3-month guarantee. Black Friday: 25%
              off, 10 spots only.
            </p>

            <div className="mt-[30px] flex w-full flex-col gap-[20px]">
              <Button
                href="#black-friday-hero"
                className="w-full justify-center rounded-full bg-white px-[24px] py-[14px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase max-sm:text-[15px]"
              >
                Send us a small job
              </Button>

              <BookCallButton className="w-full rounded-full border border-white/40 px-[24px] py-[14px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:text-[15px]">
                Book a 15 min call
              </BookCallButton>
            </div>
          </div>

          <div className="gradient-border relative w-[540px] shrink-0 rounded-[20px] bg-white/20 p-[50px] backdrop-blur-[10px] [--gradient-border-image:linear-gradient(140.55deg,rgba(255,255,255,0)_7.24%,rgba(255,255,255,0.6)_47.59%,rgba(255,255,255,0)_76.61%)] [--gradient-border-width:1.24px] max-xl:w-full max-sm:flex max-sm:items-center max-sm:gap-[20px] max-sm:p-[25px]">
            <Image
              src="/images/black-friday/hassan-avatar.png"
              alt="Hassan Iqbal, founder of Creative Pixels"
              width={115}
              height={115}
              className="size-[115px] rounded-full object-cover max-sm:size-[64px] max-sm:shrink-0"
            />

            <div>
              <p className="mt-[28px] text-[25px] leading-[35px] text-[#E2E2E2] max-sm:mt-0 max-sm:text-[14px] max-sm:leading-[20px]">
                “I’ll look at your first job myself and reply within 1 working
                day.”
              </p>

              <p className="mt-[30px] text-[18px] text-white max-sm:mt-[8px] max-sm:text-[13px]">
                Hassan Iqbal, Founder
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BlackFridayCta;
