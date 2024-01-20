import ExperienceContent from "./ExperienceContent";

const ExperienceSection = ({ expData }) => {
    return (
        <>
            {expData.map((expItem, index) => (
                <ExperienceContent
                    key={index}
                    position={expItem.position}
                    company={expItem.company}
                    location={expItem.location}
                    startDate={expItem.startDate}
                    endDate={expItem.endDate}
                    description={expItem.description}
                />
            ))}
        </>
    );
};

export default ExperienceSection;
