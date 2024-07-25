import '../book_css/CurrentBook.css'; // Import the CSS file
import { Link } from 'react-router-dom'

const CurrentBook = ({ book }) => {
  if (!book) return null;

  return (
    <div className="current-book-container">
      <h2 className="current-book-title">Current Book</h2>
      <p><strong>ID:</strong> {book.id}</p>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Date of Publication:</strong> {book.publicationDate}</p>
      <Link to="/books">See Books Listing</Link>
    </div>
  );
};

export default CurrentBook;
