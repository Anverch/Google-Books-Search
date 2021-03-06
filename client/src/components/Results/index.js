import React from "react";
import Result from "./result"
import { Container, Card } from "react-bootstrap";

function Results({results, title}){
    if (!results || !results.length) {
        return <div>No Data</div>
    }
    return (
        <Container >
            <Card border="primary" style={{ width: '100%', padding: '20px' }}>
            <h2 className="sha">{title}</h2>
                {results.map(result=>{
                    return <Result result={result} />
                })}
            </Card>
        <hr />
      </Container>
    );
}

export default Results;