import React, { Fragment, useState } from 'react'
// import { Link } from 'react-router-dom';
import '../assets/styles/SeriePic.css'
import ZoomPic from '../components/ZoomPic';

function SeriePic(props) {

const [isHovering, setIsHovering] = useState(false)

const [zoomValue, setZoomValue] = useState({});

const hovering = (e) => {
    window.timer = setTimeout(function(){setIsHovering(true)},500);  

    const carousel = document.querySelector(`.pics.${props.classPic}`);

    const left = (e.target.offsetLeft - carousel.scrollLeft);
    const width = e.target.offsetWidth
       
    setZoomValue({ left: left, width: width })
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
    <ZoomPic onMouseLeave={deshovering} 
    img={props.img} 
    style={zoomValue}
    categorie={props.categorie}
    seasons={props.seasons}/>
    }
    </Fragment>   
)
}

export default SeriePic;