import Signup from "./Signup";
import Login from './Login';
import Logout from './Logout';
import { useState, useEffect } from "react";
import PrivateText from "../PrivateText";
import BooksList from './BooksList';
import BookForm from './BookForm';

const User = ({ currUser, setCurrUser }) => {
  const [show, setShow] = useState(true);
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:3000/books/', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) throw new Error('Failed to fetch books');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  

  useEffect(() => {
    if (currUser) {
      fetchBooks();
    }
  }, [currUser]);

  if (currUser)
    return (
      <div>
        <p>Hello {currUser.email}</p>
        <PrivateText currUser={currUser} />
        <BooksList currUser={currUser} books={books} />
        <BookForm currUser={currUser} fetchBooks={fetchBooks} />
        <Logout setCurrUser={setCurrUser} />
      </div>
    );
  return (
    <div>
      {show ?
        <Login setCurrUser={setCurrUser} setShow={setShow} />
        :
        <Signup setCurrUser={setCurrUser} setShow={setShow} />
      }
    </div>
  );
};

export default User;
