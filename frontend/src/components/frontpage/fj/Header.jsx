// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../authentication/authj/Logout';
import '../fc/Header.css';

const Header = ({ setUserLoggedIn }) => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Logout setCurrUser={setUserLoggedIn} />
    </header>
  );
};

export default Header;