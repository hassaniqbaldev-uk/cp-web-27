import { croCaseStudyStats } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CircularTextButton from "../ui/CircularTextButton";
import Starfield from "../ui/Starfield";
import CaseStudy from "./CaseStudy";

const labelClassName =
  "bg-blue absolute z-10 rounded-[60px] px-[22px] py-[9px] text-[16px] leading-[24px] font-bold tracking-[-0.02em] text-white uppercase";

const phoneClassName = "h-auto w-[187px]";

const CroCaseStudy = () => {
  return (
    <div id="cro-case-study">
      {/* Home page mockup on white; its base fades into the dark section. */}
      <div className="relative flex justify-center overflow-hidden bg-white">
        <Image
          src="/images/home/smokey-carter-who-we-help-img.png"
          alt="Smokey Carter website on a laptop"
          width={1920}
          height={722}
          className="h-auto w-[1920px] max-w-none shrink-0"
        />

        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[45px] bg-[linear-gradient(to_bottom,rgba(13,11,16,0)_0%,#0D0B10_100%)]" />

        <div className="absolute top-[100px] left-1/2 ml-[430px]">
          <CircularTextButton
            href="/work/smokey-carter"
            image="/images/services/circular-text-live-site-ui-ux-process.png"
            imageWidth={130}
            imageHeight={130}
            className="size-[130px]"
            ringClassName="h-auto w-full invert"
          >
            <ArrowUpRight size={30} strokeWidth={2.5} className="text-black" />
          </CircularTextButton>
        </div>
      </div>

      <CaseStudy
        className="relative overflow-hidden bg-[#0D0B10] bg-[radial-gradient(90%_60%_at_50%_100%,#77757A_0%,rgba(119,117,122,0)_100%)] pt-[60px] pb-[190px]"
        background={
          <Starfield className="absolute bottom-[-50px] left-1/2 z-0 h-[260px] w-[1100px] -translate-x-1/2 mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />
        }
        stats={croCaseStudyStats}
        media={
          <div className="flex w-[585px] shrink-0 justify-center gap-[62px]">
            <div className="relative">
              <span className={`top-[40px] left-[-70px] ${labelClassName}`}>
                Before
              </span>

              <Image
                src="/images/services/phone-before-cro-case-study.png"
                alt="Product page on a phone before the changes"
                width={187}
                height={406}
                className={phoneClassName}
              />
            </div>

            <div className="relative">
              <Image
                src="/images/services/phone-after-cro-case-study.png"
                alt="Product page on a phone after the changes"
                width={187}
                height={406}
                className={phoneClassName}
              />

              <span className={`right-[-70px] bottom-[35px] ${labelClassName}`}>
                After
              </span>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default CroCaseStudy;
