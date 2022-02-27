import React, { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
const URL = "http://localhost:5001/book/add";
const config = { headers: { "Content-Type": "multipart/form-data" } };

const AddBook = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("bookCover", selectedFile);
    try {
      const res = await axios.post(URL, formData, config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input type="file" name="book-cover" onChange={handleFile} />
        <input type="submit" value={"Post file"} />
      </form>
    </div>
  );
};

export default AddBook;
