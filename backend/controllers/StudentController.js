const studentModel = require("../models/StudentModel");

// Simple in-memory session store
const sessionStore = {};

// Generate a simple session ID
const generateSessionId = () => {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

// Student login
exports.login = async (req, res) => {
  const { rollNo, password } = req.body;

  try {
    const student = await studentModel.getStudentByRollNo(rollNo);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Compare plain-text passwords
    if (password !== student.password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate a session ID and store it
    const sessionId = generateSessionId();
    sessionStore[sessionId] = {
      studentId: student.id,
      rollNo: student.roll_no,
      createdAt: Date.now(),
    };

    res.status(200).json({ message: "Login successful", sessionId });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Logout (optional)
exports.logout = (req, res) => {
  const { sessionId } = req.body;

  if (sessionId && sessionStore[sessionId]) {
    delete sessionStore[sessionId];
    return res.status(200).json({ message: "Logout successful" });
  }

  return res.status(400).json({ message: "Invalid session ID" });
};

// Fetch all events
exports.getAllEvents = async (req, res) => {
    try {
      const events = await studentModel.getAllEvents();
      res.status(200).json({ events });
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ message: "Server error" });
    }
  };

