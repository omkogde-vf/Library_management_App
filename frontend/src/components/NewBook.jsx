import { useState } from 'react';
import BookForm from './BookForm';
import { createBook } from '../lib/api/book';
import { useNavigate } from 'react-router-dom';

function NewBook() {
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
      await createBook(value);
      navigate('/');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="container">
      <h1>New Book</h1>
      <BookForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType="Add Book"
      />
    </div>
  );
}

export default NewBook;
