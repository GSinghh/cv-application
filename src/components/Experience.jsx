import "../styles/Experience.css";
import { useState } from "react";

const Experience = ({ experienceData, setExperienceData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExperienceData({ ...experienceData, [name]: value });
  };

  return (
    <div className="exp-container">
      <h1 className="exp-title">Experience</h1>
      <form className="exp-form">
        <label>Position</label>
        <input
          type="text"
          className="exp-input"
          onChange={handleInputChange}
          value={experienceData.position}
          name="position"
        />
        <label>Company</label>
        <input
          type="text"
          className="exp-input"
          onChange={handleInputChange}
          value={experienceData.company}
          name="company"
        />
        <label>Start Date</label>
        <input
          type="text"
          className="exp-input"
          onChange={handleInputChange}
          value={experienceData.startDate}
          name="startDate"
        />
        <label>End Date</label>
        <input
          type="text"
          className="exp-input"
          onChange={handleInputChange}
          value={experienceData.endDate}
          name="endDate"
        />
        <label>Job Description</label>
        <textarea
          className="exp-input"
          onChange={handleInputChange}
          value={experienceData.description}
          name="description"
          rows="4"
        ></textarea>
      </form>
    </div>
  );
};

export default Experience;
