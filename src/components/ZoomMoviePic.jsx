import React from 'react'
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../actions'
import '../assets/styles/ZoomMoviePic.css'

function ZoomMoviePic(props) {

const handleSetFavorite = () => {
    props.setFavorite(
        {
        "id": props.id,
        "title": props.title,
        "duration": props.duration,
        "categorie": props.categorie,
        "img": props.img, 
        "banner": props.banner,
        "synopsis": props.synopsis
        }, 
        props.profile
    )
}

const handleDeleteFavorite = (itemId) => {
props.deleteFavorite(itemId, props.profile)
}


return (
<div id="zoom-movie-pic" style={props.style} onMouseLeave={props.onMouseLeave}>
    <img src={props.img} alt="" />
    <div className="zoom-pic-down">
        <div className="zoom-pic-down-buttons">
            <div className="buttons-left">
                <div id="zoom-pic__play-btn" className="buttons">
                {/* PLAY */}                
                    <svg viewBox="0 0 24 24">
                        <path d="M6 4l15 8-15 8z" fill="currentColor"></path>
                    </svg>
                </div>
                <div onClick={handleSetFavorite} className="buttons">
                {/* ADD */}
                    <svg viewBox="0 0 24 24">
                        <path d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z" fill="currentColor"></path>
                    </svg>
                </div>
                <div onClick={()=>{handleDeleteFavorite(props.id)}} className="buttons">
                <svg viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"></path>
                    </svg>
                </div>
            </div>
            <div className="buttons" onClick={props.renderModal}>
            {/* INFO */}
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

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

export default connect(null, mapDispatchToProps)(ZoomMoviePic)