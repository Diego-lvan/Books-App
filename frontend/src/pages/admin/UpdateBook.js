import React, { useContext, useEffect, useState } from "react";
import BookForm from "components/books/BookForm";
import axios from "axios";
import URL from "config";
import { AppContext } from "App";
import book from "actions/books";
axios.defaults.withCredentials = true;
const config = { headers: { "Content-Type": "multipart/form-data" } };
const UpdateBook = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const { loading, setLoading } = useContext(AppContext);
  const [books, setBooks] = useState([]);
  const [isbnBookUpdate, setIsbnBookUpdate] = useState("");
  const [currentBook, setCurrentBook] = useState({});
  const [inputBook, setInputBook] = useState({
    isbn: "",
    title: "",
    noPages: "",
    author: "",
    synopsis: "",
    category: "1",
  });
  const updateBook = async (formData) => {
    try {
      const res = await axios.put(`${URL}book`, formData, config);
      //check if res.success
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    book.fetchBooks(setBooks, setLoading);
    // fetchBook()
  }, []);
  //fetch the book to modify
  useEffect(() => {
    book.fetchBook(isbnBookUpdate, setCurrentBook);
  }, [isbnBookUpdate]);

  //display the book to modify

  useEffect(() => {
    setInputBook({
      isbn: currentBook.isbn,
      title: currentBook.title,
      noPages: currentBook.no_pages,
      author: currentBook.author,
      synopsis: currentBook.synopsis,
      category: currentBook.category_id,
    });
  }, [currentBook]);

  return (
    <div style={{ marginTop: "50px" }}>
      <BookForm
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        categories={categories}
        setCategories={setCategories}
        loading={loading}
        setLoading={setLoading}
        inputBook={inputBook}
        setInputBook={setInputBook}
        submitChanges={updateBook}
        title="Update book"
        books={books}
        setIsbnBookUpdate={setIsbnBookUpdate}
      />
    </div>
  );
};

export default UpdateBook;
