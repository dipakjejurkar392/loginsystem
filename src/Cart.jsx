import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = ({ cart, setCart }) => {
  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever cart updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">My Store</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/cart">Cart ({cart.length})</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <h2 className="text-center mb-3">Shopping Cart</h2>
        {cart.length === 0 ? (
          <div className="text-center alert alert-warning">Your cart is empty.</div>
        ) : (
          <div className="row justify-content-center">
            {cart.map((product, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3" key={index}>
                <div className="card h-100 shadow-sm border-0 text-center">
                  <img
                    src={product.image}
                    className="card-img-top p-2 img-fluid"
                    alt={product.name}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title font-weight-bold">{product.name}</h6>
                    <p className="card-text text-success fw-bold">₹{product.price}</p>
                    <button className="btn btn-danger btn-sm mt-auto w-100" onClick={() => removeFromCart(index)}>
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
