import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../../assets/styles/pageItems/Home_header.css'

function Home_header(props) {
    
    useEffect(() => {
            window.scrollTo(0, 0);

            /*---------section class active-------------*/
            const section = document.getElementById(props.page)
            section.classList.add("a-active")
            /*------------------------------------*/
          },);
          
/*--------------------profiles dropdown list--------------------------------*/
const removeDropdownClass = () => {
    
    const dropdown = document.querySelector('.nav-dropdown-list')
    const arrow = document.querySelector('.transform-arrow')
    
    window.mytimeout = setTimeout(function(){
        dropdown.classList.remove('visible')
        arrow.classList.remove('rotated')
    }, 400);
}

const forceRemoveDropdownClass = () => {
    
    const dropdown = document.querySelector('.nav-dropdown-list')
    const arrow = document.querySelector('.transform-arrow')
    
        dropdown.classList.remove('visible')
        arrow.classList.remove('rotated')
}

const addDropdownClass = () => {

    const dropdown = document.querySelector('.nav-dropdown-list');
    const arrow = document.querySelector('.transform-arrow')

    dropdown.classList.add('visible')
    arrow.classList.add('rotated')

    clearTimeout(window.mytimeout);    
}

/*------------------------------------------------------------*/

const profileBackground =
    (props.profile === "courage")?{backgroundImage: 'url("https://i.ibb.co/c1n88Z3/Filepicture-Coraje.webp")'}
    :
    (props.profile === "woody")?{backgroundImage: 'url("https://i.ibb.co/gvF31FC/Filepicture-Woody.webp")'}
    :
    (props.profile === "ranger")?{backgroundImage: 'url("https://i.ibb.co/0Fmr687/Filepicture-Ranger-Green.webp")'}
    :
    {backgroundImage: 'url("")'}
    


return (
    <header id="header" className="home__header">
        <nav className="home__nav">
            <div className="nav-primary">
                <Link to="/">
                    <img src="https://i.ibb.co/ZJyC7jd/Cartoon-Flix-logo.png" alt="Logo"/>
                </Link>

                <ul className="nav-list">
                    <li><Link id="home" to="/home">Home</Link></li>
                    <li><Link id="series" to="/series">Series</Link></li>
                    <li><Link id="movies" to="/movies">Movies</Link></li>
                    <li><Link id="my-list" to="/my-list">My List</Link></li>
                </ul>

            </div>
            <div className="nav-secondary">
                <div className="btn icon-search"></div>
                <div onMouseOver={addDropdownClass} onMouseLeave={removeDropdownClass} className="nav-dropdown">
                    <div className="nav-profile" style={profileBackground}></div>
                    <span className="transform-arrow">▼</span>

                    <div className="nav-dropdown-list">

                        {props.profile !== "courage" &&
                        <Link to="/home" onClick={forceRemoveDropdownClass}>
                        <div onClick={props.getProfile} value="courage" className="nav-profile-item">
                            <div onClick={props.getProfile} value="courage" className="nav-profile first"></div>
                            <span onClick={props.getProfile} value="courage">Courage</span>
                        </div>
                        </Link>
                        }
                        {props.profile !== "woody" &&
                        <Link to="/home" onClick={forceRemoveDropdownClass}>
                        <div onClick={props.getProfile} value="woody" className="nav-profile-item">
                            <div onClick={props.getProfile} value="woody" className="nav-profile second"></div>
                            <span onClick={props.getProfile} value="woody">Woody</span>
                        </div>
                        </Link>
                        }
                        {props.profile !== "ranger" &&
                        <Link to="/home" onClick={forceRemoveDropdownClass}>
                        <div onClick={props.getProfile} value="ranger" className="nav-profile-item">
                            <div onClick={props.getProfile} value="ranger" className="nav-profile third"></div>
                            <span onClick={props.getProfile} value="ranger">Ranger</span>
                        </div>
                        </Link>
                        }    
                        <Link className="profile-manage" to="/">Manage Profiles</Link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
)
}

export default Home_header;