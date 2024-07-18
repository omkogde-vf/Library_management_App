import { useRef } from "react";

const Login = ({ setCurrUser, setShow }) => {
  const formRef = useRef();

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
      setCurrUser(data);
    } catch (error) {
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
    setShow(false);
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder="email" />
        <br />
        Password: <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
      <br />
      <div>
        Not registered yet, <a href="#signup" onClick={handleClick}>Signup</a>
      </div>
    </div>
  );
};

export default Login;
