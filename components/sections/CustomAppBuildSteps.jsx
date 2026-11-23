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
    <span className="pointer-events-none absolute top-[45px] left-full h-[60px] w-[410px] rounded-tr-[20px] border-t border-r border-black">
      <span className={`${arrowHeadClassName} -right-[5px]`} />
    </span>
  ) : (
    <span className="pointer-events-none absolute top-[210px] right-full h-[55px] w-[400px] rounded-tl-[20px] border-t border-l border-black">
      <span className={`${arrowHeadClassName} -left-[5px]`} />
    </span>
  );

const CustomAppBuildSteps = () => {
  return (
    <>
      <Section
        id="custom-app-build-steps"
        className="relative overflow-hidden py-[120px]"
      >
        <Image
          src="/images/services/gradient-bg-custom-app-build-steps.png"
          alt=""
          fill
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10">
          <SectionHeading
            className="text-center"
            title={
              <>
                How we build your <br />
                first release
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <ol className="mt-[55px] grid grid-cols-2 gap-x-[100px]">
            {customAppBuildSteps.map(
              ({ id, week, title, description, pillClassName }, index) => {
                const isLeft = index % 2 === 0;
                const isLast = index === customAppBuildSteps.length - 1;

                return (
                  <li
                    key={id}
                    className={`relative flex h-[270px] items-stretch gap-[40px] rounded-[20px] bg-white p-[20px] pr-[40px] shadow-[16px_16px_124px_0px_#00000021] ${
                      isLeft ? "" : "mt-[110px]"
                    }`}
                  >
                    <span
                      className={`flex w-[70px] shrink-0 items-center justify-center rounded-full ${pillClassName}`}
                    >
                      <span className="rotate-180 text-[35px] font-bold tracking-[-0.07em] whitespace-nowrap text-white [writing-mode:vertical-rl]">
                        {week}
                      </span>
                    </span>

                    <div className="flex flex-col justify-center">
                      <HiOutlineChatBubbleBottomCenterText
                        size={45}
                        className="shrink-0 text-black"
                      />

                      <h3 className="mt-[40px] text-[25px] font-bold tracking-[-0.07em] text-black">
                        {title}
                      </h3>

                      <p className="mt-[13px] text-[16px] leading-[24px] tracking-[-0.02em] text-black">
                        {description}
                      </p>
                    </div>

                    {!isLast && <Connector toRight={isLeft} />}
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
