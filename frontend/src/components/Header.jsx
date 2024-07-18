// components/Header.js
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Header = ({ setUserLoggedIn }) => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Logout setCurrUser={setUserLoggedIn} />
      </nav>
    </header>
  );
};

export default Header;
