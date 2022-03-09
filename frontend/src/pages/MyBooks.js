import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import URL from "../config";
import BookCard from "../components/books/BookCard";
import { getBooksByStatus } from "../utils/books";
axios.defaults.withCredentials = true;
const MyBooks = () => {
  const [myBooks, setMyBooks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getBooksByStatus(id, setMyBooks);
  }, []);
  return (
    <div className="row row-cols-auto" style={{ margin: "55px 20px 20px 20px" }}>
      {myBooks.map((book) => {
        const { isbn, filename, title, author } = book;
        return (
          <React.Fragment>
            <BookCard title={title} author={author} filename={filename} isbn={isbn} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default MyBooks;
