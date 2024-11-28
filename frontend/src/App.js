import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Route Components
import Home from "./components/Pages/Home";

// Admin Route Components
import AdminLogin from "./components/Admin/Login/AdminLogin";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Students from "./components/Admin/Student/Student";
import AddStudent from "./components/Admin/Student/AddStudent";
import Event from "./components/Admin/Events/Event";
import AddEvent from "./components/Admin/Events/AddEvent";

// Student Route Components
import StudentLogin from "./components/Students/Login/StudentLogin";
import StudentDashboard from "./components/Students/Dashboard/StudentDashboard"; 
// import StudentHome from "./components/Students/Home/StudentHome";  // Ensure you have this component
import StudentEvents from "./components/Students/Events/StudentEvents"; // Ensure you have this component

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />

        {/* Admin routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="students" element={<Students />} />
          <Route path="addstudents" element={<AddStudent />} />
          <Route path="events" element={<Event />} />
          <Route path="addevents" element={<AddEvent />} />
        </Route>

        {/* Student routes with nested routing */}
        <Route path="/student-dashboard" element={<StudentDashboard />}>
          {/* Nested student routes */}
          {/* <Route path="home" element={<StudentHome />} /> */}
          <Route path="student-events" element={<StudentEvents />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
