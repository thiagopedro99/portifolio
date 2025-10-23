// src/pages/home/sections/projects/index.tsx
import { Button, Card, Container, Flex, Grid } from '@components/common';
import { ExternalLink, Github } from 'lucide-react';
import styled from 'styled-components';
import { ProjectsData } from './types';

const ProjectsSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: ${({ theme }) => theme.spacing.md} auto 0;
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`;

const ProjectCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-8px);
  }
`;

const ProjectImage = styled.div<{ $image?: string }>`
  width: 100%;
  height: 200px;
  background: ${({ $image, theme }) =>
    $image
      ? `url(${$image})`
      : `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryLight})`};
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex: 1;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TechTag = styled.span`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background-color: ${({ theme }) => theme.colors.primaryLight}30;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
`;

interface ProjectsProps {
  data: ProjectsData;
}

const Projects = ({ data }: ProjectsProps) => {
  return (
    <ProjectsSection id="projects">
      <Container $maxWidth="xl">
        <SectionTitle>{data.title}</SectionTitle>
        
        <Grid $columns={3} $gap="2rem">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} $variant="elevated">
              <ProjectImage $image={project.image} />
              
              <ProjectTitle>{project.title}</ProjectTitle>
              
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechTags>
                {project.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechTags>
              
              <Flex $gap="0.5rem">
                {project.liveUrl && (
                  <Button
                    $variant="primary"
                    $size="sm"
                    as="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Ver Projeto
                  </Button>
                )}
                
                {project.githubUrl && (
                  <Button
                    $variant="outline"
                    $size="sm"
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Código
                  </Button>
                )}
              </Flex>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;