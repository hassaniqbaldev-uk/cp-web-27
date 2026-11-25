import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const ShopifyNative = () => {
  return (
    <>
      <Section id="shopify-native" className="py-[120px]">
        <Container>
          <div className="flex min-h-[429px] items-end justify-between rounded-[30px] bg-[linear-gradient(90deg,#95BF47_39.57%,#DAEFB3_105.92%)] pr-[87px] pl-[56px]">
            <div className="flex flex-col items-start self-center">
              <SectionHeading
                title={
                  <>
                    Native first, apps where <br />
                    they earn their place.
                  </>
                }
                titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-white"
                subtitle="Shopify does a lot on its own. We build the theme to carry the range, use native features where they exist, and name every app in the scope with the reason for it, so you know what the store costs to run before you commit. Fewer apps means a faster store and a smaller monthly bill."
                subtitleClassName="mt-[18px] max-w-[500px] text-[18px] leading-[23px] tracking-[-0.02em] text-white"
              />

              <div className="flex">
                <Button
                  href="#shopify-pricing"
                  className="mt-[30px] rounded-full bg-white px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  See what a store costs to run
                </Button>
              </div>
            </div>

            {/* Pokes out above the panel. */}
            <Image
              src="/images/services/phone-shopify-native.png"
              alt="Shopify new order notification on a phone"
              width={464}
              height={449}
              className="mt-[-20px] h-auto w-[464px] shrink-0"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ShopifyNative;
