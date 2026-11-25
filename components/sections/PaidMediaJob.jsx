import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const PaidMediaJob = () => {
  return (
    <>
      <Section id="paid-media-job" className="pb-[120px]">
        <Container>
          <div className="bg-blue flex h-[403px] items-center justify-between rounded-[20px] bg-[radial-gradient(32%_85%_at_71%_42%,#94B9FF_0%,rgba(148,185,255,0.75)_40%,rgba(148,185,255,0)_100%)] pr-[124px] pl-[70px]">
            <SectionHeading
              title={
                <>
                  The ad is only <br />
                  half the job.
                </>
              }
              titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-white"
              subtitle="A well-managed account can still lose money if the page it sends people to was built for something else. We plan the campaign and the landing page together and measure what the business cares about: qualified leads, sales or revenue."
              subtitleClassName="mt-[20px] max-w-[535px] text-[22px] leading-[33px] tracking-[-0.02em] text-white"
            />

            {/* Taller than the panel, so it pokes out above and below. */}
            <Image
              src="/images/services/ad-paid-media-job.png"
              alt="3D ad badge with a pound coin"
              width={427}
              height={439}
              className="h-auto w-[427px] shrink-0"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PaidMediaJob;
