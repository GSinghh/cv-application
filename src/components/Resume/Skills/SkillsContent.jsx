const SkillsContent = ({ skillsData }) => {
    return (
        <div className="body-padding">
            {skillsData.languages && <h3>Languages: {skillsData.languages}</h3>}
            {skillsData.technologies && (
                <h3>Technologies: {skillsData.technologies}</h3>
            )}
            {skillsData.tools && <h3>Tools: {skillsData.tools}</h3>}
        </div>
    );
};

export default SkillsContent;
