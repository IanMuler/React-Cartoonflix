import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/InfoModal.css'

function InfoModal(props) {

const readKey = ()=>{
    // if (e.key === 'Escape') {
    //     props.closeModal;
    //   }
    console.log("hola")
}

const bannerStyle = {
    backgroundImage: `url(${props.banner})`,
    };

    console.log(document.body.offsetWidth);  

const readInfoModal = (e) => {

    const id = e.target.attributes.id?.nodeValue

    if(id === "info-modal"){
        props.closeModal()
    }
}

return (
<div id="info-modal" onKeyPress={readKey} onClick={readInfoModal} >
    <div className="info-modal__banner" onKeyPress={readKey}>
        <div className="info-modal__img-div" style={bannerStyle}>
        </div>
        <div className="info-modal__banner-info">

            <div className="icon-close" onClick={props.closeModal}>
                <svg viewBox="0 0 24 24" data-uia="previewModal-closebtn" role="button" aria-label="close" tabIndex="0">
                    <path
                        d="M12 10.586l7.293-7.293 1.414 1.414L13.414 12l7.293 7.293-1.414 1.414L12 13.414l-7.293 7.293-1.414-1.414L10.586 12 3.293 4.707l1.414-1.414L12 10.586z"
                        fill="currentColor">
                    </path>
                </svg>
            </div>

            
            <h3>{props.title}</h3>

           
            <div className="buttons">
                <Link to="/">
                    <button className="play-btn">
                        <span>►</span>
                        Play
                    </button>
                </Link>
                <div className="button-plus"><svg viewBox="0 0 24 24"><path d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z" fill="currentColor"></path></svg></div>
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

export default InfoModal;