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
      <Section id="contact" className="bg-orange/10 overflow-hidden py-[30px]">
        <Container>
          <div className="flex items-center justify-between gap-[45px]">
            <div className="w-[482px]">
              <SectionHeading
                label="Contact details"
                title={
                  <>
                    What can we <span className="text-orange">help with?</span>
                  </>
                }
                subtitle="Got questions or ready to start your design project? Let's bring your ideas to life!"
                labelClassName="text-[22px] font-medium tracking-[-0.02em] text-black uppercase"
                titleClassName="text-[85px] mt-[10px] leading-[80px] font-extrabold tracking-[-0.07em] text-black"
                subtitleClassName="text-[18px] text-text-body mt-[20px] max-w-[450px] leading-[28px] tracking-[-0.02em]"
              />

              <ul className="mt-[80px] flex flex-col">
                {contactLinks.map(({ id, icon: Icon, label, href }) => (
                  <li key={id}>
                    <Link
                      href={href}
                      className="border-text-body/20 flex items-center justify-between gap-[20px] border-b py-[20px]"
                    >
                      <span className="flex items-center gap-[20px]">
                        <Icon
                          size={30}
                          strokeWidth={2}
                          className="shrink-0 text-black"
                        />

                        <span className="text-[35px] font-medium tracking-[-0.06em] text-black">
                          {label}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={25}
                        strokeWidth={2.5}
                        className="shrink-0 text-black"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <div className="relative w-[585px]">
                <span className="absolute top-1/2 right-[calc(-1*max(0px,(100vw-1200px)/2))] -left-[45px] h-full -translate-y-1/2 rounded-l-[20px] bg-white" />

                <div className="relative py-[80px]">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
