// src/pages/home/sections/skills/styles.ts
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const SkillsSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.surface};
  position: relative;
  overflow: hidden;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  animation: ${fadeInUp} 0.6s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  }
`;

export const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  animation: ${fadeInUp} 0.6s ease-out 0.2s both;
`;

export const Underline = styled.div`
  width: 60px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) => theme.spacing.md} auto ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  animation: ${fadeInUp} 0.6s ease-out 0.1s both;
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  max-width: 900px;
  margin: 0 auto;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => `${theme.spacing.md}`};
  background-color: ${({ theme }) => theme.colors.background};
  width: 120px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 2px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.surface};
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.lg};

    img, svg {
      animation: ${float} 2s ease-in-out infinite;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg};
    width: 100px;
  }
`;

export const TechIcon = styled.div<{ $color?: string }>`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.normal};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: ${({ theme, $color }) => 
      theme.colors.background === '#121212' && !$color ? 'brightness(0.8)' : 'none'};
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 48px;
    height: 48px;
  }
`;

export const TechName = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  transition: color ${({ theme }) => theme.transitions.fast};

  ${TechItem}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fonts.sizes.xs};
  }
`;