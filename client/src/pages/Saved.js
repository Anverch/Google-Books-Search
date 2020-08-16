import React, { useState, useEffect } from 'react';
import { Container, Card } from "react-bootstrap";
import Result from '../components/Results/result';
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
        <Card border="primary" style={{ width: '100%', padding: '20px' }}>
            <h2 className="sha">Saved</h2>
            <Results results={books} />
        </Card>
        <hr/>
    </Container>
    )
}

export default Saved;