import "../styles/App.css";
import "../components/Header.jsx";
import Header from "../components/Header.jsx";
import UserData from "./UserData.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Resume from "./Resume.jsx";
import { useState } from "react";
// import circleinfo from "../assets/circleinfo";

const App = () => {
    const [userData, setUserData] = useState({});
    const [educationData, setEducationData] = useState([]);
    const [experienceData, setExperienceData] = useState([]);
    const [skillsData, setSkillsData] = useState({});

    return (
        <div className="container">
            <div className="left-side">
                <Header />
                <UserData userData={userData} setUserData={setUserData} />
                <Education
                    educationData={educationData}
                    setEducationData={setEducationData}
                />
                <Experience
                    experienceData={experienceData}
                    setExperienceData={setExperienceData}
                />
                <Skills skillsData={skillsData} setSkillsData={setSkillsData} />
            </div>
            <div className="right-side">
                <Resume
                    eduData={educationData}
                    userData={userData}
                    expData={experienceData}
                    skillsData={skillsData}
                />
            </div>
        </div>
    );
};

export default App;
