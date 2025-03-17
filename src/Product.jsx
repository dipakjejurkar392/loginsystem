import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json") // Dummy data वापरत आहे, API वापरू शकतोस
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]); // 🔹 Cart मध्ये नवीन प्रॉडक्ट अॅड करतो
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container mt-4">
      {/* 🔹 Navbar */}
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
              <li className="nav-item"><Link className="nav-link text-white" to="/cart">Cart ({cart.length})</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <h2 className="text-center mb-3">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3" key={product.id}>
            <div className="card h-100 shadow-sm" style={{ width: "100%", padding: "8px" }}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "100px", objectFit: "cover" }}
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1">{product.name}</h6>
                <p className="card-text mb-1"><strong>Price:</strong> ₹{product.price}</p>
                <button className="btn btn-primary btn-sm" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
