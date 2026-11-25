import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const PaidMediaCheck = () => {
  return (
    <>
      <Section id="paid-media-check" className="py-[120px]">
        <Container>
          <div className="bg-dark-pink relative flex min-h-[423px] items-center justify-between overflow-hidden rounded-[30px] pr-[55px] pl-[70px]">
            <Starfield className="absolute right-[0px] bottom-[-70px] z-0 h-[280px] w-[700px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

            <div className="relative z-10 flex flex-col items-start">
              <SectionHeading
                title={
                  <>
                    Running ads to a <br />
                    homepage?
                  </>
                }
                titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-white"
                subtitle={
                  <>
                    Send us the account and the page <br />
                    and we will show you the mismatch.
                  </>
                }
                subtitleClassName="mt-[20px] text-[22px] leading-[33px] tracking-[-0.02em] whitespace-nowrap text-white"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="mt-[62px] rounded-full bg-white px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-black uppercase [&:active]:bg-black! [&:hover]:bg-black!"
                >
                  Show us the campaign and page
                </Button>
              </div>
            </div>

            <Image
              src="/images/services/mismatch-paid-media-check.png"
              alt="An ad and a homepage that don’t match on visuals or message"
              width={646}
              height={309}
              className="relative z-10 h-auto w-[646px] shrink-0"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PaidMediaCheck;
