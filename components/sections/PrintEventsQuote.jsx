import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const PrintEventsQuote = () => {
  return (
    <>
      <Section id="print-events-quote" className="pb-[120px]">
        <Container>
          <div className="bg-blue flex h-[372px] items-center justify-between overflow-hidden rounded-[30px] pr-[42px] pl-[60px]">
            <div className="flex flex-col items-start">
              <SectionHeading
                title={
                  <>
                    Send us the piece, sizes and <br />
                    deadline. We’ll confirm the cost <br />
                    and what we need from you.
                  </>
                }
                titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-white"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="mt-[45px] rounded-full bg-white px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  Tell us what you need printed
                </Button>
              </div>
            </div>

            <Image
              src="/images/services/pound-print-events-quote.png"
              alt=""
              width={447}
              height={373}
              className="h-[373px] w-[447px] shrink-0 object-contain"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PrintEventsQuote;
