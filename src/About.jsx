import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-4">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container">
          <Link className="navbar-brand text-white" to="/">Store</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <div className="text-center mt-5">
        <h2>About Us</h2>
        <p className="lead">Welcome to our store! We provide high-quality products to our customers.</p>
        <p>
          Our mission is to deliver the best shopping experience with a wide range of products
          and exceptional customer service. Thank you for choosing us!
        </p>
      </div>
    </div>
  );
};

export default About;
