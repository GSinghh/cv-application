import "../styles/Resume.css";
import ResumeHeader from "../components/Resume/Header/ResumeHeader.jsx";
import LineHeader from "./Resume/Utilities/LineHeader.jsx";
import SkillsContent from "./Resume/Skills/SkillsContent.jsx";
import EducationSection from "./Resume/Education/EducationSection.jsx";
import ExperienceSection from "./Resume/Experience/ExperienceSection.jsx";
import ProjectSection from "./Resume/Projects/ProjectSection.jsx";

const Resume = ({ userData, expData, eduData, projectData, skillsData }) => {
    return (
        <div className="resume-container">
            <ResumeHeader userData={userData} />
            <div className="education-container">
                <LineHeader title={"Education"} />
                <EducationSection eduData={eduData} />
            </div>
            <div className="workexp-container">
                <LineHeader title={"Work Experience"} />
                <ExperienceSection expData={expData} />
            </div>
            <div className="project-container">
                <LineHeader title={"Projects"} />
                <ProjectSection projectData={projectData} />
            </div>
            <div className="skills-content-container">
                <LineHeader title={"Skills"} />
                <SkillsContent skillsData={skillsData} />
            </div>
        </div>
    );
};

export default Resume;
