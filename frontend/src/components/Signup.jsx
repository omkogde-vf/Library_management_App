import React, { useState } from 'react';

const Signup = ({ setCurrUser, setShow }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSignup = async (e) => {
    // e.preventDefault();
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
      const data = await response.json();
      localStorage.setItem('token', data.jwt); // assuming your backend responds with a JWT token
      setCurrUser(data.user);
      setShow(true); // Switch to login screen after signup
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
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
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
