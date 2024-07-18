// components/CurrentBook.js
import React from 'react';

const CurrentBook = ({ book }) => {
  if (!book) return null;

  return (
    <div>
      <h2>Current Book</h2>
      <p><strong>ID:</strong> {book.id}</p>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Date of Publication:</strong> {book.date}</p>
    </div>
  );
};

export default CurrentBook;
