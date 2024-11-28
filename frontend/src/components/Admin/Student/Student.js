import React from "react";
import { useNavigate } from "react-router-dom";

function Student() {
  const navigate = useNavigate();

  const handleAddStudent = () => {
    navigate("/dashboard/addstudents"); // Navigate to the addstudents route
  };

  return (
    <div>
      <h1>Students</h1>
      <button onClick={handleAddStudent} style={buttonStyles}>
        Add Students
      </button>
    </div>
  );
}

// Optional inline styles for the button (can be moved to CSS)
const buttonStyles = {
  padding: "10px 20px",
  backgroundColor: "#3498db",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Student;
