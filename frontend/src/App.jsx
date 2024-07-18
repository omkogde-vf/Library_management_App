// App.js
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import BookList from './components/BookList';
import NewBook from './components/NewBook';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';
import CurrentBook from './components/CurrentBook';

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

  return (
    <BrowserRouter>
      {isUserLoggedIn ? (
        <>
          <Header setUserLoggedIn={setUserLoggedIn} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/new" element={<NewBook addCurrentBook={addCurrentBook} />} />
            <Route path="/current" element={<CurrentBook book={currentBook} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login setCurrUser={setUserLoggedIn} />} />
          <Route path="/signup" element={<Signup setCurrUser={setUserLoggedIn} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
