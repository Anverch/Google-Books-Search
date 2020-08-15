import React from "react"
import { Container, Form, FormControl, Button  } from "react-bootstrap";
import "./style.css"
export const GOOGLE_API_KEY=process.env.REACT_APP_GOOGLE_API_KEY;
export const GOOGLE_BASE_URL=process.env.REACT_APP_GOOGLE_BASE_URL;


export const googleSearch = async (searchTerm)=>{
    const queryUrl = `${GOOGLE_BASE_URL}?key=${GOOGLE_API_KEY}&q=${searchTerm}`;
    const results = await fetch(queryUrl);
    return results.json();
}

// class SearchedResults extends React.Component{
//     state = {
//         title: "",
//         authors: [],
//         description: "",
//         image: "",
//         link: ""
//     }
// }

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
                    <Button variant="outline-primary" onClick={runSearch} >Search</Button>
                </div>
            </Form>
            <hr />
        </Container>
        
    )
}

export default BookSearch;