import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Banner from "./components/Banner/Banner";
import Chart from "./components/Chart/Chart";

function App() {
  // State to control dark mode
  const [darkMode, setDarkMode] = useState(false);

  // State to control whether the sidebar is open or closed
  const [sidebarOpen, setSidebarOpen] = useState(true); // Set to true initially, or false if you want it closed by default

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Define CSS class for the App element
  const appClassName = `App ${darkMode ? "dark" : ""} ${
    sidebarOpen ? "sidebar-open" : "sidebar-closed"
  }`;

  return (
    <Router>
      <div className={appClassName}>
        <SideBar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          sidebarClosed={sidebarOpen}
          handleSidebarToggle={toggleSidebar}
        />
        <Routes>
          <Route path="/" element={<Chart />} />
          <Route path="/about" element={<Banner />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
