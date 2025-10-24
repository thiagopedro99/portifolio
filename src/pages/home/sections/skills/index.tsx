// src/pages/home/sections/skills/index.tsx
import { Container } from '@components/common';
import {
  SkillsSection,
  SectionTitle,
  SectionSubtitle,
  Underline,
  TechGrid,
  TechItem,
  TechIcon,
  TechName,
} from './styles';
import { SkillsProps } from './types';

const Skills = ({ data }: SkillsProps) => {
  return (
    <SkillsSection id="skills">
      <Container $maxWidth="xl">
        <SectionTitle>{data.title}</SectionTitle>
        <Underline />
        {data.subtitle && <SectionSubtitle>{data.subtitle}</SectionSubtitle>}
        
        <TechGrid>
          {data.technologies.map((tech) => (
            <TechItem key={tech.name}>
              <TechIcon>
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  loading="lazy"
                />
              </TechIcon>
              <TechName>{tech.name}</TechName>
            </TechItem>
          ))}
        </TechGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;