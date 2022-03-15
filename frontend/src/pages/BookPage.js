import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AppContext } from "App";
import "bootstrap/dist/css/bootstrap.min.css";
import AddComment from "components/comments/AddComment";
import Comments from "components/comments/Comments";
import Status from "utils/status";
import MyBooks from "utils/myBooks";
import FetchCommets from "utils/comments";
import books from "utils/books";
import Book from "components/books/Book";
axios.defaults.withCredentials = true;
const BookPage = () => {
  const [book, setBook] = useState();
  const { isbn } = useParams();
  const { loading, setLoading } = useContext(AppContext);
  const [status, setStatus] = useState([]);
  const [statusSelected, setStatusSelected] = useState("");
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [score, setScore] = useState("");

  useEffect(() => {
    FetchCommets.getComments(isbn, setComments);
    books.fetchBook(isbn, setBook, setLoading);
    Status.getAllstatus(setStatus);
    MyBooks.fetchMyBooksStatus(setStatusSelected, isbn);
    MyBooks.getRate(isbn, setScore);
  }, []);

  useEffect(() => {
    MyBooks.updateStatus(statusSelected, isbn, setStatusSelected);
  }, [statusSelected]);

  useEffect(() => {
    MyBooks.rateBook(isbn, score);
  }, [score]);

  if (!book || loading) return <div></div>;

  return (
    <div className="container">
      <Book
        book={book}
        status={status}
        setStatusSelected={setStatusSelected}
        statusSelected={statusSelected}
        score={score}
        setScore={setScore}
      />
      <AddComment
        setComments={setComments}
        buttonText="Comment"
        comment={comment}
        setComment={setComment}
        addComment={FetchCommets.addComment}
      />
      <Comments comments={comments} />
    </div>
  );
};

export default BookPage;
