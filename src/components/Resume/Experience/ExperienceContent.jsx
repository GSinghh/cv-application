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
            <h3>{description}</h3>
        </div>
    );
};

export default ExperienceContent;
