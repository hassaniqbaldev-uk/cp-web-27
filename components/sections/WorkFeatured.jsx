import { workCaseStudies } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";

const WorkFeatured = () => {
  return (
    <>
      <Section id="work-featured" className="py-[120px]">
        <Container>
          <ul className="flex flex-col gap-[30px]">
            {workCaseStudies.map(
              ({
                id,
                image,
                imageAlt,
                tags,
                title,
                description,
                role,
                platform,
                href,
                panelClassName,
                imagePanelClassName,
              }) => (
                <li key={id} className="flex items-stretch gap-[10px]">
                  <div
                    className={`relative flex h-[533px] w-[515px] shrink-0 items-center justify-center overflow-hidden rounded-[20px] ${imagePanelClassName}`}
                  >
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div
                    className={`flex flex-1 flex-col items-start rounded-[20px] p-[45px] ${panelClassName}`}
                  >
                    <ul className="flex flex-wrap items-center gap-[10px]">
                      {tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-black/20 px-[20px] py-[10px] text-[14px] tracking-[-0.02em] text-black"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <h3 className="mt-[30px] text-[85px] leading-[70px] font-extrabold tracking-[-0.07em] text-black">
                      {title}
                    </h3>

                    <p className="text-text-body mt-[20px] text-[18px] leading-[26px] tracking-[-0.02em]">
                      {description}
                    </p>

                    <dl className="mt-[30px] flex flex-wrap items-center gap-[10px]">
                      <div className="flex items-center gap-[20px] rounded-[5px] bg-white px-[20px] py-[10px]">
                        <dt className="text-[16px] font-bold tracking-[-0.02em] text-black uppercase">
                          Role
                        </dt>

                        <dd className="text-text-body text-[16px] tracking-[-0.02em]">
                          {role}
                        </dd>
                      </div>

                      <div className="flex items-center gap-[20px] rounded-[5px] bg-white px-[20px] py-[10px]">
                        <dt className="text-[16px] font-bold tracking-[-0.02em] text-black uppercase">
                          Platform
                        </dt>

                        <dd className="text-text-body text-[16px] tracking-[-0.02em]">
                          {platform}
                        </dd>
                      </div>
                    </dl>

                    <Button
                      href={href}
                      className="mt-[45px] rounded-full bg-black px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase"
                    >
                      View case study
                    </Button>
                  </div>
                </li>
              ),
            )}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default WorkFeatured;
