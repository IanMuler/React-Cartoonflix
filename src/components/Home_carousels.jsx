import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel'

function Home_carousels(props) {

    const seriesCn = props.media.series.cn;
    const seriesDisney = props.media.series.disney;
    const seriesFoxKids = props.media.series.foxkids;
    const movies = props.media.movies;

return (
    <Fragment>
        {props.getSeries &&
        <Fragment>
        <Carousel series={seriesCn} classPic="cn" title="Cartoon Network" top={true}/>
        <Carousel series={seriesDisney} classPic="disney" title="Disney"/>
        <Carousel series={seriesFoxKids} classPic="fox-kids" title="Fox Kids / Jetix"/>
        </Fragment>
        }
        {props.getMovies &&
        <Carousel movies={movies} classPic="movies" title="Movies" top={props.top}/>
        }
    </Fragment>
)
}

export default Home_carousels;