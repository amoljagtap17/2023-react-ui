import { Container } from "components/lib";
import {
  BioContent,
  ContactLinks,
  Intro,
  SkillsContainer,
} from "components/sections";

export default function HomePage() {
  return (
    <>
      <Container>
        <Intro />
      </Container>
      <ContactLinks />
      <Container>
        <BioContent />
        <SkillsContainer />
      </Container>
    </>
  );
}
