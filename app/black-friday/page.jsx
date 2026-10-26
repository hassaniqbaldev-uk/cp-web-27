import BlackFridayHero from "@/components/sections/BlackFridayHero";
import BlackFridayFounder from "@/components/sections/BlackFridayFounder";
import BlackFridayObjections from "@/components/sections/BlackFridayObjections";
import BlackFridayCompare from "@/components/sections/BlackFridayCompare";
import BlackFridayPricing from "@/components/sections/BlackFridayPricing";
import BlackFridayProcess from "@/components/sections/BlackFridayProcess";
import BlackFridayWork from "@/components/sections/BlackFridayWork";
import BlackFridayReference from "@/components/sections/BlackFridayReference";
import BlackFridayFaqs from "@/components/sections/BlackFridayFaqs";
import BlackFridayCta from "@/components/sections/BlackFridayCta";
import BlackFridayFooter from "@/components/layout/BlackFridayFooter";
import Image from "next/image";

const BlackFriday = () => {
  return (
    <main>
      <BlackFridayHero />
      <BlackFridayFounder />
      <BlackFridayObjections />
      <BlackFridayCompare />
      <BlackFridayPricing />
      <BlackFridayProcess />
      <BlackFridayWork />
      <BlackFridayReference />
      <BlackFridayFaqs />

      <div className="relative overflow-hidden bg-black">
        <Image
          src="/images/black-friday/footer-gradient-bg.png"
          alt=""
          width={1440}
          height={758}
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-full -translate-x-1/2"
        />

        <div className="relative z-10">
          <BlackFridayCta />
          <BlackFridayFooter />
        </div>
      </div>
    </main>
  );
};

export default BlackFriday;
