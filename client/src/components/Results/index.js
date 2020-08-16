import React from "react";
import Result from "./result"
import { Container, Card } from "react-bootstrap";

function Results({results}){
    if (!results) {
        return <div>No Data</div>
    }
    return (
        <Container >
            <Card border="primary" style={{ width: '100%', padding: '20px' }}>
            <h2 className="sha">Results</h2>
                {results.map(result=>{
                    return <Result result={result} />
                })}
            </Card>
        <hr />
      </Container>
    );
}

export default Results;