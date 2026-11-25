import { paidMediaWaste } from "@/config/common";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaMeta } from "react-icons/fa6";
import { FcComboChart, FcDoughnutChart, FcGoogle } from "react-icons/fc";
import {
  HiChartBar,
  HiCurrencyEuro,
  HiFolder,
  HiWindow,
} from "react-icons/hi2";
import { SiGoogleanalytics } from "react-icons/si";
import { Container } from "../ui/Container";
import GoogleAdsLogo from "../ui/GoogleAdsLogo";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const icons = {
  google: { icon: FcGoogle },
  searchConsole: { icon: FcComboChart },
  meta: { icon: FaMeta, className: "text-[#0081FB]" },
  instagram: { icon: FaInstagram, className: "text-[#E1306C]" },
  linkedin: { icon: FaLinkedin, className: "text-[#0A66C2]" },
  folder: { icon: HiFolder, className: "text-orange" },
  page: { icon: HiWindow, className: "text-blue" },
  googleAds: { icon: GoogleAdsLogo },
  campaign: { icon: FcDoughnutChart },
  analytics: { icon: SiGoogleanalytics, className: "text-[#F9AB00]" },
  chart: { icon: HiChartBar, className: "text-dark-pink" },
  budget: { icon: HiCurrencyEuro, className: "text-blue" },
};

const PaidMediaWaste = () => {
  return (
    <>
      <Section
        id="paid-media-waste"
        className="relative overflow-hidden py-[120px]"
      >
        <Image
          src="/images/services/gradient-bg-web-design-case-studies.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10">
          <SectionHeading
            className="text-center"
            title={
              <>
                What wastes your ad spend, <br />
                <span className="text-black/50">and how we prevent it.</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <ul className="mt-[65px] grid grid-cols-3 gap-[30px]">
            {paidMediaWaste.map(({ id, icons: names, title, description }) => (
              <li
                key={id}
                className="flex min-h-[311px] flex-col items-start rounded-[20px] bg-white p-[30px] pt-[40px]"
              >
                <div className="flex gap-[11px]">
                  {names.map((name) => {
                    const { icon: Icon, className = "" } = icons[name];

                    return (
                      <span
                        key={name}
                        className="bg-grey/50 flex size-[59px] items-center justify-center rounded-full"
                      >
                        <Icon size={32} className={className} />
                      </span>
                    );
                  })}
                </div>

                <h3 className="mt-[40px] text-[35px] leading-[42px] font-bold tracking-[-0.06em] whitespace-nowrap text-black">
                  {title}
                </h3>

                <p className="text-text-body mt-[14px] text-[16px] leading-[23px] tracking-[-0.02em]">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default PaidMediaWaste;
