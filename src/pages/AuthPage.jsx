import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const endpoint = isRegister ? "/api/auth/register" : "/api/auth/login";
      const response = await axios.post(endpoint, formData);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 dark:bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="card w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white dark:text-gray-900 mb-8">
          {isRegister ? "Register for CricTracker-Pro" : "Login to CricTracker-Pro"}
        </h2>
        {error && <p className="text-red-500 dark:text-red-600 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          {isRegister && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 dark:text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 dark:text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 dark:text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
          <button className="btn-primary w-full py-3 text-lg font-semibold">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <p className="mt-6 text-center text-gray-400 dark:text-gray-600">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-400 dark:text-blue-600 hover:text-blue-500 dark:hover:text-blue-700 font-medium transition-colors"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;