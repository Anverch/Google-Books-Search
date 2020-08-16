import React from "react";
import {Card, Row, Col, Button } from "react-bootstrap";
import { toMongoBook } from "../API";

function Result({result}){
    console.log("results", result)
    if (!result || !result.volumeInfo) {
        return <div>No Book</div>
    }
    const book = toMongoBook(result.volumeInfo);
    return(
        <Card border="primary" style={{ width: '100'}}>
        <Card.Header>{book.title} by {book.authors && book.authors.join(", ")}</Card.Header>
        <Row>
            <Col sm={2}>
                <Card.Img variant="top" style={{ width: '150px' }} src={book.image && book.image} />
            </Col>
            <Col sm={10}>
                <Card.Body>
                <Card.Text>
                    {book.description}
                </Card.Text>
                <Button variant="outline-primary" target="_blank" href={book.link}>Link</Button>
                <Button variant="outline-success">Save</Button>
                </Card.Body>
            </Col>
        </Row>
        </Card>
    )
}

export default Result;