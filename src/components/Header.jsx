import "../styles/Header.css";
import downloadArrow from "../assets/downloadArrow.svg";
import githubMark from "../assets/github-mark.svg";
import ResumePDF from "../components/Resume/Utilities/ResumePDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Header = ({ userData, expData, eduData, skillsData }) => {
    return (
        <div className="header-container">
            <div className="title-container">
                <h1 className="title">Resume.IO</h1>
                <PDFDownloadLink
                    document={
                        <ResumePDF
                            userData={userData}
                            expData={expData}
                            eduData={eduData}
                            skillsData={skillsData}
                        />
                    }
                    fileName="Resume.pdf"
                >
                    {({ blob, url, loading, error }) => (
                        <button className="button">
                            Download
                            <img
                                className="button-icon"
                                src={downloadArrow}
                                alt="download icon"
                            />
                        </button>
                    )}
                </PDFDownloadLink>
            </div>
            <div className="footer">
                <a href="https://github.com/GSinghh">
                    <span className="footer-text">Created By: GSinghh</span>
                    <img
                        className="footer-icon"
                        src={githubMark}
                        alt="github"
                    />
                </a>
            </div>
        </div>
    );
};

export default Header;
