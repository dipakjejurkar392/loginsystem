import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/forgot-password", { email })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((err) => setMessage("Something went wrong. Please try again."));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Reset Password</h2>
        <p className="text-center text-gray-600 mb-4">Enter your email to receive password reset instructions.</p>
        {message && <p className="text-center text-green-600 font-medium">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <label className="block text-gray-700 font-medium">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-4 focus-within:ring-blue-300">
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Send Reset Link
          </button>
        </form>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 w-full text-center text-indigo-500 hover:underline font-medium"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
