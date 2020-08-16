import React, { useState, useEffect } from 'react';
import { Container, Card } from "react-bootstrap";
import Results from '../components/Results';
import { getSavedBooks } from '../components/API';

function Saved(){
    const [books, setBooks] = useState({
        books: []
    })

    useEffect(async ()=>{
        const results = await getSavedBooks();
        console.log(results, "bdshfsdghdasg")
        setBooks(results.length?results:[results]);
    }, {});

    return (
    <Container>
        <hr/>
            <Results results={books} title="Saved" />
        <hr/>
    </Container>
    )
}

export default Saved;