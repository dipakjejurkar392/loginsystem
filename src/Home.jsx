import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container">
          <a className="navbar-brand text-white" href="#">Agro Store</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/products">Products</Link></li>
              <li className="nav-item"><a className="nav-link text-white" href="/about">About</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="/contact">Contact</a></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner with Background Image */}
      <div className="banner text-white text-center">
        <div className="overlay">
          <h1>Welcome to Agro Store</h1>
          <p>Your one-stop shop for quality agricultural products</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Products</h2>
        <div className="row">
          {/* Responsive Product Cards */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img 
                  src="https://via.placeholder.com/300" 
                  className="card-img-top" 
                  alt="Product" 
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Product {item}</h5>
                  <p className="card-text">High-quality agricultural products for better yield.</p>
                  <Link to="/products" className="btn btn-success mt-auto">View Products</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-success text-white text-center py-3 mt-5">
        <p>&copy; 2025 Agro Store. All Rights Reserved.</p>
      </footer>

      {/* CSS Styles */}
      <style>
        {`
          .banner {
            background: url('https://agriplexindia.com/cdn/shop/files/Agriplex_Banner.jpg?pad_color=fff&v=1737963546&width=2000') center/cover no-repeat;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }

          .overlay {
            background: rgba(0, 0, 0, 0.5);
            padding: 20px;
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Home;