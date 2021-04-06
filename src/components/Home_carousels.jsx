import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom';
import '../assets/styles/Home_carousels.css'

function Home_carousels() {
return (
    <Fragment>
    <section id="cn" className="carousel-container top">
            <h3>Cartoon Network</h3>
            <div className="carousel">

                <button value="cn" dir="left" className="left-arrow">
                    <img value="cn" dir="left" src="../img/left-arrow.png" alt=""/>
                </button>

                <div className="pics cn">
                    
                </div>

                <button value="cn" dir="right" className="right-arrow">
                    <img value="cn" dir="right" src="../img/right-arrow.png" alt=""/>
                </button>
            </div>
        </section>

        <section id="disney" className="carousel-container">
            <h3>Disney</h3>
            <div className="carousel">

                <button value="disney" dir="left" className="left-arrow">
                    <img value="disney" dir="left" src="../img/left-arrow.png" alt=""/>
                </button>

                <div className="pics disney">
                    <div className="serie-pic">
                        <img src="../img/List-Disney/List-artattack.webp" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-Disney/List-brandy.png" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-Disney/List-buzz.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-Disney/List-dave.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-Disney/List-hannamontan.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-Disney/List-jakelong.webp" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-Disney/List-kimpossible.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-Disney/List-zackandcody.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-Disney/List-kuzcoserie.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-Disney/List-liloystitchserie.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-Disney/List-lizziemcguire.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-Disney/List-phineasyferb.webp" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-Disney/List-recess.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-Disney/List-thats-so-raven.png" alt=""/>
                    </div>
                    <div className="serie-pic last-pic">
                        <img src="../img/List-Disney/List-gargoyle.jpg" alt=""/>
                    </div>
                </div>

                <button value="disney" dir="right" className="right-arrow">
                    <img value="disney" dir="right" src="../img/right-arrow.png" alt=""/>
                </button>
            </div>
        </section>

        <section id="foxkids" className="carousel-container">
            <h3>Fox Kids / Jetix</h3>
            <div className="carousel">

                <button value="foxkids" dir="left" className="left-arrow">
                    <img value="foxkids" dir="left" src="../img/left-arrow.png" alt=""/>
                </button>

                <div className="pics foxkids">
                    <div className="serie-pic">
                        <img src="../img/List-foxkids/List-digimon.png" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-foxkids/List-escalofrios.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-foxkids/List-inspectorgadget.webp" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-foxkids/List-kirby.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-foxkids/List-medabots.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-foxkids/List-megaman.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-foxkids/List-PRmightymorphin.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-foxkids/List-PRrescue.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-foxkids/List-PRtimeforce.png" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-foxkids/List-PRwildforced.png" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-foxkids/List-sonicx.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-foxkids/List-spiderman.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-foxkids/List-thewoody.jpg" alt=""/>
                    </div>
                    <div className="serie-pic">
                        <img src="../img/List-foxkids/List-ultimatemuscle.jpg" alt=""/>
                    </div>
                    <div className="serie-pic last-pic">
                        <img src="../img/List-foxkids/List-Xmen.jpg" alt=""/>
                    </div>
                </div>

                <button value="foxkids" dir="right" className="right-arrow">
                    <img value="foxkids" dir="right" src="../img/right-arrow.png" alt=""/>
                </button>
            </div>
        </section>
   </Fragment>
)
}

export default Home_carousels;