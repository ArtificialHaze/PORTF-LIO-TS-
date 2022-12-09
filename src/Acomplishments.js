import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 135, text: "Projects" },
  { number: 4, text: "Students" },
  { number: 0, text: "Github Followers" },
  { number: 0, text: "Github Stars" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <SectionDivider />
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
