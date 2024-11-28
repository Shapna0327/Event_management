import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  CalendarIcon as CalendarDaysIcon,
  LogoutIcon as ArrowLeftOnRectangleIcon,
} from "@heroicons/react/outline";
import "./StudentDashboard.css"; // Add your styles for the student dashboard

const StudentDashboard = () => {
  const navigate = useNavigate();

  // Handle logout by clearing the session
  const handleLogout = () => {
    localStorage.removeItem("studentSession");
    navigate("/student-login"); // Redirect to student login page
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Student Dashboard</h2>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/student-dashboard/home" className="menu-link">
              <HomeIcon className="icon" />
              <span>Home</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/student-dashboard/student-events" className="menu-link">
              <CalendarDaysIcon className="icon" />
              <span>Events</span>
            </Link>
          </li>
          <li className="menu-item">
            <button onClick={handleLogout} className="menu-link logout-button">
              <ArrowLeftOnRectangleIcon className="icon" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="content">
        {/* Render the specific page content inside the Outlet */}
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboard;
