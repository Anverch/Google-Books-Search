import React from "react";
import {Card, Row, Col, Button } from "react-bootstrap";

function Result({result}){
    console.log("results", result)
    if (!result || !result.volumeInfo) {
        return <div>No Book</div>
    }
    const book = result.volumeInfo;
    return(
        <Card border="primary" style={{ width: '100'}}>
        <Card.Header>{book.title} by {book.authors && book.authors.join(", ")}</Card.Header>
        <Row>
            <Col sm={2}>
                <Card.Img variant="top" style={{ width: '150px' }} src={book.imageLinks && book.imageLinks.smallThumbnail} />
            </Col>
            <Col sm={10}>
                <Card.Body>
                <Card.Text>
                    {book.description}
                </Card.Text>
                <Button variant="outline-primary" target="_blank" href={book.infoLink}>Link</Button>
                </Card.Body>
            </Col>
        </Row>
        </Card>
    )
}

export default Result;