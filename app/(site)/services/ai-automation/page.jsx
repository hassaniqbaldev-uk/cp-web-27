import ServiceFooterCta from "@/components/layout/ServiceFooterCta";
import Footer from "@/components/layout/Footer";
import AiHero from "@/components/sections/AiHero";
import AiNeeds from "@/components/sections/AiNeeds";

const AiAutomation = () => {
  return (
    <>
      <AiHero />

      <AiNeeds />

      <Footer cta={<ServiceFooterCta />} />
    </>
  );
};

export default AiAutomation;
