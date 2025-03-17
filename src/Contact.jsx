import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
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

      {/* Contact Section */}
      <div className="text-center mt-5">
        <h2>Contact Us</h2>
        <p className="lead">We would love to hear from you! Reach out to us through the following ways:</p>
        <p><strong>Email:</strong> dipakjejurkar@gmail.com</p>
        <p><strong>Phone:</strong> +91 9309130319</p>
        <p><strong>Address:</strong> janephal ta vaijapur dist sambhajinager, India</p>
        
        {/* WhatsApp Icon with Link */}
        <p>
          <a href="https://wa.me/919309130319" target="_blank" rel="Dipak jejurkar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="40" height="40" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
