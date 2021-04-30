import React, { Fragment } from 'react';
import Home_header from '../components/PageItems/Home_header';
import Intro_header from '../components/PageItems/Intro_header';
import Home_preview from '../components/PageItems/Home_preview';
import Home_carousels from '../components/PageItems/Home_carousels'
import Home_loading from '../components/PageItems/Home_loading';
import Home_footer from '../components/PageItems/Home_footer';

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
         <Home_carousels {...props} getMyList={true} getSeries={true} getMovies={true}/>
         <Home_footer/>
     </Fragment>
  ;
}

export default Home;
