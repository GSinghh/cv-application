import "../styles/Skills.css";
import { useState } from "react";
import arrowDown from "../assets/arrowDown.svg";

const Skills = ({ skillsData, setSkillsData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [rotateArrow, setRotateArrow] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSkillsData({ ...skillsData, [name]: value });
    };

    const toggleView = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(!isOpen);
            setIsClosing(false);
            setRotateArrow(!rotateArrow);
        }, 500);
    };

    return (
        <div
            className={`skills-container ${isOpen ? "skills-open" : ""}
            ${isClosing ? "skills-closing" : ""}`}
        >
            <div className="skills-header">
                <h1 className="skills-title">Skills</h1>
                <div className="arrow" onClick={toggleView}>
                    <img
                        src={arrowDown}
                        alt="arrow"
                        style={{
                            transform: rotateArrow
                                ? "rotate(-180deg)"
                                : "rotate(0)",
                        }}
                    />
                </div>
            </div>
            {isOpen && (
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
                        placeholder="i.e. Git, MongoDB, REST API Design, Vite"
                    />
                </form>
            )}
        </div>
    );
};

export default Skills;
