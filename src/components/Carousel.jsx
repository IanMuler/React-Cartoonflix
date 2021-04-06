import React from 'react'
// import { Link } from 'react-router-dom';
import SeriePic from '../components/SeriePic'
import '../assets/styles/Carousel.css'

function Carousel(props) {

/*--------------------carousel-----------------*/

    const moveLeft = (e) => {

        const carouselScroll = document.querySelector(".pics");
        console.log(carouselScroll)
    } 

      
    // carouselWidth = carouselScroll.offsetWidth;
    
    // if (e.target.attributes[1].value === "right"){
    // carouselScroll.scrollLeft += (carouselWidth - leftArrow.offsetWidth*2);
    // } else if(e.target.attributes[1].value === "left"){
    // carouselScroll.scrollLeft -= (carouselWidth - leftArrow.offsetWidth*2) 
    // }
    // }

/*------------------------------------------------------------------------*/

return (

<section className="carousel-container top">
            <h3>{props.title}</h3>
            <div className="carousel">

                <button onClick={moveLeft} dir="left" className="left-arrow">
                    <img dir="left" src="https://i.ibb.co/W2n2YHC/left-arrow.png" alt=""/>
                </button>

                <div className="pics">

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

                <button dir="right" className="right-arrow">
                    <img dir="right" src="https://i.ibb.co/nQBdYN3/right-arrow.png" alt=""/>
                </button>
            </div>
        </section>
)
}


export default Carousel;