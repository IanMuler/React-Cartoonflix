import React from 'react'
import { Link } from 'react-router-dom'

function Intro_header() {
return (
    <header>
        <nav>
            <Link to="/">
                <img src="https://i.ibb.co/0f8zbPq/Cartoon-Flix-logo.png" alt="Logo" />
            </Link>
        </nav>
    </header>
)
}

export default Intro_header;