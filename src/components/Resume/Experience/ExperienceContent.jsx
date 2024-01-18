const ExperienceContent = ({ expData }) => {
    return (
        <div className="body-padding">
            <div className="first">
                <h3>{expData.position}</h3>
                {expData.startDate && expData.endDate && (
                    <h3>{expData.startDate + " - " + expData.endDate}</h3>
                )}
            </div>
            <div className="second">
                <h3>{expData.company}</h3>
            </div>
            <h3>{expData.description}</h3>
        </div>
    );
};

export default ExperienceContent;
