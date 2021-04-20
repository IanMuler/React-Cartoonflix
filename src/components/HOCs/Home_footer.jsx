import React from 'react'
import '../../assets/styles/HOCs/Home_footer.css'
import { Link } from 'react-router-dom'

function Home_footer(props) {


return (
<footer id="footer">
    <ul className="footer_container-links">

        <li className="footer_link">
            <Link className="member-footer-link" to="/error">
                <span className="member-footer-link-content">Audio and Subtitles</span>
            </Link>
        </li>
        <li className="footer_link">
            <Link className="member-footer-link" to="/error">
                <span className="member-footer-link-content">Audio Description</span>
            </Link>
        </li>
        <li className="footer_link">
            <Link className="member-footer-link" to="/error">
                <span className="member-footer-link-content">Help Center</span>
            </Link>
        </li>
        <li className="footer_link">
            <Link className="member-footer-link" to="/error">
                <span className="member-footer-link-content">Gift Cards</span>
            </Link>
        </li>
        <li className="footer_link">
            <Link className="member-footer-link" to="/error">
                <span className="member-footer-link-content">Media Center</span>
            </Link>
        </li>
        <li className="footer_link">
            <Link className="member-footer-link" to="/error">
                <span className="member-footer-link-content">Investor Relations</span>
            </Link>
        </li>
        <li className="footer_link">
            <Link className="member-footer-link" to="/error">
                <span className="member-footer-link-content">Jobs</span>
            </Link>
        </li>
        <li className="footer_link">
            <Link className="member-footer-link" to="/error">
                <span className="member-footer-link-content">Terms of
                    Use</span>
            </Link>
        </li>
        <li className="footer_link">
            <Link className="member-footer-link" to="/error">
                <span className="member-footer-link-content">Privacy</span>
            </Link>
        </li>
        <li className="footer_link">
            <Link className="member-footer-link" to="/error">
                <span className="member-footer-link-content">Legal
                    Notices</span>
            </Link>
        </li>
        <li className="footer_link">
            <Link className="member-footer-link" to="/error">
                <span className="member-footer-link-content">Cookie Preferences</span>
            </Link>
        </li>
        <li className="footer_link">
            <Link className="member-footer-link" to="/error">
                <span className="member-footer-link-content">Corporate
                    Information</span>
            </Link>
        </li>
        <li className="footer_link">
            <Link className="member-footer-link" to="/error">
                <span className="member-footer-link-content">Contact Us</span>
            </Link>
        </li>
    </ul>
    <a href="https://github.com/IanMuler/React-Cartoonflix"><div className="icon-github"></div></a>
    <div className="footer_signature">
        <a href="https://github.com/IanMuler">
        <span>@IanMuler - 2021</span>
        </a>
    </div>
</footer>
)
}

export default Home_footer;