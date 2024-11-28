// models/AdminModel.js
const pool = require('../config/db'); // Adjust the path if necessary

// Function to get admin by username
const getAdminByUsername = async (username) => {
    try {
        const [rows] = await pool.query('SELECT * FROM admin WHERE username = ?', [username]);
        if (rows.length === 0) {
            return null;
        }
        return rows[0];
    } catch (error) {
        console.error('Error fetching admin from DB:', error);
        throw error;
    }
};

// Function to add a new student
const addStudent = async (studentData) => {
    const { name, rollNo, department, studyingYear, section, phoneNumber, email, password } = studentData;

    try {
        const query = `
            INSERT INTO students 
            (name, roll_no, department, studying_year, section, phone_number, email, password) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [name, rollNo, department, studyingYear, section, phoneNumber, email, password];

        await pool.query(query, values);
    } catch (error) {
        console.error('Error inserting student into DB:', error);
        throw error;
    }
};

// Function to add an event
const addEvent = async (eventData) => {
    const {
      fromTime,
      toTime,
      date,
      day,
      venue,
      eventName,
      eventCoordinatorName,
      eventCoordinatorPhone,
      studentCoordinatorName,
      studentCoordinatorPhone,
    } = eventData;
  
    const query = `
      INSERT INTO events (
        from_time, to_time, event_date, day, venue, event_name,
        event_coordinator_name, event_coordinator_phone,
        student_coordinator_name, student_coordinator_phone
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
  
    const values = [
      fromTime,
      toTime,
      date,
      day,
      venue,
      eventName,
      eventCoordinatorName,
      eventCoordinatorPhone,
      studentCoordinatorName,
      studentCoordinatorPhone,
    ];
  
    try {
      const [result] = await pool.query(query, values);
      return result;
    } catch (error) {
      console.error("Error inserting event into database:", error);
      throw error;
    }
  };
  

module.exports = {
    getAdminByUsername,
    addStudent,
    addEvent,
};
