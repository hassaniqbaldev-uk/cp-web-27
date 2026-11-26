import { customAppBuildSteps } from "@/config/common";
import Image from "next/image";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const arrowHeadClassName =
  "absolute -bottom-[6px] size-[9px] bg-black [clip-path:polygon(0_0,100%_0,50%_100%)]";

// L-shaped line from one card into the top of the next one. Left-column cards
// connect to the right, right-column cards connect back to the left.
const Connector = ({ toRight }) =>
  toRight ? (
    <span className="pointer-events-none absolute top-[45px] left-full h-[60px] w-[410px] rounded-tr-[20px] border-t border-r border-black max-sm:hidden">
      <span className={`${arrowHeadClassName} -right-[5px]`} />
    </span>
  ) : (
    <span className="pointer-events-none absolute top-[210px] right-full h-[55px] w-[400px] rounded-tl-[20px] border-t border-l border-black max-sm:hidden">
      <span className={`${arrowHeadClassName} -left-[5px]`} />
    </span>
  );

// Phones: a straight line from one card down into the next.
const PhoneConnector = () => (
  <span className="pointer-events-none absolute top-full left-1/2 hidden h-[34px] w-px bg-black max-sm:block">
    <span className={`${arrowHeadClassName} -left-[4px]`} />
  </span>
);

const CustomAppBuildSteps = () => {
  return (
    <>
      <Section
        id="custom-app-build-steps"
        className="relative overflow-hidden py-[120px] max-sm:py-[80px]"
      >
        <Image
          src="/images/services/gradient-bg-custom-app-build-steps.png"
          alt=""
          fill
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10 max-sm:px-[20px]">
          <SectionHeading
            className="text-center"
            title={
              <>
                How we build your <br />
                first release
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[36px] max-sm:leading-[38px]"
          />

          <ol className="mt-[55px] grid grid-cols-2 gap-x-[100px] max-sm:mt-[30px] max-sm:grid-cols-1 max-sm:gap-y-[40px]">
            {customAppBuildSteps.map(
              ({ id, week, title, description, pillClassName }, index) => {
                const isLeft = index % 2 === 0;
                const isLast = index === customAppBuildSteps.length - 1;

                return (
                  <li
                    key={id}
                    className={`relative flex h-[270px] items-stretch gap-[40px] rounded-[20px] bg-white p-[20px] pr-[40px] shadow-[16px_16px_124px_0px_#00000021] max-sm:h-auto max-sm:gap-[18px] max-sm:p-[14px] max-sm:pr-[20px] ${
                      isLeft ? "" : "mt-[110px] max-sm:mt-0"
                    }`}
                  >
                    <span
                      className={`flex w-[70px] shrink-0 items-center justify-center rounded-full max-sm:w-[52px] ${pillClassName}`}
                    >
                      <span className="rotate-180 text-[35px] font-bold tracking-[-0.07em] whitespace-nowrap text-white [writing-mode:vertical-rl] max-sm:text-[24px]">
                        {week}
                      </span>
                    </span>

                    <div className="flex flex-col justify-center max-sm:py-[10px]">
                      <HiOutlineChatBubbleBottomCenterText
                        size={45}
                        className="shrink-0 text-black max-sm:size-[34px]"
                      />

                      <h3 className="mt-[40px] text-[25px] font-bold tracking-[-0.07em] text-black max-sm:mt-[16px] max-sm:text-[22px] max-sm:leading-[26px]">
                        {title}
                      </h3>

                      <p className="mt-[13px] text-[16px] leading-[24px] tracking-[-0.02em] text-black max-sm:mt-[8px] max-sm:text-[15px] max-sm:leading-[22px]">
                        {description}
                      </p>
                    </div>

                    {!isLast && <Connector toRight={isLeft} />}
                    {!isLast && <PhoneConnector />}
                  </li>
                );
              },
            )}
          </ol>
        </Container>
      </Section>
    </>
  );
};

export default CustomAppBuildSteps;
