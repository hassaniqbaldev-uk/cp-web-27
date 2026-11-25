import { woocommerceFit } from "@/config/common";
import Link from "next/link";
import { LuCircleCheckBig } from "react-icons/lu";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WoocommerceFit = () => {
  return (
    <>
      <Section
        id="woocommerce-fit"
        className="bg-grey/40 overflow-hidden py-[120px]"
      >
        <Container>
          <SectionHeading
            className="text-center"
            title="WooCommerce, or shopify"
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <ul className="mt-[60px] grid grid-cols-2 gap-[30px]">
            {woocommerceFit.map(
              ({ id, icon: Icon, title, points, dark, showNote }) => (
                <li
                  key={id}
                  className={`flex min-h-[489px] flex-col items-start rounded-[30px] p-[45px] shadow-[16px_16px_150px_0px_#0000003B] first:z-10 ${
                    dark ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  <Icon size={56} className="ml-[-4px] shrink-0" />

                  <h3 className="mt-[38px] text-[35px] leading-[42px] font-bold tracking-[-0.06em]">
                    {title}
                  </h3>

                  <ul className="mt-[25px] flex flex-col gap-[18px]">
                    {points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-[12px] text-[18px] leading-[25px] font-medium tracking-[-0.02em]"
                      >
                        <LuCircleCheckBig
                          size={20}
                          className="text-blue mt-[2px] shrink-0"
                        />

                        {point}
                      </li>
                    ))}
                  </ul>

                  {showNote && (
                    <p className="mt-[40px] w-full rounded-full bg-white/35 px-[20px] py-[12px] text-[14px] leading-[21px] tracking-[-0.02em] whitespace-nowrap">
                      We build both. See{" "}
                      <Link
                        href="/services/shopify"
                        className="text-[#34D17B] hover:underline"
                      >
                        Shopify
                      </Link>{" "}
                      or the comparison on the{" "}
                      <Link
                        href="/services/ecommerce#ecommerce-platforms"
                        className="text-orange hover:underline"
                      >
                        Ecommerce
                      </Link>{" "}
                      page.
                    </p>
                  )}
                </li>
              ),
            )}
          </ul>

          <div className="mt-[50px] flex justify-center">
            <Button
              href="/contact"
              className="w-[494px] rounded-full bg-black px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
            >
              Talk through your store
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WoocommerceFit;
