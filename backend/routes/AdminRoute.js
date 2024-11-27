// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/AdminController'); // Adjust the path if necessary

// Login route
router.post('/login', adminController.login);

module.exports = router;
