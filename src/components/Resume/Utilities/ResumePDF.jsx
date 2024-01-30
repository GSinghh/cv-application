import { Page, View, Document, StyleSheet } from "@react-pdf/renderer";
import ResumeHeader from "../Header/ResumeHeader";
import LineHeader from "./LineHeader";
import EducationSection from "../Education/EducationSection";
import ExperienceSection from "../Experience/ExperienceSection";
import SkillsContent from "../Skills/SkillsContent";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#FFFFFF",
    },
    section: {
        padding: 10,
    },
});

const ResumePDF = ({ userData, expData, eduData, skillsData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}></View>
            <View style={styles.section}></View>
        </Page>
    </Document>
);

export default ResumePDF;
