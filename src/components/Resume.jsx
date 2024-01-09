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
                <div className = "education-header">
                    <h2>Education</h2>
                    <div className = 'line'></div> 
                </div>
                <div className = "content-body">
                    <div className = "first">
                        <h3>{eduData.school}</h3>
                        {
                            eduData.startDate && eduData.endDate && <h3>{eduData.startDate + " - " + eduData.endDate}</h3>
                        }
                    </div>
                    <div className = "second">
                        <h3>{eduData.degree}</h3>
                        <h3>{eduData.location}</h3>
                    </div>
                </div>
            </div>
            <div className = 'workexp-container'>
                <div className = "workexp-header">
                    <h2>Work Experience</h2>
                    <div className = "line"></div>
                </div>
                <div className = "content-body">
                    <div className = "first">
                        <h3>{expData.position}</h3>
                        {
                            expData.startDate && expData.endDate && <h3>{expData.startDate + " - " + expData.endDate}</h3>
                        }
                    </div>
                    <div className = "second">
                        <h3>{expData.company}</h3>
                    </div>
                </div>
                <h3>{expData.description}</h3>
            </div>
        </div>
    );
}

export default Resume;