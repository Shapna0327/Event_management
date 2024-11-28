const pool = require("../config/db"); // Adjust the path to your database configuration file

// Fetch student by roll number
const getStudentByRollNo = async (rollNo) => {
  try {
    const [rows] = await pool.query("SELECT * FROM students WHERE roll_no = ?", [rollNo]);
    return rows[0] || null;
  } catch (error) {
    console.error("Error fetching student:", error);
    throw error;
  }
};

// Fetch all events
const getAllEvents = async () => {
    try {
      const [rows] = await pool.query("SELECT * FROM events ORDER BY event_date ASC");
      return rows;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  };
  
  module.exports = {
    getStudentByRollNo,
    getAllEvents,
  };