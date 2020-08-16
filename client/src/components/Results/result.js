import React from "react";
import {Card, Row, Col, Button } from "react-bootstrap";
import { toMongoBook, saveSearchResult } from "../API";

function Result({result}){
    if ((!result || !result.volumeInfo) && !result.link) {
        return (<div className="center">
            <Card>
             No Book
            </Card>
             </div>)
    }

    const book = result.link?result:toMongoBook(result.volumeInfo);
    
    const saveBook = async ()=>{
        await saveSearchResult(book)
    }
    return(
        <Card border="primary" style={{ width: '100'}}>
        <Card.Header>{book.title} by {book.authors && book.authors.join(", ")}</Card.Header>
        <Row>
            <Col sm={2}>
                <Card.Img variant="top" style={{ width: '150px', margin: '10px'}} src={book.image && book.image} />
            </Col>
            <Col sm={10}>
                <Card.Body>
                <Card.Text>
                    {book.description}
                </Card.Text>
                <Button variant="outline-primary" target="_blank" href={book.link}>Link</Button>
                {!result._id && <Button variant="outline-success"onClick={saveBook}>Save</Button>}
                </Card.Body>
            </Col>
        </Row>
        </Card>
    )
}

export default Result;