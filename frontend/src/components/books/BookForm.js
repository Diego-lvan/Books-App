import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import URL from "config";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContext } from "App";
axios.defaults.withCredentials = true;

const BookForm = ({
  setLoading,
  setCategories,
  setSelectedFile,
  inputBook,
  setInputBook,
  selectedFile,
  loading,
  categories,
  submitChanges,
  title,
  books,
  setIsbnBookUpdate,
}) => {
  const getCategories = async () => {
    setLoading(true);
    const res = await axios.get(`${URL}category`);
    setCategories(res.data.categories);
    setLoading(false);
  };
  useEffect(() => {
    getCategories();
  }, []);
  const handleFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("bookCover", selectedFile);
    formData.append("isbn", inputBook.isbn);
    formData.append("title", inputBook.title);
    formData.append("noPages", inputBook.noPages);
    formData.append("author", inputBook.author);
    formData.append("synopsis", inputBook.synopsis);
    formData.append("categoryID", inputBook.category);
    submitChanges(formData);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputBook({ ...inputBook, [name]: value });
  };

  return (
    <Container style={{ margin: "90px auto 0px auto" }}>
      <h3>{title}</h3>
      <Form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="row row-cols-auto"
      >
        {/* only display in update book */}
        {books && (
          <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
            <Form.Select
              type="text"
              name="category"
              onChange={(e) => setIsbnBookUpdate(e.target.value)}
            >
              <option value={null}>Select book</option>
              {books.map(({ title, isbn }) => (
                <option key={isbn} value={isbn}>
                  {title}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        )}

        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
          <Form.Control
            type="text"
            placeholder="ISBN"
            value={inputBook.isbn}
            onChange={handleChange}
            name="isbn"
          />
        </Form.Group>

        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
          <Form.Control
            type="text"
            placeholder="Title"
            value={inputBook.title}
            onChange={handleChange}
            name="title"
          />
        </Form.Group>

        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
          <Form.Control
            type="text"
            placeholder="Author"
            value={inputBook.author}
            onChange={handleChange}
            name="author"
          />
        </Form.Group>

        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
          <Form.Control
            type="text"
            placeholder="No. Pages"
            value={inputBook.noPages}
            onChange={handleChange}
            name="noPages"
          />
        </Form.Group>

        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
          <Form.Select
            type="text"
            placeholder="Category"
            value={inputBook.category}
            onChange={handleChange}
            name="category"
          >
            {categories.map(({ category, category_id }) => (
              <option key={category_id} value={category_id}>
                {category}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Control type="file" onChange={handleFile} name="book-cover" />
        </Form.Group>

        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Synopsis"
            value={inputBook.synopsis}
            onChange={handleChange}
            name="synopsis"
          />
        </Form.Group>

        <Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default BookForm;
