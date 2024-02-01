import {
    Page,
    View,
    Document,
    StyleSheet,
    Link,
    Text,
    Font,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        padding: 20,
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        paddingBottom: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 25,
    },
    section: {
        padding: 10,
    },
    linkFont: {
        fontSize: 12,
    },
    linkStyle: {
        textDecoration: "none",
        color: "black",
    },
    bulletPoints: {
        size: 10,
    },
});

const ResumePDF = ({ userData, expData, eduData, skillsData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View>
                <Text style={styles.title}>{userData.fullName}</Text>
                <View style={styles.header}>
                    <Text style={styles.linkFont}>{userData.email}</Text>
                    <Link
                        src={"https://www." + userData.github}
                        style={{ ...styles.linkFont, ...styles.linkStyle }}
                    >
                        {userData.github}
                    </Link>
                    <Link
                        src={"https://www." + userData.linkedin}
                        style={{ ...styles.linkFont, ...styles.linkStyle }}
                    >
                        {userData.linkedin}
                    </Link>
                </View>
            </View>
        </Page>
    </Document>
);

export default ResumePDF;
