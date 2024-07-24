// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../fc/Home.css';
import backgroundImage from '../../../background.jpg';

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Welcome to the Book Management System</h1>
      <Link to="/new">Add Book</Link>
      <Link to="/books">See Books Listing</Link>
    </div>
  );
};

export default Home;
