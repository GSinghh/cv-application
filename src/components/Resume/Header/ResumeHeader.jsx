const ResumeHeader = ({ userData }) => {
    const githubLink = "https://www." + userData.github;
    const linkedinLink = "https://www." + userData.linkedin;
    return (
        <>
            <h1 className="resume-title">{userData.fullName}</h1>
            <div className="resume-header">
                <h3>{userData.email}</h3>
                <a href={githubLink} target="_blank">
                    <h3>{userData.github}</h3>
                </a>
                <a href={linkedinLink} target="_blank">
                    <h3>{userData.linkedin}</h3>
                </a>
            </div>
        </>
    );
};

export default ResumeHeader;
