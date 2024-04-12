import React from "react";
import { Link } from "react-router-dom";
import graphics from "../assets/hero-graphics.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <main>
        <div className="main-container row justify-content-between align-items-center m-auto container">
          <div className="first-container col-lg-7 mb-lg-3">
            <p className="first-heading">Manage your Task on </p>
            <p className="second-heading">Task Duty</p>
            <h1 className="home-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at
              platea tempus duis non eget. Hendrerit tortor fermentum bibendum
              mi nisl semper porttitor. Nec accumsan.
            </h1>
            {/* Use Link component to navigate to MyTasks page */}
            <Link to="/mytasks" className="home-button">
              <button className="btn">Go to My Tasks</button>
            </Link>
          </div>

          <div className="second-container col-lg-5">
            <img src={graphics} alt="go to my task button" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
