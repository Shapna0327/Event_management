import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from "../../../auth/connection"; // Adjust the import path for your connection file

function StudentLogin() {
  const [formData, setFormData] = useState({ rollNo: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch(`${baseURL}/student/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store student session ID and navigate
        localStorage.setItem("studentSession", data.sessionId);
        navigate("/student-dashboard");
      } else {
        setErrorMessage(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={containerStyles}>
      <h1>Student Login</h1>
      <form onSubmit={handleSubmit} style={formStyles}>
        <div style={inputGroupStyles}>
          <label>Roll No:</label>
          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={inputGroupStyles}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {errorMessage && <p style={errorStyles}>{errorMessage}</p>}
        <button type="submit" style={buttonStyles}>
          Login
        </button>
      </form>
    </div>
  );
}

// Inline styles
const containerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f8f9fa",
};

const formStyles = {
  display: "flex",
  flexDirection: "column",
  width: "300px",
};

const inputGroupStyles = {
  marginBottom: "15px",
};

const buttonStyles = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

const errorStyles = {
  color: "red",
  fontSize: "14px",
};

export default StudentLogin;
