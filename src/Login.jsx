import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Icons Added

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-pink-500">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">Welcome Back!</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <label className="block text-gray-700 font-medium">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-4 focus-within:ring-indigo-300">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none bg-transparent text-black"
                required
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-4 focus-within:ring-indigo-300">
              <FaLock className="text-gray-500 mr-3" />
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none bg-transparent text-black"
                required
              />
            </div>
          </div>
          <div className="text-right">
            <Link to="/forgot-password" className="text-indigo-500 hover:underline font-medium">Forgot Password?</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?
          <Link to="/register" className="text-indigo-500 hover:underline font-medium"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
