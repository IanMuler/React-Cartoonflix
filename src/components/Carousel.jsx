import React from 'react'
// import { Link } from 'react-router-dom';
import SeriePic from '../components/SeriePic'
import '../assets/styles/Carousel.css'

function Carousel(props) {

/*--------------------carousel function-----------------*/

let leftArrow;

    const moveRight = () => {
        const carousel = document.querySelector(`.pics.${props.classPic}`);
        const carouselWidth = carousel.offsetWidth;

        leftArrow = document.querySelector(`.left-arrow.${props.classPic}`)

        carousel.scrollLeft += (carouselWidth - leftArrow.offsetWidth*2) 
    } 

    const moveLeft = () => {
        const carousel = document.querySelector(`.pics.${props.classPic}`);
        const carouselWidth = carousel.offsetWidth;
        carousel.scrollLeft -= (carouselWidth - leftArrow.offsetWidth*2)
    } 

/*------------------------------------------------------------------------*/

const divPics = `pics ${props.classPic}`;
const buttonLeftArrow = `left-arrow ${props.classPic}`

let divCarouselContainer;
(props.top === "true") ?
divCarouselContainer = "carousel-container top" :
divCarouselContainer = "carousel-container"

return (

<section className={divCarouselContainer} >
            <h3>{props.title}</h3>
            <div className="carousel">

                <button id="left-arrow" onClick={moveLeft} dir="left" className={buttonLeftArrow}>
                    <img dir="left" src="https://i.ibb.co/W2n2YHC/left-arrow.png" alt=""/>
                </button>

                <div className={divPics}>
                    {props.series.map(serie =>
                        <SeriePic
                        key={serie.id}
                        title={serie.title}
                        img={serie.img}
                        categorie={serie.categorie}
                        seasons={serie.seasons}               
                        />
                    )}
                </div>

                <button onClick={moveRight} dir="right" className="right-arrow">
                    <img dir="right" src="https://i.ibb.co/nQBdYN3/right-arrow.png" alt=""/>
                </button>
            </div>
        </section>
)
}


export default Carousel;