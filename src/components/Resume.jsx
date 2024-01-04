import '../styles/Resume.css'

const Resume = ({ userData, expData, eduData }) => {
    const githubLink = "https://www." + userData.github;
    const linkedinLink = "https://www." + userData.linkedin;
    return (
        <div className = 'resume-container'>
            <h1 className = 'resume-title'>
                {userData.fullName}
            </h1>
            <div className = 'resume-header'>
                <h3>{userData.email}</h3> 
                <a href = {githubLink} target = "_blank">
                    <h3>{userData.github}</h3>   
                </a>
                <a href = {linkedinLink} target = "_blank">
                    <h3>{userData.linkedin}</h3>
                </a>
            </div>
            <div className = 'education-container'>
                <h2>Education</h2>
                <div className = 'line'></div>

                <h3>{eduData.school}</h3>
                <h3>{eduData.degree}</h3>
                <h3>{eduData.startDate}</h3>
                <h3>{eduData.endDate}</h3>
                <h3>{eduData.location}</h3>
            </div>
            <div className = 'workexp-container'>
                <h2>Work Experience</h2>
                <div className = "line"></div>
                <h3>{expData.position}</h3>
                <h3>{expData.company}</h3>
                <h3>{expData.startDate}</h3>
                <h3>{expData.endDate}</h3>
                <h3>{expData.description}</h3>
            </div>
        </div>
    );
}

export default Resume;