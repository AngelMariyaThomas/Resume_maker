import React from "react";
import { useDispatch } from "react-redux";
import { IoIosAddCircleOutline } from "react-icons/io";
import {
  updateAge,
  updateCity,
  updateEmail,
  updateImage,
  updateName,
  updateNumber,
} from "../../redux/formSlice";

import "./Details.scss"


import useFormHandles from "../../hooks/useFormHandles";
const Details = () => {
  const {
    DATA,
    handleAddEducation,
    handleAddExperience,
    handleAddSkill,
    handleChangeEducation,
    handleChangeExperience,
    handleChangeSkills,
  } = useFormHandles();
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    dispatch(updateImage(file));
  };


  return (
    <form className="form2-container">
   
      <div className="form2-aboutYou">
        <div className="form2-aboutYou-part1">
          <label>Enter your Name</label>
          <input
            type="text"
            value={DATA.name}
            onChange={(e) => dispatch(updateName(e.target.value))}
          />
          <label>Enter your age</label>
          <input
            type="number"
            required
            value={DATA.age}
            onChange={(e) => dispatch(updateAge(e.target.value))}
          />
        </div>
        <div className="form2-aboutYou-part2">
          <label>Enter your phone number</label>
          <input
            type="number"
            value={DATA.number}
            onChange={(e) => dispatch(updateNumber(e.target.value))}
          />
          <label>City</label>
          <input
            type="text"
            value={DATA.city}
            onChange={(e) => dispatch(updateCity(e.target.value))}
          />
        </div>
        <div className="form2-aboutYou-part3">
          <label>Upload ypur image</label>
          <input
            className="icon-fileUpload"
            type="file"
            name="profile"
            onChange={handleFileChange}
          />
          <label>Enter your email</label>
          <input
            type="email"
            value={DATA.email}
            required
            onChange={(e) => dispatch(updateEmail(e.target.value))}
          />
        </div>
      </div>

     
      <div className="otherDetails">
        <div className="otherDetails-education-part">
          <h3>Educational Details</h3>
          {DATA.educationDetails.map((education, index) => (
            <div key={index} className="otherDetails-education">
              <input
                type="text"
                name="institute"
                placeholder="Institute"
                value={education.institute}
                onChange={(e) => handleChangeEducation(e, index)}
              />

              <input
                type="text"
                name="course"
                placeholder="Qualification"
                value={education.course}
                onChange={(e) => handleChangeEducation(e, index)}
              />
            </div>
          ))}
          <IoIosAddCircleOutline
            size={30}
            style={{ cursor: "pointer" }}
            onClick={handleAddEducation}
          />
        </div>

        <div className="otherDetails-skills-part">
          <h3>Skills</h3>
          {DATA.skills.map((skillItem, index) => (
            <div key={index} className="otherDetails-skills">
              <input
                type="text"
                placeholder="Skill"
                name="skill"
                value={skillItem.skill}
                onChange={(e) => handleChangeSkills(e, index)}
              />
            </div>
          ))}
          <IoIosAddCircleOutline
            size={30}
            style={{ cursor: "pointer" }}
            onClick={handleAddSkill}
          />
        </div>

        <div className="otherDetails-experience-part">
          <h3>Experiences</h3>
          {DATA.experiences.map((experience, index) => (
            <div key={index} className="otherDetails-experience">
              <input
                type="text"
                name="jobTitle"
                placeholder="Job title"
                value={experience.jobTitle}
                onChange={(e) => handleChangeExperience(e, index)}
              />

              <input
                type="text"
                name="employer"
                placeholder="Employer"
                value={experience.employer}
                onChange={(e) => handleChangeExperience(e, index)}
              />

              <input
                type="number"
                name="duration"
                placeholder="Duration"
                value={experience.duration}
                onChange={(e) => handleChangeExperience(e, index)}
              />
            </div>
          ))}
          <IoIosAddCircleOutline
            size={30}
            style={{ cursor: "pointer" }}
            onClick={handleAddExperience}
          />
        </div>
      </div>
    </form>
  );
};

export default Details;