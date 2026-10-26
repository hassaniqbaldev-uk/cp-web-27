import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Starfield from "../ui/Starfield";

const BlackFridayReference = () => {
  return (
    <Section
      id="black-friday-reference"
      className="relative overflow-hidden bg-black py-[120px]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 mx-auto max-w-[1440px]">
        <div className="absolute inset-0 bg-[radial-gradient(117.98%_81.75%_at_76.32%_0%,rgba(0,0,0,0.6)_0%,#000000_45%)]" />

        <Starfield className="absolute right-0 bottom-0 h-[200px] w-[774px]" />
      </div>

      <Container className="relative z-10">
        <div className="flex items-center justify-between gap-[60px]">
          <div className="w-[430px] shrink-0">
            <h2 className="text-[52px] leading-[64px] font-extrabold tracking-[-0.07em] text-white">
              Agencies who’d
              <br />
              <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                work with us again.
              </span>
            </h2>

            <p className="mt-[11px] text-[18px] tracking-[-0.02em] text-white">
              Most of our work is under NDA. Ask, and we’ll put you in touch
              with UK and US agencies who’ll vouch for us.
            </p>

            <Button
              href="/contact"
              className="mt-[87px] rounded-full bg-white px-[24px] py-[14px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
            >
              Ask for a reference
            </Button>
          </div>

          <div className="gradient-border relative w-[520px] shrink-0 rounded-[20px] bg-white/20 p-[40px] backdrop-blur-[10px] [--gradient-border-image:linear-gradient(140.55deg,rgba(255,255,255,0)_7.24%,rgba(255,255,255,0.6)_47.59%,rgba(255,255,255,0)_76.61%)] [--gradient-border-width:1.24px]">
            <p className="text-orange text-[18px] font-semibold tracking-[-0.02em] uppercase">
              Partner story
            </p>

            <h3 className="mt-[7px] text-[35px] font-bold tracking-[-0.07em] text-white">
              [UK agency, North West]
            </h3>

            <p className="mt-[28px] text-[25px] leading-[35px] text-[#E2E2E2]">
              Hassan and the CP team have been our behind-the-scenes dev team
              for years. The work comes back right first time, and our clients
              have no idea they exist. That’s exactly what we need.
            </p>

            <p className="mt-[30px] text-[16px] text-white">
              David Martin, BK Agency
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BlackFridayReference;
