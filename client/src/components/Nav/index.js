import React from "react"
import { Navbar, Nav,  } from "react-bootstrap";

function Navigation(){
    return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand >Google Books</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="#home">Searched</Nav.Link>
        <Nav.Link href="#features">Saved</Nav.Link>
        </Nav>
    </Navbar>
    );
}
 
export default Navigation;

  