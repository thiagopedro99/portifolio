// src/pages/home/sections/hero/index.tsx
import { Button, Container } from '@components/common';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import {
    HeroSection,
    HeroContent,
    Greeting,
    Name,
    Title,
    Description,
    ButtonGroup,
    SocialLinks,
    SocialLink,
} from './styles';
import { HeroData } from './types';
import { JSX } from 'react';

interface HeroProps {
    data: HeroData;
    onContactClick: () => void;
}

const Hero = ({ data, onContactClick }: HeroProps) => {
    const socialIcons: Record<string, JSX.Element> = {
        github: <Github size={24} />,
        linkedin: <Linkedin size={24} />,
        email: <Mail size={24} />,
    };

    return (
        <HeroSection>
            <Container $maxWidth="sm">
                <HeroContent>
                    <Greeting>Olá! Meu nome é</Greeting>

                    <Name>{data.name}</Name>

                    <Title>{data.title}</Title>

                    <Description>{data.description}</Description>

                    <ButtonGroup>
                        <Button
                            $variant="primary"
                            $size="lg"
                            onClick={onContactClick}
                        >
                            Entre em Contato
                        </Button>

                        {data.cvUrl && (
                            <Button
                                $variant="outline"
                                $size="lg"
                                as="a"
                                href={data.cvUrl}
                                download
                            >
                                <Download size={20} />
                                Download CV
                            </Button>
                        )}
                    </ButtonGroup>

                    <SocialLinks>
                        {data.socialLinks.map((link) => (
                            <SocialLink
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                            >
                                {socialIcons[link.icon]}
                            </SocialLink>
                        ))}
                    </SocialLinks>
                </HeroContent>
            </Container>


           
        </HeroSection>
    );
};

export default Hero;