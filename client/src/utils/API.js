import axios from "axios";

const baseUrl = "http://localhost:3001"

export const API = {
  // Gets all books
  getBooks: function() {
    return axios.get(baseUrl + "/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get(baseUrl + "/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete(baseUrl + "/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post(baseUrl + "/api/books", bookData);
  }
};

export const search= async (searchTerm)=> { 
    const result = await axios.get(baseUrl +  "/api/search/" + searchTerm);
  return result.json();
}