import { Container } from "../ui/Container";
import Section from "../ui/Section";

const AboutTeam = () => {
  return (
    <>
      <Section id="team" className="py-3xl">
        <Container>
          {/* Placeholder name so the section is announced and the heading
              outline stays unbroken — replace it with the real heading. */}
          <h2 className="sr-only">Our team</h2>
        </Container>
      </Section>
    </>
  );
};

export default AboutTeam;
