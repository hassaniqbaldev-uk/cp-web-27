import { ecommercePlatformRows, ecommercePlatforms } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const EcommercePlatforms = () => {
  return (
    <>
      <Section
        id="ecommerce-platforms"
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
                <span className="text-[#95BF47]">Shopify</span> or{" "}
                <span className="text-[#9B5C8F]">WooCommerce:</span> <br />
                which is right for your store?
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <div className="mt-[55px] flex items-start justify-between">
            {/* Labels start level with the first row, below the headers. Each
                row repeats its label for screen readers, so these are hidden. */}
            <ul
              aria-hidden="true"
              className="mt-[91px] flex flex-col gap-[2px]"
            >
              {ecommercePlatformRows.map(({ id, label }) => (
                <li key={id} className="flex items-center">
                  <span className="flex h-[98px] w-[325px] items-center rounded-full bg-black px-[40px] text-[20px] font-bold tracking-[-0.02em] text-white">
                    {label}
                  </span>

                  <span className="ml-[-3px] h-[26px] w-[20px] bg-black [clip-path:polygon(0_0,100%_50%,0_100%)]" />
                </li>
              ))}
            </ul>

            {ecommercePlatforms.map(
              ({
                id,
                name,
                icon: Icon,
                iconClassName,
                headerClassName,
                buttonClassName,
                values,
                cta,
              }) => (
                <div
                  key={id}
                  className={`w-[411px] rounded-[20px] ${headerClassName}`}
                >
                  <div className="flex h-[91px] items-center gap-[12px] px-[15px]">
                    <span className="flex size-[64px] shrink-0 items-center justify-center rounded-full bg-white">
                      <Icon size={38} className={iconClassName} />
                    </span>

                    <h3 className="text-[35px] leading-[40px] font-bold tracking-[-0.06em] text-white">
                      {name}
                    </h3>
                  </div>

                  <div className="rounded-[20px] bg-white px-[20px] pb-[35px]">
                    <dl>
                      {ecommercePlatformRows.map(({ id: rowId, label }) => (
                        <div
                          key={rowId}
                          className="flex h-[100px] items-center border-b border-black/15 px-[21px] last:border-b-0"
                        >
                          <dt className="sr-only">{label}</dt>

                          <dd className="text-[16px] leading-[21px] tracking-[-0.02em] text-black">
                            {values[rowId]}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="flex px-[21px]">
                      <Button
                        href={cta.href}
                        className={`w-full rounded-full px-[20px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-white uppercase ${buttonClassName}`}
                      >
                        {cta.label}
                      </Button>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default EcommercePlatforms;
