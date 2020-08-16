import BookSearch from "../BookSearch";

export const GOOGLE_API_KEY=process.env.REACT_APP_GOOGLE_API_KEY;
export const GOOGLE_BASE_URL=process.env.REACT_APP_GOOGLE_BASE_URL;


export const googleSearch = async (searchTerm)=>{
    const queryUrl = `${GOOGLE_BASE_URL}?key=${GOOGLE_API_KEY}&q=${searchTerm}`;
    const results = await fetch(queryUrl);
    return results.json();
}

export const toMongoBook = (book)=> {
    return {
        title: book.title,
        authors: book.authors,
        description: book.description,
        image: book.imageLinks ? book.imageLinks.smallThumbnail: "",
        link: book.infoLink
    }
}