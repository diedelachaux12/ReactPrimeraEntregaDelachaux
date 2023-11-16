import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBar.css';
import CartWidget from './CartWidget'; // Importa el componente CartWidget


const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="./index.html">
      <img src="/multimedia/Naikistore.png" alt="Logo Naiki Store" />

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item href="./pages/airforce1.html">Air Force</NavDropdown.Item>
            <NavDropdown.Item href="#">Jordan 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Dunk Low</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contactenos">Contacto</Nav.Link>
          <Nav.Link href="./pages/registro.html">Registro</Nav.Link>
          <Nav.Link href="./pages/preguntas-frecuentes.html">Preguntas Frecuentes</Nav.Link>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
