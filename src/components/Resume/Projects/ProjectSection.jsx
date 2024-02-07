import ProjectContent from "./ProjectContent";
const ProjectSection = ({ projectData }) => {
    return (
        <>
            {projectData.map((project, index) => (
                <ProjectContent
                    key={index}
                    name={project.name}
                    technologies={project.technologies}
                    link={project.link}
                    description={project.description}
                />
            ))}
        </>
    );
};

export default ProjectSection;
