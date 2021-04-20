import React, { Fragment } from 'react';
import Home_header from '../components/pageItems/Home_header';
import Intro_header from '../components/pageItems/Intro_header';
import Home_preview from '../components/pageItems/Home_preview';
import Home_carousels from '../components/pageItems/Home_carousels'
import Home_loading from '../components/pageItems/Home_loading';
import Home_footer from '../components/pageItems/Home_footer';

const Series = (props) => {


  return props.media.length === 0 ?
    <Fragment>
    <Intro_header/>
    <Home_loading/>
    </Fragment>
     :
     <Fragment>
         <Home_header {...props} page="series"/>
         <Home_preview {...props} page="series"/>
         <Home_carousels {...props} getSeries={true} />
         <Home_footer/>
     </Fragment>
  ;
}

export default Series;