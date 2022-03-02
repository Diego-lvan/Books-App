import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../../App";
import axios from "axios";
import URL from "../../config";
axios.defaults.withCredentials = true;
const Home = () => {
  const { logged, setLogged, loading, setLoading } = useContext(AppContext);
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    setLoading(true);
    const res = await axios.get(`${URL}book`);
    setLoading(false);
    console.log(res.data.books);
    if (res.data.success) setBooks(res.data.books);
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) return <h1>Loading</h1>;

  return <div></div>;
};

export default Home;
