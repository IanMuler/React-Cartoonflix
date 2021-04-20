import React, { useState, useEffect, Fragment } from 'react'
import SeriePic from './SeriePic'
import MoviePic from './MoviePic'
import '../../assets/styles/items/Carousel.css'

function Carousel(props) {

const [carousel, setCarousel] = useState()
const [rightArrow, setRightArrow] = useState()

const classPics = `pics ${props.classPic}`;
const classButtonRight = `right-arrow ${props.classPic}`
const [classButtonLeft, setClassButtonLeft] = useState("d-none") //esconde LEFT ARROW hasta realizar moveRight

const seriesLength = props.series?.length;
const moviesLength = props.movies?.length;

let carouselWidth;

useEffect(() => {
    setCarousel(document.querySelector(`.pics.${props.classPic}`));
    setRightArrow(document.querySelector(`.right-arrow.${props.classPic}`))
})
    

/*--------------------carousel functions-----------------*/
const [isMoving, setIsMoving] = useState(false);
    
    const moveRight = () => {
        if(isMoving === false){
        carouselWidth = carousel.offsetWidth;
        carousel.scrollLeft += (carouselWidth - rightArrow.offsetWidth*2) 
        
        setClassButtonLeft(`left-arrow`) 

        setIsMoving(true); // booleano asignado para que la función no se llamada hasta asegurarse que terminó de moverse
        setTimeout(
            function() {
                setIsMoving(false)}
                ,600);
        }
    } 

    const moveLeft = () => {
        if(isMoving === false){
        carouselWidth = carousel.offsetWidth;
        carousel.scrollLeft -= (carouselWidth - rightArrow.offsetWidth*2)

        setIsMoving(true);
        setTimeout(
            function() {
                setIsMoving(false)}
                ,600);
        }
    } 

/*------------------------------------------------------------------------*/
/*------------------set class to top carousel----------------------------*/
let classCarouselContainer;
(props.top) ?
classCarouselContainer = "carousel-container top" :
classCarouselContainer = "carousel-container"

/*---------------------------------------------------------------------- */

return (

<section className={classCarouselContainer} >
            <h3 className="carousel-title">{props.title}</h3>
            <div className="carousel">

                <button id="left-arrow" onClick={moveLeft} dir="left" className={classButtonLeft}>
                    <img dir="left" src="https://i.ibb.co/9TF3Gw9/left-arrow.png" alt=""/>
                </button>

                <div className={classPics}>
                    {props.series?.map((serie, i) =>
                        
                        (seriesLength === i + 1)?
                        <Fragment
                        key={serie.id}
                        >
                        <SeriePic
                        {...props}
                        id={serie.id}
                        title={serie.title}
                        img={serie.img}
                        categorie={serie.categorie}
                        seasons={serie.seasons} 
                        duration={serie.duration}
                        banner={serie.banner}
                        mediaLink={serie.mediaLink}
                        synopsis={serie.synopsis}
                        className="serie-pic last-pic"
                        isMoving={isMoving} 
                        />
                        <div><div id="arrow-space"></div></div> 
                        </Fragment>
                        :
                        <SeriePic
                        {...props}
                        key={serie.id}
                        id={serie.id}
                        title={serie.title}
                        img={serie.img}
                        categorie={serie.categorie}
                        seasons={serie.seasons} 
                        duration={serie.duration}
                        banner={serie.banner}
                        mediaLink={serie.mediaLink}
                        synopsis={serie.synopsis} 
                        className="serie-pic"
                        isMoving={isMoving} 
                        />   
                    )}
                    {props.movies?.map((movie, i) =>
                        (moviesLength === i + 1)?
                        <MoviePic
                        {...props}
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        img={movie.img}
                        imgMovie={movie.imgMovie}
                        categorie={movie.categorie}
                        duration={movie.duration} 
                        banner={movie.banner}
                        mediaLink={movie.mediaLink}
                        synopsis={movie.synopsis}
                        className="movie-pic last-pic"  
                        isMoving={isMoving}    
                        />
                        :
                        <MoviePic
                        {...props}
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        img={movie.img}
                        imgMovie={movie.imgMovie}
                        categorie={movie.categorie}
                        duration={movie.duration}
                        banner={movie.banner}
                        synopsis={movie.synopsis}
                        mediaLink={movie.mediaLink}
                        className="movie-pic"   
                        isMoving={isMoving}       
                        />  
                        )}
                </div>

                <button onClick={moveRight} dir="right" className={classButtonRight}>
                    <img dir="right" src="https://i.ibb.co/FKbRLV9/right-arrow.png" alt=""/>
                </button>
            </div>
        </section>
)
}


export default Carousel;