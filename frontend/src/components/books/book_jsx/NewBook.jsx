// NewBook.js
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BookForm from './BookForm';
import { createBook } from '../../../lib/api/book';
import '../book_css/NewBook.css';

function NewBook({ addCurrentBook }) {
  const [value, setValue] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBook = await createBook(value);
      addCurrentBook(newBook);
      navigate('/current');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="new-book-container">
      <div className="form-container">
        <h1>New Book</h1>
        <BookForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={value}
          buttonType="Add Book"
        />
        <div className="link-container">
          <Link to="/">Home</Link>
          <Link to="/books">See Books Listing</Link>
        </div>
      </div>
    </div>
  );
}

export default NewBook;
