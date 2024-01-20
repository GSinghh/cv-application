import EducationContent from "./EducationContent";

const EducationSection = ({ eduData }) => {
    return (
        <>
            {eduData.map((eduItem, index) => (
                <EducationContent
                    key={index}
                    school={eduItem.school}
                    degree={eduItem.degree}
                    startDate={eduItem.startDate}
                    endDate={eduItem.endDate}
                    location={eduItem.location}
                />
            ))}
        </>
    );
};

export default EducationSection;
