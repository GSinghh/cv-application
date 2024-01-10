import "../styles/Skills.css";
import { useState } from "react";

const Skills = ({ skillsData, setSkillsData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSkillsData({ ...skillsData, [name]: value });
  };

  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>
      <form className="skills-form">
        <label>Languages</label>
        <input
          type="text"
          className="skills-input"
          value={skillsData.languages}
          onChange={handleInputChange}
          name="languages"
          placeholder="i.e. Javascript, Python, C++"
        />
        <label>Technologies</label>
        <input
          type="text"
          className="skills-input"
          value={skillsData.technologies}
          onChange={handleInputChange}
          name="technologies"
          placeholder="i.e. React.js, Express.js, Node.js"
        />
        <label>Tools</label>
        <input
          type="text"
          className="skills-input"
          value={skillsData.tools}
          onChange={handleInputChange}
          name="tools"
          placeholder="i.e. Git, MongoDB, Vite"
        />
      </form>
    </div>
  );
};

export default Skills;
