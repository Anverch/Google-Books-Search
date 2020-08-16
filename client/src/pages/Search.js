import React, { useState } from "react";
import BookSearch from "../components/BookSearch";
import Results from "../components/Results";
import { googleSearch } from "../components/API"


function Search(){
    
    const [books, setBooks] = useState([]);

    const runSearch= async (params)=> {
        const searched = await googleSearch("Kansas City Jazz");
        setBooks(searched.items)
        console.log(searched)
    }
    
    return (<div>
        <BookSearch runSearch={runSearch} />
        <Results results={books}/>
    </div>
    
    );
}



export default Search;