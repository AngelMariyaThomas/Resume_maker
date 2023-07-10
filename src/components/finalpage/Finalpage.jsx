import React from "react";
import "./Finalpage.scss"
import { useSelector } from "react-redux";

const Finalpage = () => {
  const DATA = useSelector((state) => state.form);
  console.log(DATA, "==Data");
  return (
    <div className="finalResume-container">
      <div className="resume">
        <div className="resume-header">
          <h1>{DATA.name}</h1>
          <img src={DATA.file && URL.createObjectURL(DATA.file)} alt="Uploaded" />
        </div>
        <div className="resume-personal-details">
          <span>{DATA.age}</span>
          <span>{DATA.city}</span>
          <span>{DATA.number}</span>
          <span>{DATA.email} </span>
        </div>
        <div className="resume-body">
          <div className="resume-body-left">
            <div className="resume-body-skills">
              <h3>Skills</h3>
              {DATA.skills.map((item) => (
                <span>{item.skill}</span>
              ))}
            </div>
            <div className="resume-body-objective">
              <h3>Objective</h3>
              <p>psum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                sum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            </div>
          </div>
          <div className="resume-body-right">
            <div className="resume-body-education">
              <h2>Education Details</h2>
              {DATA.educationDetails.map((item) => (
                <ul>
                  <li>
                    <p>
                      <b>institute:</b> {item.institute}
                    </p>
                    <p>
                      <b>course :</b> {item.course}
                    </p>
                  </li>
                </ul>
              ))}
            </div>
            <div className="resume-body-experience">
              <h2>Experience</h2>
              {DATA.experiences.map((item) => (
                <ul>
                  <li>
                    <p>
                      <b>Title:</b>
                      {item.jobTitle}
                    </p>
                    <p>
                      <b>Company: </b>
                      {item.employer}
                    </p>
                    <p>
                      <b>Durtion:</b>
                      {item.duration}
                    </p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finalpage;