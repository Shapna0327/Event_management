import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
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
    eventDescription: "",
    eventFiles: [], // Store uploaded files
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file drop
  const onDrop = (acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      console.log("Accepted file:", file.name, file.type); // Log file name and MIME type
    });

    // Set the uploaded files to form data
    setFormData((prevData) => ({
      ...prevData,
      eventFiles: [...prevData.eventFiles, ...acceptedFiles],
    }));

    // Handle rejected files (invalid types or too large)
    rejectedFiles.forEach((file) => {
      console.log("Rejected file:", file.name, file.type); // Log rejected file details
    });
  };

  // Set up dropzone to accept specific file types
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ['image/jpeg', 'image/png', 'application/pdf'], // Only images and PDFs
    multiple: true, // Allow multiple files
    onDropRejected: (rejectedFiles) => {
      rejectedFiles.forEach((file) => {
        console.error("Rejected file due to invalid MIME type:", file.name);
      });
    },
  });
  

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = new FormData();
    // Append regular form data
    for (const key in formData) {
      if (key !== "eventFiles") {
        form.append(key, formData[key]);
      }
    }
  
    // Append files to FormData
    formData.eventFiles.forEach((file) => {
      form.append("files", file);
    });
  
    try {
      const response = await fetch(`${baseURL}/admin/add-event`, {
        method: "POST",
        body: form,
      });
  
      if (response.ok) {
        const data = await response.json();
        // Show success alert with event ID
        alert("Event added successfully. Event ID: " + data.eventId);
        // Optionally, you can clear the form or redirect the user
        setFormData({
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
          eventDescription: "",
          eventFiles: [],
        });
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

        <div style={inputGroupStyles}>
          <label>Event Description:</label>
          <textarea
            name="eventDescription"
            value={formData.eventDescription}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={inputGroupStyles}>
          <label>Event Files (Drag and Drop):</label>
          <div {...getRootProps()} style={dropzoneStyles}>
            <input {...getInputProps()} />
            <p>Drag & drop some files here, or click to select files</p>
          </div>
          <div>
            <ul>
              {formData.eventFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
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

const dropzoneStyles = {
  border: "2px dashed #ccc",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  marginBottom: "10px",
};

export default AddEvent;
