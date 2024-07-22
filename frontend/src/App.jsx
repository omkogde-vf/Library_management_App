import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import About from './components/About';
import BookList from './components/BookList';
import NewBook from './components/NewBook';
import EditBook from './components/EditBook';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';
import CurrentBook from './components/CurrentBook';
import './App.css';
import imag from './background.jpg';

const App = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setUserLoggedIn(isLoggedIn);
  }, []);

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
            <Header setUserLoggedIn={setUserLoggedIn} />
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
              <Route path="/login" element={<Login setCurrUser={setUserLoggedIn} />} />
              <Route path="/signup" element={<Signup setCurrUser={setUserLoggedIn} />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
