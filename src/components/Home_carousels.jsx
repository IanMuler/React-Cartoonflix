import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel'
import '../assets/styles/Home_carousels.css'

function Home_carousels(props) {

    console.log(props)
    const seriesCn = props.media.series.cn;

return (
    <Fragment>
        <Carousel series={seriesCn} title="Cartoon Network"/>
   </Fragment>
)
}

export default Home_carousels;