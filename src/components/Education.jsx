import "../styles/Education.css";
import { useState } from "react";
import arrowDown from "../assets/arrowDown.svg";
const Education = ({ educationData, setEducationData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [rotateArrow, setRotateArrow] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEducationData({ ...educationData, [name]: value });
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
            className={`edu-container ${isOpen ? "edu-open" : ""} ${
                isClosing ? "edu-closing" : ""
            }`}
        >
            <div className="edu-header">
                <h1 className="edu-title">Education</h1>
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
                <form className="edu-form">
                    <label>School</label>
                    <input
                        type="text"
                        className="edu-input"
                        value={educationData.school}
                        onChange={handleInputChange}
                        name="school"
                    />
                    <label>Degree</label>
                    <input
                        type="text"
                        className="edu-input"
                        value={educationData.degree}
                        onChange={handleInputChange}
                        name="degree"
                    />
                    <label>Start Date</label>
                    <input
                        type="text"
                        className="edu-input"
                        value={educationData.startDate}
                        onChange={handleInputChange}
                        name="startDate"
                    />
                    <label>End Date</label>
                    <input
                        type="text"
                        className="edu-input"
                        value={educationData.endDate}
                        onChange={handleInputChange}
                        name="endDate"
                    />
                    <label>Location</label>
                    <input
                        type="text"
                        className="edu-input"
                        value={educationData.location}
                        onChange={handleInputChange}
                        name="location"
                    />
                </form>
            )}
        </div>
    );
};

export default Education;
