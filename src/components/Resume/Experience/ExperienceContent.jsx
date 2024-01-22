const ExperienceContent = ({
    position,
    company,
    startDate,
    endDate,
    description,
    location,
}) => {
    return (
        <div className="body-padding">
            <div className="first">
                <h3>{position}</h3>
                <h3>{startDate + " - " + endDate}</h3>
            </div>
            <div className="second">
                <h3>{company}</h3>
                <h3>{location}</h3>
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

export default ExperienceContent;
