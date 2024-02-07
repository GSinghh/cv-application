import { useState } from "react";
import arrowDown from "../assets/arrowDown.svg";

const Projects = ({ projectData, setProjectData }) => {
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
        setProjectData([...projectData, formData]);
        setFormData({
            name: "",
            technologies: "",
            link: "",
            description: "",
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
                <h1 className="edu-title">Projects</h1>
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
                    <label>Project Name</label>
                    <input
                        type="text"
                        className="edu-input"
                        value={formData.name}
                        onChange={handleInputChange}
                        name="name"
                        placeholder="i.e. Resume.IO"
                    />
                    <label>Technologies</label>
                    <input
                        type="text"
                        className="edu-input"
                        value={formData.technologies}
                        onChange={handleInputChange}
                        name="technologies"
                        placeholder="i.e. React.js"
                    />
                    <label>Link</label>
                    <input
                        type="text"
                        className="edu-input"
                        value={formData.link}
                        onChange={handleInputChange}
                        name="link"
                        placeholder="i.e. (Optional) cv-application-five.vercel.app"
                    />
                    <label>Description</label>
                    <textarea
                        className="exp-input"
                        onChange={handleInputChange}
                        value={formData.description}
                        name="description"
                        rows="4"
                        placeholder="Hit Enter After Each Sentence To Have Seperate Bullet Points"
                    ></textarea>
                    <button type="submit">Add Project</button>
                </form>
            )}
        </div>
    );
};

export default Projects;
