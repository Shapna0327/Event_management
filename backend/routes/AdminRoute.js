// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const upload = require("../config/multerConfig");
const adminController = require('../controllers/AdminController'); // Adjust the path if necessary

// Login route
router.post('/login', adminController.login);

// Add Student route
router.post('/addstudent', adminController.addStudent);

// Add Event route with file upload
router.post("/add-event", upload.array("files", 5), adminController.addEvent);


module.exports = router;
