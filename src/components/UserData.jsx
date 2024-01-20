import "../styles/UserData.css";
import arrowUp from "../assets/arrowUp.svg";
import { useState } from "react";

const UserData = ({ userData, setUserData }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isClosing, setIsClosing] = useState(false);
    const [rotateArrow, setRotateArrow] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
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
            className={`user-container ${isOpen ? "open" : ""}
            ${isClosing ? "closing" : ""}`}
        >
            <div className="user-header">
                <h1 className="user-title">Personal Info</h1>
                <div className="arrow" onClick={toggleView}>
                    <img
                        src={arrowUp}
                        alt="arrow"
                        style={{
                            transform: rotateArrow
                                ? "rotate(180deg)"
                                : "rotate(0)",
                        }}
                    />
                </div>
            </div>
            {isOpen && (
                <form className="user-form">
                    <label>Full Name</label>
                    <input
                        type="text"
                        className="user-input"
                        value={userData.fullName}
                        onChange={handleInputChange}
                        name="fullName"
                        placeholder="i.e. John Doe"
                    />
                    <label>Email</label>
                    <input
                        type="text"
                        className="user-input"
                        value={userData.email}
                        onChange={handleInputChange}
                        name="email"
                        placeholder="i.e. email@domain.com"
                    />
                    <label>Github</label>
                    <input
                        type="text"
                        className="user-input"
                        value={userData.github}
                        onChange={handleInputChange}
                        name="github"
                        placeholder="i.e. github.com/username"
                    />
                    <label>Linkedin</label>
                    <input
                        type="text"
                        className="user-input"
                        value={userData.linkedin}
                        onChange={handleInputChange}
                        name="linkedin"
                        placeholder="i.e. linkedin.com/in/linkedin-username"
                    />
                </form>
            )}
        </div>
    );
};

export default UserData;
