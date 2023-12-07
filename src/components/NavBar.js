import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img src="../multimedia/Naikistore.png" alt="Logo Naiki Store" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Shop" id="basic-nav-dropdown">
          

          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/category/Air%20Force">
              Air Force
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/Jordan%201">
              Jordan 1
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/Dunk%20Low">
              Dunk Low
            </NavDropdown.Item>
          </NavDropdown>



          </NavDropdown>
          <Nav.Link as={Link} to="#contactenos">
            Contacto
          </Nav.Link>
          <Nav.Link as={Link} to="/pages/registro.html">
            Registro
          </Nav.Link>
          <Nav.Link as={Link} to="/pages/preguntas-frecuentes.html">
            Preguntas Frecuentes
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
