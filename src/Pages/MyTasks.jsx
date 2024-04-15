import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/MyTasks.css";
import editicon from "../assets/edit square.png";
import deleteicon from "../assets/delete.png";
import { Link } from "react-router-dom";

const MyTasks = () => {
  return (
    <>
      <main id ="top" className="mytask-body">
        <div className="mytask-text d-lg-flex justify-content-around align-items-center ">
          <h2>MyTasks</h2>
          <Link to="/newtask" className="add-new-task">+ Add New Task</Link>
        </div>
        {/* first card */}
        <Card className=" card-1">
          <div className="d-flex">
            <Card.Header className="text-danger  urgent">Urgent</Card.Header>
            <Button variant=" edit-btn">Edit</Button>
            <Button variant=" delete-btn">Delete</Button>
          </div>
          <hr />
          <Card.Body className="card-body">
            <Card.Title className="card-title">
              FinTech Website Update
            </Card.Title>
            <Card.Text className="card-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
              nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
              faucibus et magna. Interdum eu tempus ultricies cras neque mi.
              Eget tellus suspendisse et viverra.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* second card */}
        <Card className=" card-1">
          <div className="d-flex">
            <Card.Header className="text-success important-card ">
              Important
            </Card.Header>

            <Button variant=" edit-btn-2" className="">
              Edit
            </Button>
         
            <Button variant=" delete-btn-2">Delete</Button>
          </div>
          <hr />
          <Card.Body className="card-body">
            <Card.Title className="card-title">Agro Website Update</Card.Title>
            <Card.Text className="card-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
              nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
              faucibus et magna. Interdum eu tempus ultricies cras neque mi.
              Eget tellus suspendisse et viverra.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* third card */}
        <Card className=" card-1">
          <div className="d-flex">
            <Card.Header className="text-danger  urgent">Urgent</Card.Header>
          
            <Button variant=" edit-btn">Edit</Button>
         
            <Button variant=" delete-btn">Delete</Button>
          </div>
          <hr />
          <Card.Body className="card-body">
            <Card.Title className="card-title">
              FinTech Website Update
            </Card.Title>
            <Card.Text className="card-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
              nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
              faucibus et magna. Interdum eu tempus ultricies cras neque mi.
              Eget tellus suspendisse et viverra.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* fourth card */}
        <Card className=" card-1">
          <div className="d-flex">
            <Card.Header className="text-success important-card ">
              Important
            </Card.Header>
        
            <Button variant=" edit-btn-2" className="">
              Edit
            </Button>
          
            <Button variant=" delete-btn-2">Delete</Button>
          </div>
          <hr />
          <Card.Body className="card-body">
            <Card.Title className="card-title">Agro Website Update</Card.Title>
            <Card.Text className="card-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
              nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
              faucibus et magna. Interdum eu tempus ultricies cras neque mi.
              Eget tellus suspendisse et viverra.
            </Card.Text>
          </Card.Body>
        </Card>

        <h2 className="card-txt-bottom" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back To Top</h2>

      </main>
    </>
  );
};

export default MyTasks;
