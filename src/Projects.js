import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  TitleContent,
  UtilityList,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../styles/GlobalComponents";

const projectsDemos = [
  {
    title: "Project-1",
    description: "Project one and this is the description",
  },
  {
    title: "Project-2",
    description: "Project two and this is the description",
  },
  {
    title: "Project-3",
    description: "Project three and this is the description",
  },
  {
    title: "Project-4",
    description: "Project four and this is the description",
  },
  {
    title: "Project-5",
    description: "Project five and this is the description",
  },
];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projectsDemos.map((project, index) => (
        <BlogCard key={index}>
          <TitleContent>
            <HeaderThree title={project.title}></HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
          </div>
          <UtilityList>
            <ExternalLinks href={"visit"}>Code</ExternalLinks>
            <ExternalLinks href={"source"}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
