import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AppContext } from "App";
import "bootstrap/dist/css/bootstrap.min.css";
import AddComment from "components/comments/AddComment";
import Comments from "components/comments/Comments";
import { fetchStatus as fetchAllStatus } from "utils/status";
import { fetchMyBooksStatus, updateStatus } from "utils/myBooks";
import { getComments } from "utils/comments";
import { fetchBook } from "utils/books";
import Book from "components/books/Book";
axios.defaults.withCredentials = true;
const BookPage = () => {
  const [book, setBook] = useState();
  const { isbn } = useParams();
  const { loading, setLoading } = useContext(AppContext);
  const [status, setStatus] = useState([]);
  const [statusSelected, setStatusSelected] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(isbn, setComments);
    fetchBook(isbn, setLoading, setBook);
    fetchAllStatus(setStatus);
    fetchMyBooksStatus(setStatusSelected, isbn);
  }, []);

  useEffect(() => {
    updateStatus(statusSelected, isbn, setStatusSelected);
  }, [statusSelected]);

  if (!book || loading) return <div></div>;

  return (
    <div className="container">
      <Book
        book={book}
        status={status}
        setStatusSelected={setStatusSelected}
        statusSelected={statusSelected}
      />
      <AddComment
        setComments={setComments}
        comments={comments}
        getComments={getComments}
      />
      <Comments comments={comments} />
    </div>
  );
};

export default BookPage;
