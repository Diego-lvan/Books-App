import React, { useState } from "react";
import Login from "pages/Login";
import AddBook from "pages/admin/AddBook";
import Navbar from "components/Navbar/Navbar";
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import BookPage from "pages/BookPage";
import MyBooks from "pages/MyBooks";
import Account from "pages/Account";
import UpdateBook from "pages/admin/UpdateBook";
import SignUp from "pages/SignUp";
export const AppContext = createContext();
const App = () => {
  const [logged, setLogged] = useState({});
  const [loading, setLoading] = useState(true);
  return (
    <AppContext.Provider value={{ logged, setLogged, loading, setLoading }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/book/:isbn" element={<BookPage />} />
          <Route exact path="/my-books/:id" element={<MyBooks />} />
          <Route exact path="/account/info" element={<Account />} />

          <Route exact path="/admin/add-book" element={<AddBook />} />
          <Route exact path="/admin/update-book" element={<UpdateBook />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
