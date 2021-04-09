import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Intro from './pages/Intro.jsx';
import Home from './pages/Home.jsx';
import './assets/styles/App.css'

function App (){

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

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Intro}/>
        <Route exact path="/home" render={(props) => (<Home {...props} media={media} />)}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
