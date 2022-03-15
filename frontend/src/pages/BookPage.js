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
  const [averageScore, setAverageScore] = useState(null);

  useEffect(() => {
    FetchCommets.getComments(isbn, setComments);
    books.fetchBook(isbn, setBook, setLoading);
    books.getAverageScore(isbn, setAverageScore);
    Status.getAllstatus(setStatus);
    MyBooks.fetchMyBooksStatus(setStatusSelected, isbn);
    MyBooks.getRate(isbn, setScore);
  }, []);

  useEffect(() => {
    MyBooks.updateStatus(statusSelected, isbn, setStatusSelected);
  }, [statusSelected]);

  useEffect(() => {
    handleRateBook();
  }, [score]);

  const handleRateBook = async () => {
    await MyBooks.rateBook(isbn, score);
    await books.getAverageScore(isbn, setAverageScore);
  };
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
        averageScore={averageScore}
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
