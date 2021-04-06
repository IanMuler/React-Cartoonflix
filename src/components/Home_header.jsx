import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/Home_header.css'

function Home_header() {
return (
    <header id="header" className="home__header">
        <nav className="home__nav">
            <div className="nav-primary">
                <Link to="/">
                    <img src="https://i.ibb.co/0f8zbPq/Cartoon-Flix-logo.png" alt="Logo"/>
                </Link>

                <ul className="nav-list">
                    <li><Link className="a-active" to="/home">Home</Link></li>
                    <li><Link to="/series">Series</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/my-list">My List</Link></li>
                </ul>
            </div>
            <div className="nav-secondary">
                <div className="btn icon-search"></div>
                <div className="nav-dropdown">
                    <div className="nav-profile"></div>
                    <span id="transform-arrow">▼</span>

                    <div className="nav-dropdown-list">
                        <Link to="/">
                        <div className="nav-profile-item">
                            <div className="nav-profile nd"></div>
                            <span>Woody</span>
                        </div>
                        </Link>
                        <Link to="/">
                        <div className="nav-profile-item">
                            <div className="nav-profile rd"></div>
                            <span to="/">Ranger</span>
                        </div>
                        </Link>
                        <Link className="profile-manage" to="/">Manage Profiles</Link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
)
}

export default Home_header;