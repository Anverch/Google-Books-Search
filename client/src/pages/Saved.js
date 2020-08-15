import React from 'react';
import { Container, Card } from "react-bootstrap";

function Saved(){

    return (
    <Container>
        <hr/>
        <Card border="primary" style={{ width: '100%', padding: '20px' }}>
            <h2 className="sha">Saved</h2>
        </Card>
        <hr/>
    </Container>
    )
}

export default Saved;