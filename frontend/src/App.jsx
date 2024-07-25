import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/frontpage/frontend_js/Home';
import About from './components/frontpage/frontend_js/About';
import BookList from './components/books/book_jsx/BookList';
import NewBook from './components/books/book_jsx/NewBook';
import EditBook from './components/books/book_jsx/EditBook';
import Signup from './components/authentication/authentication_jsx/Signup';
import Login from './components/authentication/authentication_jsx/Login';
import Header from './components/frontpage/frontend_js/Header';
import CurrentBook from './components/books/book_jsx/CurrentBook';
import './App.css';
import imag from './background.jpg';

const App = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  useEffect(() => {
    // Check login status on component mount
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const authToken = localStorage.getItem('authToken');
    setUserLoggedIn(isLoggedIn && authToken); // Ensure token exists
  }, []);

  // Function to handle user login status change
  const handleLoginStatusChange = (status) => {
    setUserLoggedIn(status);
    localStorage.setItem('isLoggedIn', status.toString());
    if (!status) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('isLoggedIn');
    }
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
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
