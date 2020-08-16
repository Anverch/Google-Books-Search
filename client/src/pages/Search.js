import React, { useState } from "react";
import BookSearch from "../components/BookSearch";
import Results from "../components/Results";
import { googleSearch } from "../components/API"


function Search(){
    
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    const updateQuery = (e)=>{
        setQuery(e.target.value)
    }

    const runSearch= async ()=> {
        const searched = await googleSearch(query);
        setBooks(searched.items)
    }
    
    return (<div>
        <BookSearch 
        runSearch={runSearch}
        updateQuery={updateQuery}
        />
        <Results results={books} title="Results" />
    </div>
    );
};



export default Search;