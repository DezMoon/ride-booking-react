import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead
import { login } from "../services/authService";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate(); // Utilize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await login(credentials);
      localStorage.setItem("accessToken", accessToken); // Store token
      navigate("/dashboard"); // Use navigate to redirect
    } catch (error) {
      console.error("Login failed:", error);
      // Add error message
    }
  };

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
