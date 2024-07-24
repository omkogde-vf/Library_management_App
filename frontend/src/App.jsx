import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/frontpage/fj/Home';
import About from './components/frontpage/fj/About';
import BookList from './components/books/bookj/BookList';
import NewBook from './components/books/bookj/NewBook';
import EditBook from './components/books/bookj/EditBook';
import Signup from './components/authentication/authj/Signup';
import Login from './components/authentication/authj/Login';
import Header from './components/frontpage/fj/Header';
import CurrentBook from './components/books/bookj/CurrentBook';
import './App.css';
import imag from './background.jpg';

const App = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  useEffect(() => {
    // Check login status on component mount
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setUserLoggedIn(isLoggedIn);
  }, []);

  // Function to handle user login status change
  const handleLoginStatusChange = (status) => {
    if(isUserLoggedIn)
      setUserLoggedIn(false);
    else
    setUserLoggedIn(true);
  };

  const addCurrentBook = (book) => {
    setCurrentBook(book);
  };

  // Define the background image style
  const backgroundStyle = {
    backgroundImage: `url(${imag})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="app-container" style={backgroundStyle}>
        {isUserLoggedIn ? (
          <>
            <Header setUserLoggedIn={handleLoginStatusChange} />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/books" element={<BookList />} />
                <Route path="/new" element={<NewBook addCurrentBook={addCurrentBook} />} />
                <Route path="/current" element={<CurrentBook book={currentBook} />} />
                <Route path="/edit/:id" element={<EditBook />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </>
        ) : (
          <div className="app-container" style={backgroundStyle}>
            <Routes>
              <Route path="/login" element={<Login setCurrUser={handleLoginStatusChange} />} />
              <Route path="/signup" element={<Signup setCurrUser={handleLoginStatusChange} />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
