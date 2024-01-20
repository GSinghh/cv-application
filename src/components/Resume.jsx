import "../styles/Resume.css";
import ResumeHeader from "../components/Resume/Header/ResumeHeader.jsx";
import LineHeader from "./Resume/Utilities/LineHeader.jsx";
import ExperienceContent from "./Resume/Experience/ExperienceContent.jsx";
import SkillsContent from "./Resume/Skills/SkillsContent.jsx";
import EducationSection from "./Resume/Education/EducationSection.jsx";

const Resume = ({ userData, expData, eduData, skillsData }) => {
    return (
        <div className="resume-container">
            <ResumeHeader userData={userData} />
            <div className="education-container">
                <LineHeader title={"Education"} />
                <EducationSection eduData={eduData} />
            </div>
            <div className="workexp-container">
                <LineHeader title={"Work Experience"} />
                <ExperienceContent expData={expData} />
            </div>
            <div classNames="skills-content-container">
                <LineHeader title={"Skills"} />
                <SkillsContent skillsData={skillsData} />
            </div>
        </div>
    );
};

export default Resume;
