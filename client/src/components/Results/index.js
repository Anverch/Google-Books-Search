import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

function Results(){
    return (
        <Container >
            <Card border="primary" style={{ width: '100%', padding: '20px' }}>
            <h2 className="sha">Results</h2>
                <Card border="primary" style={{ width: '100'}}>
                <Card.Header>Title by Author</Card.Header>
                <Row>
                    <Col sm={2}>
                        <Card.Img variant="top" style={{ width: '150px' }} src="https://ajmccarthynz.files.wordpress.com/2010/11/book-cartoon-thumb8048306.jpg" />
                    </Col>
                    <Col sm={10}>
                        <Card.Body>
                        <Card.Text>
                            Description: Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Link</Card.Link>
                        </Card.Body>
                    </Col>
                </Row>
                </Card>
        </Card>
      </Container>
    );
}

export default Results;