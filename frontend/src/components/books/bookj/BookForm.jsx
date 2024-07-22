import React from 'react';

function BookForm({ handleChange, handleSubmit, value, buttonType }) {
  return (
    <form onSubmit={handleSubmit} className="new-book-form">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={value.title || ''}
        onChange={handleChange}
        required
      />

      <label htmlFor="author">Author</label>
      <input
        type="text"
        id="author"
        name="author"
        value={value.author || ''}
        onChange={handleChange}
        required
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={value.description || ''}
        onChange={handleChange}
        required
      />

      <label htmlFor="publishedDate">Published Date</label>
      <input
        type="date"
        id="publishedDate"
        name="publication_date"
        value={value.publication_date || ''}
        onChange={handleChange}
        required
      />

      <button type="submit">{buttonType}</button>
    </form>
  );
}

export default BookForm;
