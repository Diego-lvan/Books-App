import React, { useState } from "react";
import Login from "./components/auth/Login";
import AddBook from "./components/books/AddBook";
import Navbar from "./components/Navbar/Navbar";
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Book from "./components/books/Book";
export const AppContext = createContext();
const App = () => {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  return (
    <AppContext.Provider value={{ logged, setLogged, loading, setLoading }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/admin" element={<AddBook />} />
          <Route exact path="/book/:isbn" element={<Book />} />
        </Routes>
        {/* <AddBook /> */}
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
