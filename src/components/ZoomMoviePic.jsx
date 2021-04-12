import React from 'react'
// import { Link } from 'react-router-dom';
import '../assets/styles/ZoomMoviePic.css'

function ZoomMoviePic(props) {

return (
    <div id="zoom-movie-pic" style={props.style} onMouseLeave={props.onMouseLeave}>
        <img src={props.img} alt=""/>
         <div className="zoom-pic-down">
            <div className="zoom-pic-down-buttons">
                <div className="buttons-left">
                    <div id="zoom-pic__play-btn" className="buttons">►</div>
                    <div className="buttons plus">+</div>
                </div>
                <div className="buttons" onClick={props.renderModal}><span className="down-arrow">˅</span></div>
            </div>
            <h3 id="zoom-movie-pic_title">{props.title}</h3>
            <div className="zoom-pic-down-info">
                <span className="categorie">{props.categorie}</span>
                <span className="duration">{props.duration}</span>
            </div>
        </div>
    </div>

)
}

export default ZoomMoviePic;