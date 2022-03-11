import React, { useContext, useState } from "react";
import BookForm from "components/books/BookForm";
import axios from "axios";
import URL from "config";
import { AppContext } from "App";
axios.defaults.withCredentials = true;
const config = { headers: { "Content-Type": "multipart/form-data" } };
const AddBook = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const { loading, setLoading } = useContext(AppContext);
  const [book, setBook] = useState({
    isbn: "",
    title: "",
    noPages: "",
    author: "",
    synopsis: "",
    category: "1",
  });
  const addBook = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("bookCover", selectedFile);
    formData.append("isbn", book.isbn);
    formData.append("title", book.title);
    formData.append("noPages", book.noPages);
    formData.append("author", book.author);
    formData.append("synopsis", book.synopsis);
    formData.append("categoryID", book.category);

    try {
      const res = await axios.post(`${URL}book/add`, formData, config);
      //check if res.success
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <BookForm
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        categories={categories}
        setCategories={setCategories}
        loading={loading}
        setLoading={setLoading}
        book={book}
        setBook={setBook}
        handleSubmit={addBook}
      />
    </div>
  );
};

export default AddBook;
