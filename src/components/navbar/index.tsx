// src/components/navbar/index.tsx
import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Flex } from "@components/common";
import { useActiveSection } from "@hooks/useActiveSection";
import {
  Nav,
  Logo,
  DesktopMenu,
  MenuLink,
  MenuButton,
  MobileMenuButton,
  MobileMenu,
  MobileMenuLink,
  MobileMenuScrollButton,
  Overlay,
  CloseButton,
} from "./styles";
import { Menu, X } from "lucide-react";
import { MenuItem, allMenuItems } from "./constants";

interface NavbarProps {
  logo?: string;
  menuItems?: MenuItem[];
}

const Navbar = ({
  logo = "Thiago Silva",
  menuItems = allMenuItems
}: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Pegar todos os IDs de seções para observar
  const sectionIds = useMemo(() => {
    return menuItems
      .filter(item => item.id)
      .map(item => item.id!);
  }, [menuItems]);

  // Detectar qual seção está ativa
  const activeSection = useActiveSection(sectionIds);

  // Filtrar itens baseado na rota atual
  const visibleMenuItems = useMemo(() => {
    return menuItems.filter(item => {
      // Se tem hideOnRoutes e a rota atual está nela, não mostra
      if (item.hideOnRoutes?.includes(location.pathname)) {
        return false;
      }

      // Se showOnRoutes incluir "*", mostra em todas as rotas (exceto se estiver em hideOnRoutes)
      if (item.showOnRoutes?.includes("*")) return true;
      
      // Se showOnRoutes incluir a rota atual, mostra
      if (item.showOnRoutes?.includes(location.pathname)) return true;
      
      // Caso contrário, não mostra
      return false;
    });
  }, [menuItems, location.pathname]);

  const handleToggle = () => setMobileOpen(!mobileOpen);

  const handleNavigation = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  const handleScrollToSection = (sectionId: string) => {
    setMobileOpen(false);
    
    // Se já está na home, só faz o scroll
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se não está na home, navega primeiro
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleMenuClick = (item: MenuItem) => {
    if (item.id) {
      handleScrollToSection(item.id);
    } else if (item.path) {
      handleNavigation(item.path);
    }
  };

  return (
    <>
      <Nav>
        <Container $maxWidth="xl">
          <Flex $justify="between" $align="center" style={{ height: '64px' }}>
            <Logo to="/">{logo}</Logo>

            <Flex $align="center" $gap="1rem">
              <DesktopMenu>
                {visibleMenuItems.map((item) => (
                  item.id ? (
                    <MenuButton
                      key={item.id}
                      onClick={() => handleScrollToSection(item.id!)}
                      className={activeSection === item.id ? 'active' : ''}
                    >
                      {item.label}
                    </MenuButton>
                  ) : (
                    <MenuLink
                      key={item.path}
                      to={item.path || '/'}
                    >
                      {item.label}
                    </MenuLink>
                  )
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

        {visibleMenuItems.map((item) => (
          item.id ? (
            <MobileMenuScrollButton
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </MobileMenuScrollButton>
          ) : (
            <MobileMenuLink
              key={item.path}
              to={item.path || '/'}
              onClick={() => handleMenuClick(item)}
            >
              {item.label}
            </MobileMenuLink>
          )
        ))}
      </MobileMenu>
    </>
  );
};

export default Navbar;