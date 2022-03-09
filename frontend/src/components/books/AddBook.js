import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import URL from "config";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
    category: "",
  });
  const getCategories = async () => {
    setLoading(true);
    const res = await axios.get(`${URL}category`);
    console.log(res.data.categories);
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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    setBook({ ...book, [name]: value });
  };

  if (loading) return <></>;

  return (
    <Container style={{ margin: "90px auto 0px auto" }}>
      <h3>Add book</h3>
      <Form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="row row-cols-auto"
      >
        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
          <Form.Control
            type="text"
            placeholder="ISBN"
            value={book.isbn}
            onChange={handleChange}
            name="isbn"
          />
        </Form.Group>

        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
          <Form.Control
            type="text"
            placeholder="Title"
            value={book.title}
            onChange={handleChange}
            name="title"
          />
        </Form.Group>

        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
          <Form.Control
            type="text"
            placeholder="Author"
            value={book.author}
            onChange={handleChange}
            name="author"
          />
        </Form.Group>

        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
          <Form.Control
            type="text"
            placeholder="No. Pages"
            value={book.noPages}
            onChange={handleChange}
            name="noPages"
          />
        </Form.Group>

        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
          <Form.Select
            type="text"
            placeholder="Category"
            value={book.category}
            onChange={handleChange}
            name="category"
          >
            {categories.map(({ category, category_id }) => (
              <option value={category_id}>{category}</option>
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
            value={book.synopsis}
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

export default AddBook;
