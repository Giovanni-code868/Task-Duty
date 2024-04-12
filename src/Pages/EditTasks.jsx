import React from 'react'
import "../styles/NewTask.css";
import backArrow from "../assets/chevron_left_FILL0_wght400_GRAD0_opsz24.svg";
import Form from 'react-bootstrap/Form';

const EditTasks = () => {
  return (
    <>
 <main id="top" className="thirdpage-main">
        <div className="container d-lg-flex newtask-heading">
          <img src={backArrow} alt="" className="backarrowimg" />
          <p>Edit Task</p>
        </div>

        <div className="textbox-container">
          <div className="textbox">
            <h3 className="textbox-heading">Task Title</h3>
            <input
              type="text"
              className="textbox-input"
              
            />
          </div>
        </div>

        <div className="textbox-container">
          <div className="description-box">
            <h3 className="textbox-heading">Description</h3>
            <input
              type="text"
              className="textbox-input"
          
            />
          </div>
        </div>

        <div className="textbox-container">
          <div className="textbox">
            <h3 className="textbox-heading">Tags</h3>

            <Form.Select aria-label="Default select example" className="form-select">
              <option></option>
              <option value="1" className="urge">Urgent</option>
              <option value="2">Important</option>
              <option value="3">Extremely Important</option>
            </Form.Select>
          </div>
        </div>

        <button className=" container done-btn">Done</button>
        <h2 className="card-txt-bottom" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back To Top</h2>
        

      </main>
    </>
  )
}

export default EditTasks
