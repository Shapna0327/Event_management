import React, { useState } from "react";
import baseURL from "../../../auth/connection";

function AddEvent() {
  const [formData, setFormData] = useState({
    fromTime: "",
    toTime: "",
    date: "",
    day: "",
    venue: "",
    eventName: "",
    eventCoordinatorName: "",
    eventCoordinatorPhone: "",
    studentCoordinatorName: "",
    studentCoordinatorPhone: "",
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
      const response = await fetch(`${baseURL}/admin/add-event`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert("Event added successfully: " + data.eventId);
      } else {
        const errorData = await response.json();
        alert("Failed to add event: " + errorData.message);
      }
    } catch (error) {
      console.error("Error adding event:", error);
      alert("An unexpected error occurred.");
    }
  };
  

  return (
    <div>
      <h1>Add Event</h1>
      <form onSubmit={handleSubmit} style={formStyles}>
        <div style={inputGroupStyles}>
          <label>From Time:</label>
          <input
            type="time"
            name="fromTime"
            value={formData.fromTime}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={inputGroupStyles}>
          <label>To Time:</label>
          <input
            type="time"
            name="toTime"
            value={formData.toTime}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={inputGroupStyles}>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={inputGroupStyles}>
          <label>Day:</label>
          <input
            type="text"
            name="day"
            value={formData.day}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={inputGroupStyles}>
          <label>Venue:</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={inputGroupStyles}>
          <label>Event Name:</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={inputGroupStyles}>
          <label>Event Coordinator Name:</label>
          <input
            type="text"
            name="eventCoordinatorName"
            value={formData.eventCoordinatorName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={inputGroupStyles}>
          <label>Event Coordinator Phone:</label>
          <input
            type="text"
            name="eventCoordinatorPhone"
            value={formData.eventCoordinatorPhone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={inputGroupStyles}>
          <label>Student Coordinator Name:</label>
          <input
            type="text"
            name="studentCoordinatorName"
            value={formData.studentCoordinatorName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={inputGroupStyles}>
          <label>Student Coordinator Phone:</label>
          <input
            type="text"
            name="studentCoordinatorPhone"
            value={formData.studentCoordinatorPhone}
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
  backgroundColor: "#2ecc71",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default AddEvent;
