import { useNavigate } from 'react-router-dom';

const Logout = ({ setCurrUser }) => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("authToken")
        },
      });
      if (!response.ok) {
        throw new Error('Logout failed');
      }
      localStorage.removeItem("authToken");
      localStorage.removeItem("isLoggedIn");
      setCurrUser(false);
      navigate("/login");
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div>
      <input type="button" value="Logout" onClick={handleClick} />
    </div>
  );
};

export default Logout;