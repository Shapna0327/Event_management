import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={containerStyles}>
      <h1>Welcome to the Portal</h1>
      <div style={buttonContainerStyles}>
        <button
          style={buttonStyles}
          onClick={() => navigate("/login")}
        >
          Admin Login
        </button>
        <button
          style={buttonStyles}
          onClick={() => navigate("/student-login")}
        >
          Student Login
        </button>
      </div>
    </div>
  );
}

// Inline styles for basic styling
const containerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f8f9fa",
};

const buttonContainerStyles = {
  marginTop: "20px",
  display: "flex",
  gap: "20px",
};

const buttonStyles = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "background-color 0.3s",
};

export default Home;
