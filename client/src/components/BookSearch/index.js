import React from "react"
import { Container, Form, FormControl, Button  } from "react-bootstrap";
import "./style.css"


function BookSearch({runSearch}) {
    return (
        <Container >
            <h2 className="sha">Book Search</h2>
            <Form inline >
                <div className="center">
                    <FormControl type="text" placeholder="Search a Book" className="mr-sm-2" />
                    <Button variant="outline-primary" onClick={runSearch} >Search</Button>
                </div>
            </Form>
            <hr />
        </Container>
        
    )
}

export default BookSearch;