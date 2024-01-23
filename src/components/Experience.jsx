import "../styles/Experience.css";
import arrowDown from "../assets/arrowDown.svg";
import { useState } from "react";

const Experience = ({ experienceData, setExperienceData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [rotateArrow, setRotateArrow] = useState(false);
    const [formData, setFormData] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleView = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(!isOpen);
            setIsClosing(false);
            setRotateArrow(!rotateArrow);
        }, 500);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setExperienceData([...experienceData, formData]);
        setFormData({
            position: "",
            startDate: "",
            endDate: "",
            company: "",
            description: "",
            location: "",
        });
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
                <form className="exp-form" onSubmit={handleSubmit}>
                    <label>Position</label>
                    <input
                        type="text"
                        className="exp-input"
                        onChange={handleInputChange}
                        value={formData.position}
                        name="position"
                        placeholder="i.e. Software Engineer"
                    />
                    <label>Company</label>
                    <input
                        type="text"
                        className="exp-input"
                        onChange={handleInputChange}
                        value={formData.company}
                        name="company"
                        placeholder="i.e. Apple"
                    />
                    <label>Location</label>
                    <input
                        type="text"
                        className="exp-input"
                        onChange={handleInputChange}
                        value={formData.location}
                        name="location"
                        placeholder="i.e. Cupertino, CA"
                    />
                    <label>Start Date</label>
                    <input
                        type="text"
                        className="exp-input"
                        onChange={handleInputChange}
                        value={formData.startDate}
                        name="startDate"
                        placeholder="i.e. January 2015"
                    />
                    <label>End Date</label>
                    <input
                        type="text"
                        className="exp-input"
                        onChange={handleInputChange}
                        value={formData.endDate}
                        name="endDate"
                        placeholder="i.e. January 2016"
                    />
                    <label>Job Description</label>
                    <textarea
                        className="exp-input"
                        onChange={handleInputChange}
                        value={formData.description}
                        name="description"
                        rows="4"
                        placeholder="Hit Enter After Each Sentence To Have Seperate Bullet Points"
                    ></textarea>
                    <button type="submit">Add Experience</button>
                </form>
            )}
        </div>
    );
};

export default Experience;
