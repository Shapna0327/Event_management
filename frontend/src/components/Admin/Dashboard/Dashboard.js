import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  UserGroupIcon,
  CalendarIcon as CalendarDaysIcon,
  LogoutIcon as ArrowLeftOnRectangleIcon,
} from "@heroicons/react/outline";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Redirect to login
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/dashboard" className="menu-link">
              <HomeIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/dashboard/students" className="menu-link">
              <UserGroupIcon className="icon" />
              <span>Students</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/dashboard/events" className="menu-link">
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
        <Outlet />
    </div>
  );
};

export default Dashboard;
