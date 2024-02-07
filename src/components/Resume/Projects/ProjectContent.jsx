const ProjectContent = ({ name, technologies, link, description }) => {
    return (
        <div className="body-padding">
            <div className="first">
                <div className="name-tech">
                    <h3>{name}</h3>
                    <h3>({technologies})</h3>
                </div>
                <h3>
                    <a href={"https://" + link} target="_blank">
                        {link}
                    </a>
                </h3>
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

export default ProjectContent;
