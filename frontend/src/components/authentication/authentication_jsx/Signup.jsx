import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../authentication_css/Auth.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const user = {
      user: {
        email,
        password,
        password_confirmation: passwordConfirmation
      }
    };
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      if (!response.ok) throw new Error('Failed to sign up');
      toast.success('Successfully signed up!');
      navigate("/login"); // Navigate to login page after signup
    } catch (error) {
      toast.error('Failed to sign up');
      console.error(error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className='auth-container'>
      <div className="auth-header">
        <h1>Welcome to My Library</h1>
      </div>
      <form className='auth-form' onSubmit={handleSignup}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">Signup</button>
        <div>
          Already registered? <a href="#login" onClick={handleClick}>Login</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
