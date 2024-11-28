import React, { useState } from "react";
import baseURL from "../../../auth/connection";

function AddStudent() {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    department: "",
    studyingYear: "",
    section: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

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

  try {
    const response = await fetch(`${baseURL}/admin/addstudent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Student added successfully!");
      // Reset form data
      setFormData({
        name: "",
        rollNo: "",
        department: "",
        studyingYear: "",
        section: "",
        phoneNumber: "",
        email: "",
        password: "",
      });
    } else {
      alert(data.message || "Failed to add student. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Server error. Please try again later.");
  }
};

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit} style={formStyles}>
        <div style={inputGroupStyles}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

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
          <label>Department:</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="AIDS">AIDS</option>
            <option value="ECE">ECE</option>
            <option value="MECH">MECH</option>
            <option value="CSBS">CSBS</option>
          </select>
        </div>

        <div style={inputGroupStyles}>
          <label>Studying Year:</label>
          <select
            name="studyingYear"
            value={formData.studyingYear}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>

        <div style={inputGroupStyles}>
          <label>Section:</label>
          <select
            name="section"
            value={formData.section}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="No Section">No Section</option>
          </select>
        </div>

        <div style={inputGroupStyles}>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={inputGroupStyles}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
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

        <div>
          <button type="submit" style={buttonStyles}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

// Optional inline styles for form layout
const formStyles = {
  display: "flex",
  flexDirection: "column",
  width: "300px",
  margin: "0 auto",
};

const inputGroupStyles = {
  marginBottom: "10px",
};

const buttonStyles = {
  padding: "10px 20px",
  backgroundColor: "#3498db",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default AddStudent;
