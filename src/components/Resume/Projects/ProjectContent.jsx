const ProjectContent = ({ name, technologies, link, description }) => {
    return (
        <div className="body-padding">
            <div className="first">
                <h3>{position}</h3>
                <h3>{link}</h3>
            </div>
            <div className="job-description">
                <ul>
                    {description.split("\n").map((point, index) => (
                        <li key={index}>
                            <h3>{point}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
