import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "App";
import axios from "axios";
import Books from "utils/books";
import BookCard from "../components/books/BookCard";
axios.defaults.withCredentials = true;
const Home = () => {
  const { loading, setLoading } = useContext(AppContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    Books.fetchBooks(setBooks, setLoading);
  }, []);

  if (loading) return <h1>Loading</h1>;
  return (
    <div>
      <div className="row row-cols-auto" style={{ margin: "55px 20px 20px 20px" }}>
        {books.map((book, i) => {
          const { isbn, filename, title, author, category } = book;
          if (i === 0 || book.category !== books[i - 1].category) {
            return (
              <React.Fragment key={isbn}>
                <h1 style={{ width: "100%" }}>{category}</h1>

                <BookCard title={title} author={author} filename={filename} isbn={isbn} />
              </React.Fragment>
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
