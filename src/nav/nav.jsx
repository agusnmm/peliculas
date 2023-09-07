import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './nav.css';
export default function NavComponet() {
  return (
    <Navbar expand="lg" className="navbar">
  <Container>
    <Navbar.Brand className="navbar-brand" href="#home">
      Películas
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to="/independientes" className="nav-link">
          Independientes
        </NavLink>
        <NavLink to="/comedia" className="nav-link">
          Comedia
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  )
}