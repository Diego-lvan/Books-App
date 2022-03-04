import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import URL from "../../config";
import { AppContext } from "../../App";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
axios.defaults.withCredentials = true;
const Book = () => {
  const [book, setBook] = useState();
  const { isbn } = useParams();
  const { loading, setLoading } = useContext(AppContext);
  const [status, setStatus] = useState([]);
  const [statusSelected, setStatusSelected] = useState("");
  const fetchBook = async (isbn) => {
    setLoading(true);
    const res = await axios.get(`${URL}book/${isbn}`);
    setBook(res.data.book);
    setLoading(false);
  };
  const fetchStatus = async () => {
    setLoading(true);
    const res = await axios.get(`${URL}status`);
    setStatus(res.data.status);
    setLoading(false);
  };

  const updateStatus = async () => {
    if (statusSelected) {
      const res = await axios.post(`${URL}my-books`, { isbn, statusSelected });
      console.log(res);
    }
  };
  useEffect(() => {
    fetchBook(isbn);
    fetchStatus();
  }, []);

  useEffect(() => {
    updateStatus();
  }, [statusSelected]);

  if (!book || loading) return <div>adsfsdfasdf</div>;

  return (
    <div style={{ marginTop: "70px" }}>
      <div>
        <img
          src={`${URL}books/${book.filename}`}
          alt=""
          style={{ width: "220px", height: "200px" }}
        />
        <h3>{book.no_pages}</h3>
        <Form.Group className="mb-3 col-xl-2 col-md-4 col-sm-6 col-4">
          <Form.Select
            type="text"
            placeholder="Select category"
            value={statusSelected}
            onChange={(e) => setStatusSelected(e.target.value)}
          >
            <option value="">Add to my list</option>

            {status.map(({ status, status_id }) => (
              <option key={status_id} value={status_id}>
                {status}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </div>
      <div>
        <h1>{book.title}</h1>
        <span>{book.synopsis}</span>
      </div>
    </div>
  );
};

export default Book;
