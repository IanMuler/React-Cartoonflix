import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../actions'
import '../assets/styles/ZoomSeriePic.css'

function ZoomSeriePic(props) {

 const [isAdded, setIsAdded] = useState(false)

useEffect(() => {
    if(props.myList.length !== 0){
    if(props.myList.find(item => item.id === props.id)){
    setIsAdded(true)}
    else{
    setIsAdded(false)
    }
}
})
 

const handleSetFavorite = () => {
    props.setFavorite(
        {
        "id": props.id,
        "title": props.title,
        "seasons": props.seasons,
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
<div id="zoom-pic" style={props.style} onMouseLeave={props.onMouseLeave}>
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

                {!isAdded &&
                <div onClick={handleSetFavorite} className="buttons">
                {/* ADD */}
                    <svg viewBox="0 0 24 24">
                        <path d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z" fill="currentColor"></path>
                    </svg>
                </div>}

                {isAdded &&
                <div onClick={()=>{handleDeleteFavorite(props.id)}} className="buttons">
                <svg viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"></path>
                    </svg>
                </div>}

                <div className="buttons">
                {/* LIKE */}
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M15.167 8.994h3.394l.068.023c1.56.138 2.867.987 2.867 2.73 0 .275-.046.527-.092.78.367.435.596.986.596 1.72 0 .963-.39 1.52-1.032 1.978.023.183.023.252.023.39 0 .963-.39 1.784-1.009 2.243.023.206.023.275.023.39 0 1.743-1.33 2.591-2.89 2.73L12.21 22c-2.04 0-3.05-.252-4.563-.895-.917-.39-1.353-.527-2.27-.619L4 20.371v-8.234l2.476-1.445 2.27-4.427c0-.046.085-1.552.253-4.52l.871-.389c.092-.069.275-.138.505-.184.664-.206 1.398-.252 2.132 0 1.261.436 2.064 1.537 2.408 3.258.142.829.226 1.695.26 2.564l-.008 2zm-4.42-2.246l-2.758 5.376L6 13.285v5.26c.845.113 1.44.3 2.427.72 1.37.58 2.12.735 3.773.735l4.816-.023c.742-.078.895-.3 1.015-.542.201-.4.201-.876 0-1.425.558-.184.917-.479 1.078-.883.182-.457.182-.966 0-1.528.601-.228.901-.64.901-1.238s-.202-1.038-.608-1.32c.23-.46.26-.892.094-1.294-.168-.404-.298-.627-1.043-.738l-.172-.015h-5.207l.095-2.09c.066-1.448-.009-2.875-.216-4.082-.216-1.084-.582-1.58-1.096-1.758-.259-.09-.546-.086-.876.014-.003.06-.081 1.283-.235 3.67z"
                            fill="currentColor"></path>
                    </svg>
                </div>
                <div className="buttons">
                {/* DISLIKE */}
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M8.833 15.006H5.44l-.068-.023c-1.56-.138-2.867-.987-2.867-2.73 0-.275.046-.527.092-.78C2.23 11.038 2 10.487 2 9.753c0-.963.39-1.52 1.032-1.978-.023-.183-.023-.252-.023-.39 0-.963.39-1.784 1.009-2.243-.023-.206-.023-.275-.023-.39 0-1.743 1.33-2.591 2.89-2.73L11.79 2c2.04 0 3.05.252 4.563.895.917.39 1.353.527 2.27.619L20 3.629v8.234l-2.476 1.445-2.27 4.427c0 .046-.085 1.552-.253 4.52l-.871.389c-.092.069-.275.138-.505.184-.664.206-1.398.252-2.132 0-1.261-.436-2.064-1.537-2.408-3.258a19.743 19.743 0 0 1-.26-2.564l.008-2zm4.42 2.246l2.758-5.376L18 10.715v-5.26c-.845-.113-1.44-.3-2.427-.72C14.203 4.156 13.453 4 11.8 4l-4.816.023c-.742.078-.895.3-1.015.542-.201.4-.201.876 0 1.425-.558.184-.917.479-1.078.883-.182.457-.182.966 0 1.528-.601.228-.901.64-.901 1.238s.202 1.038.608 1.32c-.23.46-.26.892-.094 1.294.168.404.298.627 1.043.738l.172.015h5.207l-.095 2.09c-.066 1.448.009 2.875.216 4.082.216 1.084.582 1.58 1.096 1.758.259.09.546.086.876-.014.003-.06.081-1.283.235-3.67z"
                            fill="currentColor">
                        </path>
                    </svg>
                </div>
            </div>
            <div className="buttons" onClick={props.renderModal}>
                 {/* INFO */}
                <svg viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M5.689 7.924L4.387 9.442 12.038 16l7.651-6.558-1.302-1.518-6.349 5.442z"></path>
                </svg></div>
        </div>
        <div className="zoom-pic-down-info">
            <span className="categorie">{props.categorie}</span>
            <span className="duration">{props.seasons} Seasons</span>
        </div>
    </div>
</div>
)
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

export default connect(null, mapDispatchToProps)(ZoomSeriePic)