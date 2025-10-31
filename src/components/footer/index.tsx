// src/components/footer/index.tsx
import { Container, Flex } from '@components/common';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  SectionTitle,
  SocialLinks,
  SocialLink,
  ContactItem,
  ContactIcon,
  ContactText,
  FooterBottom,
  Copyright,
} from './styles';
import { FooterProps } from './types';
import { defaultFooterData } from './constants';
import { JSX } from 'react';

const Footer = ({ data = defaultFooterData }: FooterProps) => {
  const { name, email, phone, location, socialLinks, year, text } = data;
  // Mapeamento dos ícones DENTRO do componente
  const getSocialIcon = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      github: <Github size={20} />,
      linkedin: <Linkedin size={20} />,
      email: <Mail size={20} />,
    };
    return icons[iconName] || <Mail size={20} />;
  };

  return (
    <FooterContainer>
      <Container $maxWidth="xl">
        <FooterContent>
          {/* Coluna 1: Sobre */}
          <FooterSection>
            <SectionTitle>Sobre</SectionTitle>
            <p>
              Desenvolvedor Full Stack apaixonado por criar
              experiências digitais incríveis e soluções inovadoras.
            </p>
          </FooterSection>

          {/* Coluna 2: Contato */}
          <FooterSection>
            <SectionTitle>Contato</SectionTitle>
            <Flex $direction="column" $gap="0.75rem" $align="start">
              <ContactItem>
                <ContactIcon>
                  <Mail size={18} />
                </ContactIcon>
                <ContactText href={`mailto:${email}`}>{email}</ContactText>
              </ContactItem>

              {phone && (
                <ContactItem>
                  <ContactIcon>
                    <img 
                      src={"icons/whatsapp.svg"} 
                      alt="WhatsApp" 
                      width={18} 
                      height={18}
                      style={{ display: 'block' }}
                    />
                  </ContactIcon>
                  <ContactText href={`https://wa.me/${phone}?text=${encodeURIComponent(`${text}`)}`} target='_blank'>Whatsapp</ContactText>
                </ContactItem>
              )}

              {location && (
                <ContactItem>
                  <ContactIcon>
                    <MapPin size={18} />
                  </ContactIcon>
                  <ContactText as="span">{location}</ContactText>
                </ContactItem>
              )}
            </Flex>
          </FooterSection>

          {/* Coluna 3: Redes Sociais */}
          <FooterSection>
            <SectionTitle>Redes Sociais</SectionTitle>
            <SocialLinks>
              {socialLinks && socialLinks.length > 0 ? (
                socialLinks.map((link) => (
                  <SocialLink
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    title={link.name}
                  >
                    {getSocialIcon(link.icon)}
                  </SocialLink>
                ))
              ) : (
                <>
                  <SocialLink
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </SocialLink>
                  <SocialLink
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </SocialLink>
                </>
              )}
            </SocialLinks>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {year} {name}. Todos os direitos reservados.
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;