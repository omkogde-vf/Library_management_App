// components/About.js
import '../frontend_css/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Page</h1>
      <h2>Welcome to Library Management</h2>
      <p>
        Here at Sarasvati Library, we are dedicated to providing an efficient and user-friendly platform to manage our library resources effectively. Whether you're a student, faculty member, or a library staff member, our system is designed to enhance your library experience.
      </p>
      <h2>Our Mission</h2>
      <p>At Sarasvati Library, our mission is to:</p>
      <ul>
        <li>Facilitate easy access to a diverse collection of books and resources.</li>
        <li>Ensure seamless borrowing and returning of materials.</li>
        <li>Promote a conducive learning environment for our patrons.</li>
      </ul>
    </div>
  );
};

export default About;
