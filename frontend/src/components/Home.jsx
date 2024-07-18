// components/Home.js
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Book Management System</h1>
      <Link to="/new">Add Book</Link>
      <br />
      <Link to="/books">See Books Listing</Link>
    </div>
  );
};

export default Home;
