import "../styles/Experience.css";
import arrowDown from "../assets/arrowDown.svg";
import { useState } from "react";

const Experience = ({ experienceData, setExperienceData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [rotateArrow, setRotateArrow] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setExperienceData({ ...experienceData, [name]: value });
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
            className={`exp-container ${isOpen ? "exp-open" : ""} ${
                isClosing ? "exp-closing" : ""
            }`}
        >
            <div className="exp-header">
                <h1 className="exp-title">Experience</h1>
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
            )}
        </div>
    );
};

export default Experience;
