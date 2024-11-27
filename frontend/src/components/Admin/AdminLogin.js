import React, { useState } from "react";
import axios from "axios"; // Import axios
import baseURL from "../../auth/connection"; // Import the base URL for API requests

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the API request to the backend
      const response = await axios.post(`${baseURL}/admin/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        setIsLoggedIn(true);
        setError(""); // Clear any previous error message
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, Admin!</h2>
          <button onClick={handleLogout} style={{ padding: "10px 20px", marginTop: "20px" }}>
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", width: "100%" }}>
          <h2>Admin Login</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#4caf50", color: "white", border: "none", borderRadius: "5px" }}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminLogin;
