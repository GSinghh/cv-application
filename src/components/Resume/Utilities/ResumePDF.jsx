import {
    Page,
    View,
    Document,
    StyleSheet,
    Link,
    Text,
    Font,
} from "@react-pdf/renderer";

Font.register({
    family: "PT Serif",
    src: "http://fonts.gstatic.com/s/ptserif/v8/EgBlzoNBIHxNPCMwXaAhYPesZW2xOQ-xsNqO47m55DA.ttf",
});

const resumeStyles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        padding: 25,
        fontFamily: "PT Serif",
    },
    spacing: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    fontSizing: {
        fontSize: 12,
    },
    ListPadding: {
        padding: 5,
    },
    bottomSpacing: {
        paddingBottom: 5,
    },
    boldText: {
        fontWeight: "bold",
    },
});

const headerStyles = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign: "center",
        paddingBottom: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
    },
    linkFont: {
        fontSize: 12,
    },
    linkStyle: {
        color: "black",
    },
});

const dividerStyles = StyleSheet.create({
    name: {
        size: 15,
    },
    line: {
        borderBottom: "1 px solid",
        width: "100%",
    },
});

const eduStyles = StyleSheet.create({
    firstLine: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    secondLine: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

const listStyles = StyleSheet.create({
    bulletPoint: {
        paddingRight: 2,
    },
    listItem: {
        flexDirection: "row",
        paddingLeft: 7,
        paddingRight: 7,
    },
});

const Divider = ({ name }) => {
    return (
        <View>
            <Text style={dividerStyles.name}>{name}</Text>
            <Text style={dividerStyles.line}></Text>
        </View>
    );
};

const DisplayList = ({ description }) => {
    const lines = description.split("\n");
    return (
        <View>
            {lines.map((point, index) => (
                <View key={index} style={listStyles.listItem}>
                    <Text style={listStyles.bulletPoint}>•</Text>
                    <Text>{point}</Text>
                </View>
            ))}
        </View>
    );
};

const ResumeHeader = ({ fullName, email, github, linkedin }) => {
    return (
        <View>
            <Text style={headerStyles.title}>{fullName}</Text>
            <View style={headerStyles.header}>
                <Text style={headerStyles.linkFont}>{email}</Text>
                <Link
                    src={"https://www." + github}
                    style={{
                        ...headerStyles.linkFont,
                        ...headerStyles.linkStyle,
                    }}
                >
                    {github}
                </Link>
                <Link
                    src={"https://www." + linkedin}
                    style={{
                        ...headerStyles.linkFont,
                        ...headerStyles.linkStyle,
                    }}
                >
                    {linkedin}
                </Link>
            </View>
        </View>
    );
};

const ResEduContent = ({ school, startDate, endDate, degree, location }) => {
    return (
        <View style={resumeStyles.fontSizing}>
            <View style={eduStyles.firstLine}>
                <Text style={resumeStyles.boldText}>{school}</Text>
                <Text>{startDate + " - " + endDate}</Text>
            </View>
            <View style={eduStyles.secondLine}>
                <Text>{degree}</Text>
                <Text>{location}</Text>
            </View>
        </View>
    );
};

const ResumeEdu = ({ eduData }) => {
    return (
        <View style={resumeStyles.spacing}>
            {eduData.map((eduItem, index) => (
                <ResEduContent
                    key={index}
                    school={eduItem.school}
                    degree={eduItem.degree}
                    startDate={eduItem.startDate}
                    endDate={eduItem.endDate}
                    location={eduItem.location}
                />
            ))}
        </View>
    );
};

const ResExpContent = ({
    position,
    company,
    startDate,
    endDate,
    description,
    location,
}) => {
    return (
        <View style={resumeStyles.fontSizing}>
            <View style={eduStyles.firstLine}>
                <Text style={resumeStyles.boldText}>{position}</Text>
                <Text>{startDate + " - " + endDate}</Text>
            </View>
            <View style={eduStyles.secondLine}>
                <Text>{company}</Text>
                <Text>{location}</Text>
            </View>
            <View>
                <DisplayList description={description} />
            </View>
        </View>
    );
};

const ResumeExp = ({ expData }) => {
    return (
        <View style={resumeStyles.spacing}>
            {expData.map((expItem, index) => (
                <ResExpContent
                    key={index}
                    position={expItem.position}
                    company={expItem.company}
                    location={expItem.location}
                    startDate={expItem.startDate}
                    endDate={expItem.endDate}
                    description={expItem.description}
                />
            ))}
        </View>
    );
};

const ProjectsContent = ({ name, technologies, link, description }) => {
    return (
        <View style={resumeStyles.fontSizing}>
            <View style={eduStyles.firstLine}>
                <View
                    style={{ display: "flex", flexDirection: "row", gap: "5" }}
                >
                    <Text>{name}</Text>
                    <Text>({technologies})</Text>
                </View>
                <View>
                    {link ? (
                        <Link
                            src={"https://www." + link}
                            style={{
                                ...headerStyles.linkFont,
                                ...headerStyles.linkStyle,
                            }}
                        >
                            {link}
                        </Link>
                    ) : (
                        <Text> </Text>
                    )}
                </View>
            </View>
            <View>
                <DisplayList description={description} />
            </View>
        </View>
    );
};

const ResumeProjects = ({ projectData }) => {
    return (
        <View style={resumeStyles.spacing}>
            {projectData.map((project, index) => (
                <ProjectsContent
                    key={index}
                    name={project.name}
                    technologies={project.technologies}
                    link={project.link}
                    description={project.description}
                />
            ))}
        </View>
    );
};

const ResumeSkills = ({ lang, tech, tools }) => {
    return (
        <View style={{ ...resumeStyles.spacing, ...resumeStyles.fontSizing }}>
            <Text>Languages: {lang}</Text>
            <Text>Technologies: {tech}</Text>
            <Text>Tools: {tools}</Text>
        </View>
    );
};

const ResumePDF = ({ userData, expData, eduData, skillsData, projectData }) => (
    <Document>
        <Page size="A4" style={resumeStyles.page}>
            <View>
                <ResumeHeader
                    fullName={userData.fullName}
                    email={userData.email}
                    github={userData.github}
                    linkedin={userData.linkedin}
                />
            </View>
            <View>
                <Divider name={"Education"} />
                <ResumeEdu eduData={eduData} />
            </View>
            <View>
                <Divider name={"Work Experience"} />
                <ResumeExp expData={expData} />
            </View>
            <View>
                <Divider name={"Projects"} />
                <ResumeProjects projectData={projectData} />
            </View>
            <View>
                <Divider name={"Skills"} />
                <ResumeSkills
                    lang={skillsData.languages}
                    tech={skillsData.technologies}
                    tools={skillsData.tools}
                />
            </View>
        </Page>
    </Document>
);

export default ResumePDF;
