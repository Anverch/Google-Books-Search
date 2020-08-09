import { GOOGLE_API_KEY, GOOGLE_BASE_URL } from "../config";

export const Search = async (searchTerm)=>{
    const queryUrl = `${GOOGLE_BASE_URL}?key=${GOOGLE_API_KEY}&q=${searchTerm}`;
    const results = await fetch(queryUrl);
    return results.json();
}

