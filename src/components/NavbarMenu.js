import React from 'react';
/*Nav Bar Imports*/
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/* constant name needs to be exactly like the file name */
const NavbarMenu = () => {
  
  const navStyle = {
    color: 'white', fontSize: '30px'
  };
  
  const navStyle2 = {
    color: 'white', fontSize: '20px'
  };

    return (
        <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={navStyle}>JanissaAbreu.dev </Navbar.Brand>
          <Nav className="topnav-left">
            <Nav.Link href="#about" style={navStyle2}>About Me {" "} | </Nav.Link>
            <Nav.Link href="#speaking" style={navStyle2}> Public Speaking {" "} |</Nav.Link>
            <Nav.Link href="#contact" style={navStyle2}> {" "} Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    );
};

export default NavbarMenu;
