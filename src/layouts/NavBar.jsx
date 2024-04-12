import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import image from "../assets/image.jpeg";

const Navbar = () => {
  const location = useLocation();

  // Function to render the navbar items based on the current path
  const renderNavbarItems = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <ul className="navbar-nav">
              <li className="nav-item new-task">
                <h4>New Task</h4>
              </li>
              <li className="nav-item all-tasks">
                <h4>All Tasks</h4>
              </li>
              <div className="image-container">
                <img src={image} alt="Image" className="oval-bordered-image" />
              </div>
            </ul>
          </>
        );
      case "/mytasks":
        return (
          <>
            <li className="nav-item">
              <h4>New Task</h4>
            </li>
            <div className="image-container">
              <img src={image} alt="Image" className="oval-bordered-image" />
            </div>
          </>
        );
      case "/newtask":
      case "/edittask":
        return (
          <>
            <li className="nav-item">
              <h4>All Tasks</h4>
            </li>
            <div className="image-container">
              <img src={image} alt="Image" className="oval-bordered-image" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="navbar-expand-lg">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="task-duties d-flex align-items-center">
          <div className="custom-shape-text">
            <div className="semi-circle">
              <div className="letter">T</div>
            </div>
          </div>
          <p>Task Duty</p>
        </div>
        <ul className="navbar-nav">{renderNavbarItems()}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
