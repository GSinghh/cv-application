import '../styles/Resume.css'

const Resume = ({ userData, expData, eduData }) => {
    return (
        <div className = 'resume-container'>
            <h1 className = 'resume-title'>{userData.fullName}</h1>
            <div className = 'resume-header'>
                <h3>{userData.email}</h3> 
                <h3>{userData.phoneNumber}</h3>
                <h3>{userData.address}</h3>
            </div>
        </div>
    );
}

export default Resume;