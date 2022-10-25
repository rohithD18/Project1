import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  Container  from "react-bootstrap/Container";



class Book extends React.Component{
    render(){
        return (
            <>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Home Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="about.js">About Us</Nav.Link>
            <Nav.Link href="#link">Contact US</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">BIRYANIS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">STARTERS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">KEBABS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">CURRIES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">INDIAN BREADS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BEVERAGES</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
        );
    }
}

export default Book;
   

