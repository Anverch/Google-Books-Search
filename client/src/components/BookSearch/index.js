import React from "react"
import { Container, Form, FormControl, Button  } from "react-bootstrap";
import "./style.css"
export const GOOGLE_API_KEY="AIzaSyCfy_54qlnY0wRgc5ybklRiYZ3AOJdVkUk";
export const GOOGLE_BASE_URL="https://www.googleapis.com/books/v1/volumes";


export const googleSearch = async (searchTerm)=>{
    const queryUrl = `${GOOGLE_BASE_URL}?key=${GOOGLE_API_KEY}&q=${searchTerm}`;
    const results = await fetch(queryUrl);
    return results.json();
}

function BookSearch() {
    const runSearch= async (params)=> {
        const searched = await googleSearch("Kansas City Jazz");
        console.log(searched)
    }
    return (
        <Container >
            <h2 className="sha">Book Search</h2>
            <Form inline >
                <div className="center">
                    <FormControl type="text" placeholder="Search a Book" className="mr-sm-2" />
                    <Button variant="outline-primary" wi onClick={runSearch} >Search</Button>
                </div>
            </Form>
            <hr />
        </Container>
        
    )
}

export default BookSearch;