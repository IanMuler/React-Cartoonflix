import React, { useState, useEffect, Fragment } from 'react';
import Home_header from '../components/Home_header';
import Home_preview from '../components/Home_preview';
import Home_carousels from '../components/Home_carousels'

const Home = () => {

  const API = "https://raw.githubusercontent.com/IanMuler/React-Cartoonflix/main/src/API.json"
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setMedia(data));
  }, [] )

    return media.length === 0 ?
    <Fragment>
    <Home_header/>
    <h1>Loading</h1>
    </Fragment>
    :
    <Fragment>
        <Home_header/>
        <Home_preview/>
        <Home_carousels media={media} />
    </Fragment>
  ;
}

export default Home;
