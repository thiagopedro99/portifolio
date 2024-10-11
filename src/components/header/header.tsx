import { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Usamos isso para navegação sem smooth scroll
import useNavigation from '../../hooks/useNavigation'; // Hook personalizado
import HamburguerIcon from '../../../src/assets/svg/menu-open.svg';
import CloseIcon from '../../../src/assets/svg/menu-close.svg';
import "../../utils.css";
import "./header.css";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navLinks, isProjetoDetail } = useNavigation(); // Verifica se estamos na página de detalhe do projeto

  const openMenu = () => setMenuOpen(!menuOpen);

  const handleImageClick = () => {
    window.location.href = '/';
  };

  return (
    <Navbar bg="light" expand="lg" className="position-fixed paddind--top-and-bottom-1">
      <Navbar.Brand className='ps-3 ps-lg-5'>
        <a onClick={handleImageClick} style={{ cursor: 'pointer' }}>
          <img src="https://avatars.githubusercontent.com/u/69489913?v=4" alt="" />
          THIAGO SILVA
        </a>
      </Navbar.Brand>
      <Button variant="primary" onClick={openMenu} className="d-flex d-lg-none text-center align-items-center button--hamburger border-none background-transparent">
        {menuOpen ? <img src={CloseIcon} width={30} className='icon-transition rotate' /> : <img src={HamburguerIcon} width={30} className='icon-transition' />}
      </Button>

      <Nav className="ms-auto d-none d-lg-flex paddind--right-5">
        {navLinks.map(({ name, path, smooth }) => (
          // Se `smooth` for true, usamos smooth scroll
          smooth ? (
            <Nav.Link key={name} href={path}>{name}</Nav.Link>
          ) : (
            // Se `smooth` for false, usamos o Link do React Router
            <Nav.Link key={name} as={Link} to={path}>{name}</Nav.Link>
          )
        ))}
      </Nav>

      <Offcanvas show={menuOpen} onHide={openMenu} placement="end" className="d-lg-none w-100 border-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            {navLinks.map(({ name, path, smooth }) => (
              <Nav.Item key={name}>
                {smooth ? (
                  // Se for smooth scroll
                  <Nav.Link href={path} onClick={openMenu}>{name}</Nav.Link>
                ) : (
                  // Se for navegação via react-router
                  <Nav.Link as={Link} to={path} onClick={openMenu}>{name}</Nav.Link>
                )}
              </Nav.Item>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default HeaderComponent;
