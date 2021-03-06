import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import navStyle from '../styles/Home.module.css'


import React from 'react'

const CustomNav = () => {
  let allNavClass = `${navStyle.nav} fixed-top`;


    return (
<Navbar bg="light" expand="lg" className={allNavClass}>
  <Container>
 
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
    <Navbar.Collapse id="basic-navbar-nav"> 
      <Nav className="ms-auto">
        <Nav.Link href="/" className={navStyle.customNavLink}>Home</Nav.Link>
        <Nav.Link href="/projects" className={navStyle.customNavLink}>My Projects</Nav.Link>
        <Nav.Link href="/contact" className={navStyle.customNavLink}>Contact</Nav.Link>


      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default CustomNav
