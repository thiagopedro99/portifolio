import { Card } from "@components/common";
import { styled } from "styled-components";

export const ProjectsSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SectionTitle = styled.h2`
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

export const ProjectCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-8px);
  }
`;

export const ProjectImage = styled.div<{ $image?: string }>`
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

export const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex: 1;
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const TechTag = styled.span`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background-color: ${({ theme }) => theme.colors.primaryLight}30;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
`;