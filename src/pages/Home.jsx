import React, { Fragment } from 'react';
import Home_header from '../components/Home_header';
import Home_preview from '../components/Home_preview';
import Home_carousels from '../components/Home_carousels'

function Home (){
  return (
    <Fragment>
        <Home_header/>
        <Home_preview/>
        <Home_carousels/>
    </Fragment>
  );
}

export default Home;
