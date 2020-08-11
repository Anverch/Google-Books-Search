import React from "react"
import { Container, Jumbotron,  } from "react-bootstrap";
import "./style.css"


function Jumbo(){
    return (
        <Jumbotron fluid>
            <Container>
                <div className="pic" alt=""></div>
                <h1 className="center">Google Books Search</h1>
                <h2 className="center">Search for and Save Books of Interest</h2>
            </Container>
        </Jumbotron>
    );
}

export default Jumbo;