import {
    Page,
    View,
    Document,
    StyleSheet,
    Link,
    Text,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
    },
    section: {
        padding: 10,
    },
});

const ResumePDF = ({ userData, expData, eduData, skillsData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View>
                <Text>{userData.fullName}</Text>
            </View>
        </Page>
    </Document>
);

export default ResumePDF;
