import { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';
import HamburguerIcon from '../../../src/assets/svg/menu-open.svg';
import CloseIcon from '../../../src/assets/svg/menu-close.svg';
import "../../utils.css";
import "./header.css";
const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const openMenu = () => setMenuOpen(!menuOpen);



  const handleImageClick = () => {
    window.location.href = '/';
  };

  return (
    <Navbar bg="light" expand="lg" className="position-fixed paddind--top-and-bottom-1">
      <Navbar.Brand className='ps-3 ps-lg-5'>
        <a href="#home" onClick={handleImageClick}>
          <img src="https://avatars.githubusercontent.com/u/69489913?v=4" alt="" />

          THIAGO SILVA
        </a>
      </Navbar.Brand>
      <Button variant="primary" onClick={openMenu} className="d-flex  d-lg-none text-center align-items-center button--hamburger border-none background-transparent">
        {menuOpen ? <img src={CloseIcon} width={30} className='icon-transition rotate' /> : <img src={HamburguerIcon} width={30} className='icon-transition' />}
      </Button>
      <Nav className="ms-auto d-none d-lg-flex  paddind--right-5 ">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#sobre">SOBRE</Nav.Link>
        <Nav.Link href="#projetos">PROJETOS</Nav.Link>
        <Nav.Link href="#contato">CONTATO</Nav.Link>
      </Nav>
      <Offcanvas show={menuOpen} onHide={openMenu} placement="end" className="d-lg-none w-100 border-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            <Nav.Item>
              <Nav.Link href="#home" onClick={openMenu}>HOME</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#sobre" onClick={openMenu}>SOBRE</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#projetos">PROJETOS</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#contato">CONTATO</Nav.Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default HeaderComponent;