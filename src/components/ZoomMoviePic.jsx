import React from 'react'
// import { Link } from 'react-router-dom';
import '../assets/styles/ZoomMoviePic.css'

function ZoomMoviePic(props) {

return (
<div id="zoom-movie-pic" style={props.style} onMouseLeave={props.onMouseLeave}>
    <img src={props.img} alt="" />
    <div className="zoom-pic-down">
        <div className="zoom-pic-down-buttons">
            <div className="buttons-left">
                <div id="zoom-pic__play-btn" className="buttons">
                    <svg viewBox="0 0 24 24">
                        <path d="M6 4l15 8-15 8z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className="buttons">
                    <svg viewBox="0 0 24 24">
                        <path d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <div className="buttons" onClick={props.renderModal}>
                <svg viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M5.689 7.924L4.387 9.442 12.038 16l7.651-6.558-1.302-1.518-6.349 5.442z"></path>
                </svg>
            </div>
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