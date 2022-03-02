import React, { useState } from "react";
import axios from "axios";
import URL from "../../config";
axios.defaults.withCredentials = true;

const config = { headers: { "Content-Type": "multipart/form-data" } };

const AddBook = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [book, setBook] = useState({
    isbn: "",
    title: "",
    noPages: "",
    author: "",
    synopsis: "",
    category: "",
  });
  const handleFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
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
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    setBook({ ...book, [name]: value });
  };

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input type="file" name="book-cover" onChange={handleFile} />

        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          onChange={handleChange}
          value={book.isbn}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={book.title}
        />
        <input
          type="text"
          name="noPages"
          placeholder="Pages"
          onChange={handleChange}
          value={book.noPages}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleChange}
          value={book.author}
        />
        <input
          type="text"
          name="synopsis"
          placeholder="Synopsis"
          onChange={handleChange}
          value={book.synopsis}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />

        <input type="submit" value={"Post file"} />
      </form>
    </div>
  );
};

export default AddBook;
