import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Home Component
const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the Home page!</p>
  </div>
);

// About Component
const About = () => (
  <div>
    <h2>About Page</h2>
    <p>This is the About page of the SPA.</p>
  </div>
);

// Contact Component
const Contact = () => (
  <div>
    <h2>Contact Page</h2>
    <p>You can contact us via email!</p>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
