const EducationContent = ({ eduData }) => {
    return (
        <div className="body-padding">
            <div className="first">
                <h3>{eduData.school}</h3>
                {eduData.startDate && eduData.endDate && (
                    <h3>{eduData.startDate + " - " + eduData.endDate}</h3>
                )}
            </div>
            <div className="second">
                <h3>{eduData.degree}</h3>
                <h3>{eduData.location}</h3>
            </div>
        </div>
    );
};

export default EducationContent;
