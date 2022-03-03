import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../../App";
import axios from "axios";
import URL from "../../config";

import BookCard from "../books/BookCard";
axios.defaults.withCredentials = true;
const Home = () => {
  const { logged, setLogged, loading, setLoading } = useContext(AppContext);
  const [books, setBooks] = useState([]);

  const fetchBooks = async (categories) => {
    const res = await axios.get(`${URL}books`);
    console.log(res.data);
    setBooks(res.data.books);
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) return <h1>Loading</h1>;
  return (
    <div>
      <div className="row row-cols-auto" style={{ margin: "20px" }}>
        {books.map((book, i) => {
          const { isbn, filename, title, author, category } = book;
          if (i === 0 || book.category !== books[i - 1].category) {
            return (
              <>
                <h1 style={{ width: "100%" }}>{category}</h1>
                <BookCard
                  key={isbn}
                  title={title}
                  author={author}
                  filename={filename}
                  isbn={isbn}
                />
              </>
            );
          }
          return (
            <BookCard
              key={isbn}
              title={title}
              author={author}
              filename={filename}
              isbn={isbn}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
