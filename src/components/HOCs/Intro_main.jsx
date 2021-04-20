import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/HOCs/Intro_main.css'

function Intro_main(props) {

return (
<main className="intro__main">
    <div className="profile-title">Who's watching?</div>
    <div>
        <ul className="intro__ul">
            <Link className="profile-link" to="/home" value="courage" onClick={props.getProfile}>
            <li className="intro__li" value="courage" onClick={props.getProfile}>
                <div id="courage" className="profile-img">
                    <div className="profile-border" value="courage" onClick={props.getProfile}>
                    </div>
                </div>
                <div className="profile-name" value="courage" onClick={props.getProfile}>Courage</div>
            </li>
            </Link>
            <Link className="profile-link" to="/home" value="woody" onClick={props.getProfile}>
            <li className="intro__li" value="woody" onClick={props.getProfile}>
                <div id="woody" className="profile-img">
                    <div className="profile-border" value="woody" onClick={props.getProfile}>
                    </div>
                </div>
                <div className="profile-name" value="woody" onClick={props.getProfile}>Woody</div>
            </li>
            </Link>
            <Link className="profile-link" to="/home" value="ranger" onClick={props.getProfile}>
            <li className="intro__li" value="ranger" onClick={props.getProfile}>
                <div id="ranger" className="profile-img">
                    <div className="profile-border" value="ranger" onClick={props.getProfile}>
                    </div>
                </div>
                <div className="profile-name" value="ranger" onClick={props.getProfile}>Ranger</div>
            </li>
            </Link>
            <Link id="link-add" className="profile-link" to="/add-profile">
            <li className="intro__li" >
                <div className="add-img">
                    <img src="https://i.ibb.co/TH0n1ng/File-Picture-Add.png" alt="Add" />
                </div>
                <div className="profile-name">Add Profile</div>
            </li>
            </Link>

        </ul>
    </div>
</main>
)
}

export default Intro_main;