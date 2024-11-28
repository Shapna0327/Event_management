const express = require("express");
const router = express.Router();
const studentController = require("../controllers/StudentController");

// Student login and logout routes
router.post("/login", studentController.login);
router.post("/logout", studentController.logout);

// Route to fetch all events for students
router.get("/events", studentController.getAllEvents);

module.exports = router;
