import "../styles/Header.css";
import downloadArrow from "../assets/downloadArrow.svg";
import githubMark from "../assets/github-mark.svg";
const Header = () => {
    return (
        <div className="header-container">
            <div className="title-container">
                <h1 className="title">Resume.IO</h1>
                <button type="button" className="button">
                    <span className="button-text">Download</span>
                    <img
                        className="button-icon"
                        src={downloadArrow}
                        alt="download icon"
                    />
                </button>
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
