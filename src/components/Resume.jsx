import '../styles/Resume.css'

const Resume = ({ userData, expData, eduData }) => {
    return (
        <div className = 'resume-container'>
            <h1 className = 'resume-title'>
                {userData.fullName}
            </h1>
            <div className = 'resume-header'>
                <h3>{userData.email}</h3> 
                <h3>{userData.github}</h3>
                <h3>{userData.linkedin}</h3>
            </div>
            <div className = 'edu-container'>
                <h3>{eduData.school}</h3>
                <h3>{eduData.degree}</h3>
                <h3>{eduData.startDate}</h3>
                <h3>{eduData.endDate}</h3>
                <h3>{eduData.location}</h3>
            </div>
            <div className = 'work-container'>
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