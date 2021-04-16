import React, {useState, useEffect}from 'react'
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../actions'
import { Link } from 'react-router-dom';
import '../assets/styles/InfoModal.css'

function InfoModal(props) {

const [isAdded, setIsAdded] = useState(false)

console.log(props.id, props.img)

useEffect(() => { 
    
    if(props.myList.find(item => item.id === props.id)){
    setIsAdded(true)}
    else{
    setIsAdded(false)
    }

    /*---------close Modal with scape------*/
    document.addEventListener("keydown",handleKey)
    const handleKey = (e)=>{
        if (e.key === 'Escape') {
        props.closeModal();
        document.removeEventListener("keydown",handleKey)
        }
        }
    /*-----------------------------------------*/
}
)

useEffect(() => { // componetWillUnmount para restaurar el scroll si se cierra el modal desde myList
    return () => {
        props.closeModal();;
    }
}, [])



/*--------close with click out modal----------*/
const handleClick = (e) => {

const id = e.target.attributes.id?.nodeValue

if(id === "info-modal"){
props.closeModal()
}
}

/*--------------------------------------------*/

const bannerStyle = {
backgroundImage: `url(${props.banner})`,
};

const handleSetFavorite = () => {
props.setFavorite(
{
"id": props.id,
"title": props.title,
"seasons": props.seasons,
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
<div id="info-modal" onClick={handleClick}>
    <div className="info-modal__banner">
        <div className="icon-close" onClick={props.closeModal}>
            <svg viewBox="0 0 24 24" data-uia="previewModal-closebtn" role="button" aria-label="close" tabIndex="0">
                <path
                    d="M12 10.586l7.293-7.293 1.414 1.414L13.414 12l7.293 7.293-1.414 1.414L12 13.414l-7.293 7.293-1.414-1.414L10.586 12 3.293 4.707l1.414-1.414L12 10.586z"
                    fill="currentColor">
                </path>
            </svg>
        </div>
        <div className="info-modal__img-div" style={bannerStyle}>
        </div>
        <div className="info-modal__banner-info">




            <h3>{props.title}</h3>


            <div className="buttons">
                <Link to="/">
                <button className="play-btn">
                    <span>►</span>
                    Play
                </button>
                </Link>

                {!isAdded &&
                <div className="button-plus" onClick={handleSetFavorite}>
                    <svg viewBox="0 0 24 24">
                        <path d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z" fill="currentColor">
                        </path>
                    </svg>
                </div>
                }
                {isAdded &&
                <div className="button-plus" onClick={()=>{handleDeleteFavorite(props.id)}}>
                    <svg viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"></path>
                    </svg>
                </div>
                }

            </div>

            <div className="banner-info__top-info">
                <span className="categorie">{props.categorie}</span>

                {props.seasons &&
                <span className="seasons">{props.seasons}
                    {props.seasons === 1 ? " Season" :" Seasons"}
                </span>}

                {props.duration &&
                <span className="duration">{props.duration}</span>}

            </div>

            <div className="banner-info__bottom-info">
                <span className="synopsis">{props.synopsis}</span>
            </div>

        </div>
    </div>
</div>
)
}

const mapDispatchToProps = {
setFavorite,
deleteFavorite,
}

export default connect(null, mapDispatchToProps)(InfoModal)