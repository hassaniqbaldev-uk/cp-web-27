import Button from "../ui/Button";
import { Container } from "../ui/Container";
import PlatformQuiz from "../ui/PlatformQuiz";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const EcommerceQuiz = () => {
  return (
    <>
      <Section id="ecommerce-quiz" className="pt-[120px] pb-[180px]">
        <Container>
          <div className="bg-orange relative flex items-start justify-between overflow-hidden rounded-[30px] py-[30px] pr-[30px] pl-[60px]">
            <Starfield className="absolute bottom-[-30px] left-[0px] z-0 h-[147px] w-[508px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

            <div className="relative z-10 flex w-[400px] flex-col items-start pt-[30px]">
              <SectionHeading
                title={
                  <>
                    Not sure which <br />
                    platform fits?
                  </>
                }
                titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] text-white"
                subtitle="Answer 4 quick questions and we’ll point you in the right direction."
                subtitleClassName="mt-[20px] max-w-[350px] text-[22px] leading-[33px] tracking-[-0.02em] text-white"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="mt-[40px] rounded-full bg-white px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-black uppercase"
                >
                  Show us the campaign and page
                </Button>
              </div>
            </div>

            <div className="relative z-10 w-[637px] rounded-[25px] bg-white p-[25px]">
              <PlatformQuiz />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default EcommerceQuiz;
