import React from "react";
import axios from "axios";
import URL from "config";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import defaultImg from "assets/img/not-found.png";
axios.defaults.withCredentials = true;
const Book = ({
  book,
  status,
  setStatusSelected,
  statusSelected,
  score,
  setScore,
  averageScore,
}) => {
  const scoreValues = [1, 2, 3, 4, 5];

  return (
    <div style={{ marginTop: "90px" }} className="container">
      <div className="row">
        <div className="col-3">
          <img
            onError={(e) => (e.target.src = defaultImg)}
            src={`${URL}books/${book.filename}`}
            alt=""
            style={{
              width: "220px",
              height: "200px",
              maxHeight: "235px",
              maxWidth: "230px",
            }}
          />
          <h5 style={{ margin: "18px 0" }}>{book.no_pages} Pages</h5>
          <h5 style={{ margin: "18px 0" }}>Score: {averageScore} </h5>

          <Form.Group className="mb-3 col-xl-8 col-md-4 col-sm-6 col-4">
            <Form.Select
              type="text"
              placeholder="Select category"
              value={statusSelected}
              onChange={(e) => setStatusSelected(e.target.value)}
            >
              {!statusSelected && <option value="">Add to my list</option>}
              {statusSelected && <option value="delete">Remove book</option>}
              {status.map(({ status, status_id }) => (
                <option key={status_id} value={status_id}>
                  {status}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          {/* show rate form if user read the book */}
          {statusSelected == 1 && (
            <Form.Group className="mb-3 col-xl-8 col-md-4 col-sm-6 col-4">
              <Form.Select value={score} onChange={(e) => setScore(e.target.value)}>
                <option value="">Rate book</option>
                {scoreValues.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          )}
        </div>
        <div className="col-9">
          <h1>{book.title}</h1>
          <span>{book.synopsis}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
