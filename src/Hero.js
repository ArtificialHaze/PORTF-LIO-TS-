import { Section, SectionText, SectionTitle } from "../styles/GlobalComponents";
import Button from "../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <b /> My Personal Porfolio
      </SectionTitle>
      <SectionText>
        Dreamdevs, as title mentions we are making dreams to come true.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
