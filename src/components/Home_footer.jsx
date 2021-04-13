import React from 'react'
import '../assets/styles/Home_footer.css'
function Home_footer(props) {


return (
<footer id="footer">
    <ul className="footer_container-links">

        <li className="footer_link">
            <a className="member-footer-link" href="/browse/subtitles">
                <span className="member-footer-link-content">Audio and Subtitles</span>
            </a>
        </li>
        <li className="footer_link">
            <a className="member-footer-link" href="/browse/audio-description">
                <span className="member-footer-link-content">Audio Description</span>
            </a>
        </li>
        <li className="footer_link">
            <a className="member-footer-link" href="https://help.netflix.com/">
                <span className="member-footer-link-content">Help Center</span>
            </a>
        </li>
        <li className="footer_link">
            <a className="member-footer-link" href="/redeem">
                <span className="member-footer-link-content">Gift Cards</span>
            </a>
        </li>
        <li className="footer_link">
            <a className="member-footer-link" href="https://media.netflix.com/">
                <span className="member-footer-link-content">Media Center</span>
            </a>
        </li>
        <li className="footer_link">
            <a className="member-footer-link" href="http://ir.netflix.com/">
                <span className="member-footer-link-content">Investor Relations</span>
            </a>
        </li>
        <li className="footer_link">
            <a className="member-footer-link" href="https://jobs.netflix.com/">
                <span className="member-footer-link-content">Jobs</span>
            </a>
        </li>
        <li className="footer_link">
            <a className="member-footer-link" href="https://help.netflix.com/legal/termsofuse">
                <span className="member-footer-link-content">Terms of
                    Use</span>
            </a>
        </li>
        <li className="footer_link">
            <a className="member-footer-link" href="https://help.netflix.com/legal/privacy">
                <span className="member-footer-link-content">Privacy</span>
            </a>
        </li>
        <li className="footer_link">
            <a className="member-footer-link" href="https://help.netflix.com/legal/notices">
                <span className="member-footer-link-content">Legal
                    Notices</span>
            </a>
        </li>
        <li className="footer_link">
            <a className="member-footer-link" href="/Cookies">
                <span className="member-footer-link-content">Cookie Preferences</span>
            </a>
        </li>
        <li className="footer_link">
            <a className="member-footer-link" href="https://help.netflix.com/legal/corpinfo">
                <span className="member-footer-link-content">Corporate
                    Information</span>
            </a>
        </li>
        <li className="footer_link">
            <a className="member-footer-link" href="https://help.netflix.com/contactus">
                <span className="member-footer-link-content">Contact Us</span>
            </a>
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