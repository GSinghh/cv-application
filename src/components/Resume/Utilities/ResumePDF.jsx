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

const resumeStyles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        padding: 20,
        fontFamily: "PT Serif",
    },

    section: {
        padding: 10,
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

const Divider = ({ name }) => {
    return (
        <View>
            <Text style={dividerStyles.name}>{name}</Text>
            <Text style={dividerStyles.line}></Text>
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

const ResumePDF = ({ userData, expData, eduData, skillsData }) => (
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
            </View>
        </Page>
    </Document>
);

export default ResumePDF;
