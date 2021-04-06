import React from 'react'
// import { Link } from 'react-router-dom';
import '../assets/styles/Carousel.css'
import SeriePic from '../components/SeriePic'

function Carousel(props) {
return (

<section className="carousel-container top">
            <h3>{props.title}</h3>
            <div className="carousel">

                <button dir="left" className="left-arrow">
                    <img dir="left" src="https://i.ibb.co/W2n2YHC/left-arrow.png" alt=""/>
                </button>

                <div className="pics">

                    {requestedSeries.map(serie =>
                        <SeriePic
                        key={serie.title}    
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