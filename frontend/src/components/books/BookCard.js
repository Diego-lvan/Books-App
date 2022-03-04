import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import URL from "../../config";
import defaultImg from "../../assets/img/not-found.png";
import { Link } from "react-router-dom";
const BookCard = ({ isbn, filename, title, author }) => {
  return (
    <Card
      as={Link}
      to={`/book/${isbn}`}
      className="col"
      style={{
        background: "",
        margin: "10px",
        border: "none",
        cursor: "pointer",
        textDecoration: "none",
        color: "var(--bs-body-color)",
      }}
    >
      <Card.Img
        alt="cover book"
        style={{ width: "170px", height: "210px" }}
        src={`${URL}books/${filename}`}
        onError={(e) => (e.target.src = defaultImg)}
      ></Card.Img>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle>{author}</Card.Subtitle>
    </Card>
  );
};

export default BookCard;
