import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/InfoModal.css'

function InfoModal(props) {

return (
<div id="info-modal">
    <div className="info-modal__banner">
        <div className="info-modal__img-div">
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

            {/* <span>{props.title}</span> */}
            <h3>Mulan</h3>

           
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
                {/* <span className="categorie">{props.categorie}</span>
                <span className="duration">{props.seasons} Seasons</span> */}
                <span className="categorie">+7</span>
                <span>1h 30m</span>
            </div>

            <div className="banner-info__bottom-info">
                {/* <span>{page.synopsis}</span> */}
                <span className="synopsis" >The adventures of a cowardly dog who must overcome his own fears to heroically defend his unknowing farmer owners from all kinds of dangers.</span>
            </div>

        </div>
    </div>
</div>
)
}

export default InfoModal;