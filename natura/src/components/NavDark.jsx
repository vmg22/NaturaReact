import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.Dark.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavDark = () => {
  return (
    <>
      <Navbar expand="lg" className="menu-dark contenedor">
        <Container className="">
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <NavDropdown title={<span className="text-nav-styles">sobre natura</span>}id="sobre-natura">
                <NavDropdown.Item as={Link} to="/sobre-natura" style={{color:"white", backgroundColor:"#4e4e4e"}}>sobre natura</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/sustentabilidad" style={{color:"white", backgroundColor:"#4e4e4e"}}>sustentabilidad</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/revista-natura" className="text-nav-styles">
                revista natura
              </Nav.Link>

              <NavDropdown title={<span className="text-nav-styles">consultoria</span>}id="consultoria-nav">
                <NavDropdown.Item as={Link} to="/quiero-ser-consultor" style={{color:"white", backgroundColor:"#4e4e4e"}}>quiero ser consultor/a</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/soy-consultor" style={{color:"white", backgroundColor:"#4e4e4e"}}>soy consultor/a</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title={<span className="text-nav-styles">quiero vender</span>}id="quiero-vender">
                <NavDropdown.Item as={Link} to="/por-internet" style={{color:"white", backgroundColor:"#4e4e4e"}}>por internet</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/por-revista" style={{color:"white", backgroundColor:"#4e4e4e"}}>por revista</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title={<span className="text-nav-styles">ayuda</span>}id="ayuda-nav">
                <NavDropdown.Item as={Link} to="/ayuda" style={{color:"white", backgroundColor:"#4e4e4e"}}>ayuda y contacto</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/info-productos" style={{color:"white", backgroundColor:"#4e4e4e"}}>informacion sobre producto</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/blog" className="text-nav-styles">
                blog
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavDark;
