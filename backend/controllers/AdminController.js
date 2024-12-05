// controllers/adminController.js
const adminModel = require('../models/AdminModel'); // Adjust the path if necessary

// Admin login function
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await adminModel.getAdminByUsername(username);

        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        // Directly compare passwords without bcrypt
        if (password !== admin.password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful', admin });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Add a new student function
exports.addStudent = async (req, res) => {
    const { name, rollNo, department, studyingYear, section, phoneNumber, email, password } = req.body;

    try {
        // Call the model function to insert the student data
        await adminModel.addStudent({
            name,
            rollNo,
            department,
            studyingYear,
            section,
            phoneNumber,
            email,
            password,
        });

        res.status(201).json({ message: 'Student added successfully' });
    } catch (error) {
        console.error('Error adding student:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Controller to handle adding an event
exports.addEvent = async (req, res) => {
  try {
    const eventData = req.body;
    const files = req.files;

    // Input validation
    const requiredFields = [
      "fromTime",
      "toTime",
      "date",
      "day",
      "venue",
      "eventName",
      "eventDescription",
      "eventCoordinatorName",
      "eventCoordinatorPhone",
      "studentCoordinatorName",
      "studentCoordinatorPhone",
    ];

    for (const field of requiredFields) {
      if (!eventData[field]) {
        return res.status(400).json({ message: `${field} is required` });
      }
    }

    // Add event and get the inserted ID
    const result = await adminModel.addEvent(eventData);

    // Handle uploaded files if any
    if (files && files.length > 0) {
      const fileDetails = files.map((file) => ({
        eventId: result.insertId,
        fileName: file.filename,
        filePath: file.path,
        fileType: file.mimetype,
      }));
      await adminModel.addEventFiles(fileDetails);
    }

    // Return the event ID and success message
    res.status(201).json({ message: "Event added successfully", eventId: result.insertId });
  } catch (error) {
    console.error("Error in adding event:", error);
    res.status(500).json({ message: "Failed to add event", error });
  }
};


