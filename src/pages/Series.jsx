import React, { Fragment } from 'react';
import Home_header from '../components/Home_header';
import Intro_header from '../components/Intro_header';
import Home_preview from '../components/Home_preview';
import Home_carousels from '../components/Home_carousels'
import Home_loading from '../components/Home_loading';
import Home_footer from '../components/Home_footer';

const Series = (props) => {

const profile = props.profile;
const preview = `props.media.${profile}.series` 

  return props.media.length === 0 ?
    <Fragment>
    <Intro_header/>
    <Home_loading/>
    </Fragment>
     :
     <Fragment>
         <Home_header/>
         <Home_preview preview={preview}/>
         <Home_carousels media={props.media} getSeries={true} />
         <Home_footer/>
     </Fragment>
  ;
}

export default Series;