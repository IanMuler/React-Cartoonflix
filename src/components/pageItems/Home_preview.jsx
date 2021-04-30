import React, { useState} from 'react'
import { connect } from 'react-redux'
import InfoModal from '../items/InfoModal';
import '../../assets/styles/PageItems/Home_preview.css'  

function Home_preview(props) {

if(!props.profile){ 
    window.location.href = "/"
}

const { myList } = props;

const profilesMedia = props.media.profiles;
const profile = profilesMedia[props.profile];
const page = profile[props.page];

const backgroundImage = page.preview;
const srcPng = page.png;

const previewStyle = {
    backgroundImage: `url(${backgroundImage})`,
    };

/*-------------------------modal functions----------------------*/

const [modal, setModal] = useState(false)

const renderModal = () => {
    setModal(true)
    props.disableScrolling()
}

const closeModal = () => {
    setModal(false)
    props.enableScrolling() 
}

/*--------------------------------------------------------------*/


return (

        <section className="principal-preview" style={previewStyle}>
            <div className="preview-container">

                <img className="principal-png-btm" src={srcPng} alt=""/>

                <div className="synopsis">{page.synopsis}</div>
            </div>
            <div className="principal-buttons">
                <a href={page.mediaLink}>
                <button className="play-btn">
                <div className="icon-play" role="presentation">
                    <svg viewBox="0 0 24 24">
                        <path d="M6 4l15 8-15 8z" fill="currentColor"></path>
                        </svg>
                </div>
                    Play
                </button>
            </a>
                <button className="info-btn" onClick={renderModal} >
                    <div className="icon-info" role="presentation">
                        <svg viewBox="0 0 24 24">
                            <path
                                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z"
                                fill="currentColor"></path>
                        </svg></div>
                    More Info
                </button>
            </div>
            {modal && 
                <InfoModal
                id={page.id}
                img={page.img}
                banner={page.banner}
                title={page.title}
                categorie={page.categorie}
                seasons={page.seasons}
                duration={page.duration}
                synopsis={page.synopsis}
                mediaLink={page.mediaLink}
                myList={myList}
                profile={props.profile}
                closeModal={closeModal}
                />
            }

            <div className="age-categorie">+7</div>
        </section>
)

}

const mapStateToProps = (state, props) => {
    return{
        myList: state.myList[props.profile]
    }
}

export default connect(mapStateToProps, null)(Home_preview);