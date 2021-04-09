import React, { useState, useEffect, Fragment } from 'react';
import Home_header from '../components/Home_header';
import Intro_header from '../components/Intro_header';
import Home_preview from '../components/Home_preview';
import Home_carousels from '../components/Home_carousels'
import Home_loading from '../components/Home_loading';
import Home_footer from '../components/Home_footer';

const Home = () => {

/*---------------Scroll dark-----------------*/
  window.addEventListener("scroll", function(){
    let header = document.getElementById('header');
    let app = document.getElementById('app');
    let position = app.getBoundingClientRect().top;
    
    if (position === 0){
        header.classList.remove('background-dark')
    } else{
        header.classList.add('background-dark')
    }
})
/*---------------------------------------------*/


  const API = "https://raw.githubusercontent.com/IanMuler/React-Cartoonflix/main/src/API.json"
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setMedia(data));
  }, [] )
  return media.length === 0 ?
    <Fragment>
    <Intro_header/>
    <Home_loading/>
    </Fragment>
     :
     <Fragment>
         <Home_header/>
         <Home_preview/>
         <Home_carousels media={media} />
         <Home_footer/>
     </Fragment>
  ;
}

export default Home;
