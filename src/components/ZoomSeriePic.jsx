import React from 'react'
// import { Link } from 'react-router-dom';
import '../assets/styles/ZoomSeriePic.css'

function ZoomSeriePic(props) {

return (
    <div id="zoom-pic" style={props.style} onMouseLeave={props.onMouseLeave}>
        <img src={props.img} alt=""/>
         <div className="zoom-pic-down">
            <div className="zoom-pic-down-buttons">
                <div className="buttons-left">
                    <div id="zoom-pic__play-btn" className="buttons">►</div>
                    <div className="buttons plus">+</div>
                </div>
                <div className="buttons" onClick={props.renderModal}><span className="down-arrow">˅</span></div>
            </div>
            <div className="zoom-pic-down-info">
                <span className="categorie">{props.categorie}</span>
                <span className="duration">{props.seasons} Seasons</span>
            </div>
        </div>
    </div>
)
}

export default ZoomSeriePic;