import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import SeriePic from '../components/SeriePic'
import MoviePic from '../components/MoviePic'
import '../assets/styles/Carousel.css'

function Carousel(props) {

/*--------------------carousel function-----------------*/

const [isMoving, setIsMoving] = useState(false);
const [buttonLeftArrow, setButtonLeftArrow] = useState("d-none")

let rightArrow;

    const moveRight = () => {
        if(isMoving === false){
        const carousel = document.querySelector(`.pics.${props.classPic}`);
        const carouselWidth = carousel.offsetWidth;

        rightArrow = document.querySelector(`.right-arrow.${props.classPic}`)
        carousel.scrollLeft += (carouselWidth - rightArrow.offsetWidth*2) 
        
        setButtonLeftArrow(`left-arrow`)

        setIsMoving(true);
        setTimeout(
            function() {
                setIsMoving(false)}
                ,600);
        }
    } 

    const moveLeft = () => {
        if(isMoving === false){
        const carousel = document.querySelector(`.pics.${props.classPic}`);
        const carouselWidth = carousel.offsetWidth;

        rightArrow = document.querySelector(`.right-arrow.${props.classPic}`)

        carousel.scrollLeft -= (carouselWidth - rightArrow.offsetWidth*2)

        setIsMoving(true);
        setTimeout(
            function() {
                setIsMoving(false)}
                ,600);
        }
    } 

/*------------------------------------------------------------------------*/


const divPics = `pics ${props.classPic}`;
const buttonRightArrow = `right-arrow ${props.classPic}`


let divCarouselContainer;
(props.top) ?
divCarouselContainer = "carousel-container top" :
divCarouselContainer = "carousel-container"

const seriesLength = props.series?.length;
const moviesLength = props.movies?.length;

return (

<section className={divCarouselContainer} >
            <h3 className="carousel-title">{props.title}</h3>
            <div className="carousel">

                <button id="left-arrow" onClick={moveLeft} dir="left" className={buttonLeftArrow}>
                    <img dir="left" src="https://i.ibb.co/W2n2YHC/left-arrow.png" alt=""/>
                </button>

                <div className={divPics}>
                    {props.series?.map((serie, i) =>
                        (seriesLength === i + 1)?
                        <SeriePic
                        key={serie.id}
                        id={serie.id}
                        title={serie.title}
                        img={serie.img}
                        categorie={serie.categorie}
                        seasons={serie.seasons} 
                        className="serie-pic last-pic"  
                        classPic={props.classPic}
                        isMoving={isMoving}            
                        />
                        :
                        <SeriePic
                        key={serie.id}
                        id={serie.id}
                        title={serie.title}
                        img={serie.img}
                        categorie={serie.categorie}
                        seasons={serie.seasons}  
                        className="serie-pic"   
                        classPic={props.classPic}
                        isMoving={isMoving}          
                        />   
                    )}
                    {props.movies?.map((movie, i) =>
                        (moviesLength === i + 1)?
                        <MoviePic
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        img={movie.img}
                        categorie={movie.categorie}
                        duration={movie.duration} 
                        className="movie-pic last-pic"  
                        classPic={props.classPic} 
                        isMoving={isMoving}           
                        />
                        :
                        <MoviePic
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        img={movie.img}
                        categorie={movie.categorie}
                        duration={movie.duration}
                        className="movie-pic"   
                        classPic={props.classPic}   
                        isMoving={isMoving}       
                        />  
                        )}
                </div>

                <button onClick={moveRight} dir="right" className={buttonRightArrow}>
                    <img dir="right" src="https://i.ibb.co/nQBdYN3/right-arrow.png" alt=""/>
                </button>
            </div>
        </section>
)
}


export default Carousel;