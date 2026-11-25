import { woocommerceChecks } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import ProductCheckForm from "../ui/ProductCheckForm";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WoocommerceCheck = () => {
  return (
    <>
      <Section id="woocommerce-check" className="py-[120px]">
        <Container>
          <div className="bg-orange rounded-[30px] px-[57px] py-[52px]">
            <div className="flex items-start justify-between">
              <SectionHeading
                className="pt-[42px]"
                title={
                  <>
                    Show us your hardest <br />
                    product to sell.
                  </>
                }
                titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-white"
                subtitle="Send us your store URL and tell us which product is hardest to sell online. We’ll show you what we’d build to make it work."
                subtitleClassName="mt-[20px] max-w-[430px] text-[22px] leading-[33px] tracking-[-0.02em] text-white"
              />

              <div className="flex items-start">
                <Image
                  src="/images/services/browser-woocommerce-check.png"
                  alt="Example made-to-measure product page in a browser"
                  width={362}
                  height={303}
                  className="h-[303px] w-[362px] shrink-0 object-contain"
                />

                <ul className="flex flex-col gap-[29px] pt-[61px]">
                  {woocommerceChecks.map(
                    ({ id, icon: Icon, iconClassName, title }) => (
                      <li key={id} className="flex items-center">
                        <span className="w-[47px] border-t border-dashed border-white" />

                        <span className="z-10 mr-[-4px] ml-[-4px] size-[8px] shrink-0 rounded-full bg-white" />

                        <div className="flex h-[76px] w-[192px] items-center gap-[13px] rounded-[15px] bg-white px-[14px]">
                          <span
                            className={`flex size-[48px] shrink-0 items-center justify-center rounded-full text-white ${iconClassName}`}
                          >
                            <Icon size={22} />
                          </span>

                          <span className="text-[14px] leading-[17px] font-medium tracking-[-0.02em] whitespace-pre-line text-black">
                            {title}
                          </span>
                        </div>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            <div className="mt-[41px]">
              <ProductCheckForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WoocommerceCheck;
