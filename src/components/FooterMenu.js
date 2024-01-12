import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//importing the images
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

const FooterMenu = () => {
    return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Developed by my big boi self</Navbar.Brand>
          <Nav className="topnav-left">
            <ul className="footericon">
                <li className="socialicon-list"> <Nav.Link href="https://github.com/Jay-Wolff"> <FaGithub size="40px"  /> </Nav.Link> </li>
                <li className="socialicon-list"> <Nav.Link href="https://www.linkedin.com/in/janissa-abreu/">  <FaLinkedin size="40px"  /> </Nav.Link> </li>
                <li className="socialicon-list"> <Nav.Link href="https://www.twitch.tv/jay_wolff_"> <FaTwitch size="40px" /> </Nav.Link> </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
};

export default FooterMenu;