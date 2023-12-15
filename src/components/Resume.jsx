import '../styles/Resume.css'

const Resume = ({ userData, expData, eduData }) => {
    return (
        <div className = 'resume-container'>
            <h1 className = 'resume-title'>{userData.fullName}</h1>
        </div>
    );
}

export default Resume;