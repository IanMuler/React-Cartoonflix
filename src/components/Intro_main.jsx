import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Intro_main.css'

function Intro_main() {
return (
    <main className="intro__main">
    <div className="profile-title">Who's watching?</div>
    <div>
        <ul className="intro__ul">
            <li className="intro__li">             
                <Link className="profile-pic" to="/home">
                    <div id="profile1" className="profile-img">
                        <div className="profile-border">
                    </div>
                    </div>
                    <div className="profile-name">Courage</div>
                </Link>
            </li>
            <li className="intro__li">
                <Link className="profile-pic" to="/home">
                    <div id="profile2"className="profile-img">
                        <div className="profile-border">
                    </div>
                    </div>
                    <div className="profile-name">Woody</div>
                </Link>
            </li>
            <li className="intro__li">
                <Link className="profile-pic" to="/home">
                    <div id="profile3"className="profile-img">
                        <div className="profile-border">
                    </div>
                    </div>
                    <div className="profile-name">Ranger</div>
                </Link>
            </li>
            <li className="intro__li" id="li-add">
                <Link className="profile-pic"  to="">
                    <div className="add-img">
                        <img src="https://i.ibb.co/mvH4wV7/File-Picture-Add.png" alt="Add"/>
                    </div>
                    <div className="profile-name">Add Profile</div>
                </Link>
            </li>

        </ul>
    </div>
</main>
)
}

export default Intro_main;