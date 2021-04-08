import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom';
import '../assets/styles/ZoomPic.css'

function ZoomPic(props) {

return (
    <div id="zoom-pic" style={props.style} onMouseLeave={props.onMouseLeave}>
        <img src={props.img} alt=""/>
         <div className="zoom-pic-down">
            <div className="zoom-pic-down-buttons">
                <div className="buttons-left">
                    <div id="zoom-pic__play-btn" className="buttons">►</div>
                    <div className="buttons plus">+</div>
                    <div className="buttons icon-thumbs-up"></div>
                    <div className="buttons icon-thumbs-down"></div>
                </div>
                <div className="buttons"><span className="down-arrow">˅</span></div>
            </div>
            <div className="zoom-pic-down-info">
                <span className="categorie">{props.categorie}</span>
                <span className="duration">{props.seasons} Seasons</span>
            </div>
        </div>
    </div>
)
}

export default ZoomPic;