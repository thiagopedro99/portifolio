// src/components/navbar/index.tsx
import { useState } from "react";
import { Container, Flex } from "@components/common";
import { useActiveSection } from "@hooks/useActiveSection";
import {
  Nav,
  Logo,
  DesktopMenu,
  MenuButton,
  MobileMenuButton,
  MobileMenu,
  MobileMenuScrollButton,
  Overlay,
  CloseButton,
} from "./styles";
import { Menu, X } from "lucide-react";
import { menuItems } from "./constants";

interface NavbarProps {
  logo?: string;
}

const Navbar = ({ logo = "Thiago Silva" }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // IDs das seções para observar
  const sectionIds = menuItems.map(item => item.id);

  // Detectar qual seção está ativa
  const activeSection = useActiveSection(sectionIds);

  const handleToggle = () => setMobileOpen(!mobileOpen);

  const handleScrollToSection = (sectionId: string) => {
    setMobileOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Nav>
        <Container $maxWidth="xl">
          <Flex $justify="between" $align="center" style={{ height: '64px' }}>
            <Logo to="/home" onClick={() => handleScrollToSection('hero')}>
              {logo}
            </Logo>

            <Flex $align="center" $gap="1rem">
              <DesktopMenu>
                {menuItems.map((item) => (
                  <MenuButton
                    key={item.id}
                    onClick={() => handleScrollToSection(item.id)}
                    className={activeSection === item.id ? 'active' : ''}
                  >
                    {item.label}
                  </MenuButton>
                ))}
              </DesktopMenu>

              <MobileMenuButton onClick={handleToggle} aria-label="Menu">
                <Menu size={24} />
              </MobileMenuButton>
            </Flex>
          </Flex>
        </Container>
      </Nav>

      <Overlay $isOpen={mobileOpen} onClick={handleToggle} />

      <MobileMenu $isOpen={mobileOpen}>
        <Flex $justify="between" $align="center" style={{ marginBottom: '1rem' }}>
          <CloseButton onClick={handleToggle} aria-label="Fechar menu">
            <X size={24} />
          </CloseButton>
        </Flex>

        {menuItems.map((item) => (
          <MobileMenuScrollButton
            key={item.id}
            onClick={() => handleScrollToSection(item.id)}
            className={activeSection === item.id ? 'active' : ''}
          >
            {item.label}
          </MobileMenuScrollButton>
        ))}
      </MobileMenu>
    </>
  );
};

export default Navbar;