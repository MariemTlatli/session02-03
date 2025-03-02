// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import EditBook from "./components/EditBook";
import { Container, Typography } from "@mui/material";

const App = () => {
  return (
    <Router>
      <Container maxWidth="md">
        <h1>Book Management</h1>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
