const EducationContent = ({ school, startDate, endDate, degree, location }) => {
    return (
        <div className="body-padding">
            <div className="first">
                <h3>{school}</h3>
                <h3>{startDate + " - " + endDate}</h3>
            </div>
            <div className="second">
                <h3>{degree}</h3>
                <h3>{location}</h3>
            </div>
        </div>
    );
};

export default EducationContent;
