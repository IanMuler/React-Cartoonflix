import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Carousel from '../components/Carousel'


function Home_carousels(props) {
    
    const [seriesTop, setSeriesTop] = useState()
    
    useEffect(() => {
        if(props.getMyList && myList.length !== 0){ setSeriesTop(false) }
        else{ setSeriesTop(true) }
    })

    const { myList } = props;
    const seriesCn = props.media?.series.cn;
    const seriesDisney = props.media?.series.disney;
    const seriesFoxKids = props.media?.series.foxkids;
    const movies = props.media?.movies;



return (
    <Fragment>
        {props.getMyList && myList.length !== 0 &&
        <Carousel series={myList} classPic="my-list" title="My List" top={true} {...props} />
        }
        {props.getSeries &&
        <Fragment>
        <Carousel series={seriesCn} classPic="cn" title="Cartoon Network" top={seriesTop} {...props} />
        <Carousel series={seriesDisney} classPic="disney" title="Disney" {...props} />
        <Carousel series={seriesFoxKids} classPic="fox-kids" title="Fox Kids / Jetix" {...props} />
        </Fragment>
        }
        {props.getMovies &&
        <Carousel movies={movies} classPic="movies" title="Movies" {...props} />
        }
    </Fragment>
)
}

const mapStateToProps = (state, props) => {
    return{
        myList: state.myList[props.profile]
    }
}

export default connect(mapStateToProps, null)(Home_carousels);