import React, { Fragment, useEffect } from 'react';
import Home_header from '../components/Home_header';
import Intro_header from '../components/Intro_header';
import Home_preview from '../components/Home_preview';
import Home_carousels from '../components/Home_carousels'
import Home_loading from '../components/Home_loading';
import Home_footer from '../components/Home_footer';

const Home = (props) => {

  return props.media.length === 0 ?
    <Fragment>
    <Intro_header/>
    <Home_loading/>
    </Fragment>
     :
     <Fragment>
         <Home_header {...props} page="home"/>
         <Home_preview {...props} page="home" />
         <Home_carousels {...props}  getSeries={true} getMovies={true}/>
         <Home_footer/>
     </Fragment>
  ;
}

export default Home;
