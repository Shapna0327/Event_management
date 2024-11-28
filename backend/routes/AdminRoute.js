// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/AdminController'); // Adjust the path if necessary

// Login route
router.post('/login', adminController.login);

// Add Student route
router.post('/addstudent', adminController.addStudent);

// Route to add an event
router.post("/add-event", adminController.addEvent);

module.exports = router;
