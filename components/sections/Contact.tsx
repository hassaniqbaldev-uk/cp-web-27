import { contactLinks } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ContactForm from "../ui/ContactForm";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const Contact = () => {
  return (
    <>
      <Section id="contact" className="py-md bg-orange/10 overflow-hidden">
        <Container>
          <div className="gap-lg flex items-center justify-between">
            <div className="w-[48.2rem]">
              <SectionHeading
                label="Contact details"
                title={
                  <>
                    What can we <span className="text-orange">help with?</span>
                  </>
                }
                subtitle="Got questions or ready to start your design project? Let's bring your ideas to life!"
                labelClassName="text-body-01 font-medium tracking-[-0.02em] text-black uppercase"
                titleClassName="text-heading-02 mt-xs leading-[8rem] font-extrabold tracking-[-0.07em] text-black"
                subtitleClassName="text-body-02 text-text-body mt-sm max-w-[45rem] leading-[2.8rem] tracking-[-0.02em]"
              />

              <ul className="mt-2xl flex flex-col">
                {contactLinks.map(({ id, icon: Icon, label, href }) => (
                  <li key={id}>
                    <Link
                      href={href}
                      className="gap-sm py-sm border-text-body/20 flex items-center justify-between border-b"
                    >
                      <span className="gap-sm flex items-center">
                        <Icon
                          aria-hidden="true"
                          size={30}
                          strokeWidth={2}
                          className="shrink-0 text-black"
                        />

                        <span className="text-subheading-02 font-medium tracking-[-0.06em] text-black">
                          {label}
                        </span>
                      </span>

                      <ArrowUpRight
                        aria-hidden="true"
                        size={25}
                        strokeWidth={2.5}
                        className="shrink-0 text-black"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative w-[58.5rem]">
              {/* A panel of its own behind the form rather than a background on
                  it, so it can reach past the column. The right offset is the
                  container's own gutter, cancelled, which lands the edge exactly
                  on the viewport; max() keeps it at zero once the viewport is
                  narrower than the container. */}
              <span
                aria-hidden="true"
                className="-left-lg absolute top-1/2 right-[calc(-1*max(0px,(100vw-120rem)/2))] h-full -translate-y-1/2 rounded-l-md bg-white"
              />

              <div className="relative py-[8rem]">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
