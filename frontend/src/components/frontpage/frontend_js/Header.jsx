// components/Header.js
import { Link } from 'react-router-dom';
import Logout from '../../authentication/authentication_jsx/Logout';
import '../frontend_css/Header.css';

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
