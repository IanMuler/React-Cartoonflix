import React, { Fragment, useState } from 'react'
// import { Link } from 'react-router-dom';
import '../assets/styles/MoviePic.css'
import ZoomMoviePic from '../components/ZoomMoviePic';

function SeriePic(props) {

const [isHovering, setIsHovering] = useState(false)

const [zoomValue, setZoomValue] = useState({});

const hovering = (e) => {
    if(props.isMoving === false){
    window.timer = setTimeout(function(){setIsHovering(true)},500);  

    const carousel = document.querySelector(`.pics.${props.classPic}`);

    const left = (e.target.offsetLeft - carousel.scrollLeft);
    const width = e.target.offsetWidth
       
    setZoomValue({ left: left, width: width })
    }
}

const deshovering = () => {
    setIsHovering(false)    
    timeroff();
}

const timeroff = () => {
    clearTimeout(window.timer)
}

return (
    <Fragment>
        <div onMouseOver={hovering} onMouseLeave={timeroff} onMouseOut={timeroff} className={props.className}>
        <img src={props.img} alt={props.title}/>
       </div>
    {isHovering &&
    <ZoomMoviePic onMouseLeave={deshovering} 
    img={props.img} 
    style={zoomValue}
    title={props.title}
    categorie={props.categorie}
    duration={props.duration}/>
    }
    </Fragment>   
)
}

export default SeriePic;