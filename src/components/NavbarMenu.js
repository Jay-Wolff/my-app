import React from 'react';
/*Nav Bar Imports*/
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/* constant name needs to be exactly like the file name */
const NavbarMenu = () => {
    return (
        <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">JanissaAbreu.dev</Navbar.Brand>
          <Nav className="topnav-left">
            <Nav.Link href="#home">About Me {" "} | </Nav.Link>
            <Nav.Link href="#features"> Speaking {" "} |</Nav.Link>
            <Nav.Link href="#pricing"> {" "} Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    );
};

export default NavbarMenu;
