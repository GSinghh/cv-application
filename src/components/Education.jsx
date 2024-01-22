import "../styles/Education.css";
import { useState } from "react";
import arrowDown from "../assets/arrowDown.svg";
const Education = ({ educationData, setEducationData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [rotateArrow, setRotateArrow] = useState(false);
    const [formData, setFormData] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setEducationData([...educationData, formData]);
        setFormData({
            school: "",
            startDate: "",
            endDate: "",
            degree: "",
            location: "",
        });
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
                <form className="edu-form" onSubmit={handleSubmit}>
                    <label>School</label>
                    <input
                        type="text"
                        className="edu-input"
                        value={formData.school}
                        onChange={handleInputChange}
                        name="school"
                        placeholder="i.e. San Jose State University, UCLA"
                    />
                    <label>Degree</label>
                    <input
                        type="text"
                        className="edu-input"
                        value={formData.degree}
                        onChange={handleInputChange}
                        name="degree"
                        placeholder="i.e. Bachelor of Science, Computer Science"
                    />
                    <label>Start Date</label>
                    <input
                        type="text"
                        className="edu-input"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        name="startDate"
                        placeholder="i.e. January 2015"
                    />
                    <label>End Date</label>
                    <input
                        type="text"
                        className="edu-input"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        name="endDate"
                        placeholder="i.e. January 2016"
                    />
                    <label>Location</label>
                    <input
                        type="text"
                        className="edu-input"
                        value={formData.location}
                        onChange={handleInputChange}
                        name="location"
                        placeholder="i.e. Los Angeles, CA"
                    />
                    <button type="submit">Add Education</button>
                </form>
            )}
        </div>
    );
};

export default Education;
