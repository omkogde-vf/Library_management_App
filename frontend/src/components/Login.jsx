import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Auth.css';

const Login = ({ setCurrUser }) => {
  const formRef = useRef();
  const navigate = useNavigate();

  const login = async (userInfo) => {
    const url = "http://localhost:3000/login"; // Adjust URL to match your API route
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      if (!response.ok) throw data.error;
      const token = response.headers.get("Authorization");
      localStorage.setItem("authToken", token);
      localStorage.setItem("isLoggedIn", "true"); // Save login state
      toast.success('Successfully logged in!');
      setCurrUser(data);
    } catch (error) {
      toast.error('Failed to log in');
      console.log("error", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    login(userInfo);
    e.target.reset();
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1>Welcome to My Library</h1>
      </div>
      <form className="auth-form" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" placeholder="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" placeholder="password" />
        </div>
        <button type="submit" className="auth-button">Login</button>
        <div>
          Not registered yet? <a href="#signup" onClick={handleClick}>Signup</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
