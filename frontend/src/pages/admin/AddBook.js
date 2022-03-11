import React, { useContext, useState } from "react";
import BookForm from "components/books/BookForm";
import axios from "axios";
import URL from "config";
import { AppContext } from "App";
axios.defaults.withCredentials = true;
const config = { headers: { "Content-Type": "multipart/form-data" } };
const UpdateBook = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const { loading, setLoading } = useContext(AppContext);
  const [inputBook, setInputBook] = useState({
    isbn: "",
    title: "",
    noPages: "",
    author: "",
    synopsis: "",
    category: "1",
  });
  const addBook = async (formData) => {
    try {
      await axios.post(`${URL}book/add`, formData, config);
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
        inputBook={inputBook}
        setInputBook={setInputBook}
        submitChanges={addBook}
        title="Add book"
      />
    </div>
  );
};

export default UpdateBook;
