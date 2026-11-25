import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const ShopifyMigration = () => {
  return (
    <>
      <Section id="shopify-migration" className="py-[120px]">
        <Container>
          <div className="bg-blue flex min-h-[426px] items-center justify-between rounded-[20px] pr-[47px] pl-[60px]">
            <div className="flex flex-col items-start">
              <SectionHeading
                title={
                  <>
                    Migrating to Shopify <br />
                    or stuck with a theme <br />
                    that fights the range? <br />
                    Send us the store URL.
                  </>
                }
                titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-white"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="mt-[40px] rounded-full bg-white px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  Get a migration quote
                </Button>
              </div>
            </div>

            <Image
              src="/images/services/browsers-shopify-migration.png"
              alt="A limited theme moving to a new Shopify store"
              width={616}
              height={347}
              className="h-auto w-[616px] shrink-0"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ShopifyMigration;
