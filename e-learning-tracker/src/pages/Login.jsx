import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Store the username and password in sessionStorage
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);

    // Redirect user to Dashboard or home page
    navigate("/"); 
  };

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center p-10">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-xl w-full md:w-96">
        <h2 className="text-3xl font-bold text-center text-slate-100 mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="text-slate-300 block mb-2">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-slate-700 text-slate-100 p-4 rounded-lg focus:outline-none"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="text-slate-300 block mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-700 text-slate-100 p-4 rounded-lg focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg"
          >
            Login
          </button>
        </form>

        <p className="text-slate-300 text-center mt-6">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
