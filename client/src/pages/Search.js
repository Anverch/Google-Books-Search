import React from "react";
import BookSearch from "../components/BookSearch";
import Results from "../components/Results";
import { googleSearch } from "../components/API"


function Search(){
    
    const [state, setState] = useState({
        books: [
            {
                title: "",
                authors: [],
                description: "",
                image: "",
                link: ""
            }
        ]
    });

    const runSearch= async (params)=> {
        const searched = await googleSearch("Kansas City Jazz");
        setState({books: searched.items})
        console.log(searched)
    }
    
    return (<div>
        <BookSearch />
        <Results />
    </div>
    
    );
}



export default Search;