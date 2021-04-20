import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/HOCs/Intro_header.css'

function Intro_header() {
return (
    <header className="intro__header">
        <nav className="intro__nav">
            <Link to="/">
                <img src="https://i.ibb.co/ZJyC7jd/Cartoon-Flix-logo.png" alt="Logo" />
            </Link>
        </nav>
    </header>
)
}

export default Intro_header;