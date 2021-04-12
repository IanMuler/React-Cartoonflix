import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Intro from './pages/Intro.jsx';
import Home from './pages/Home.jsx';
import Series from './pages/Series.jsx';
import Movies from './pages/Movies.jsx';
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

/*-----------------get API data------------------*/
  const API = "https://raw.githubusercontent.com/IanMuler/React-Cartoonflix/main/src/API.json"
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setMedia(data));
  }, [] )

/*-----------------get profile value--------------*/

const [profile, setProfile] = useState("")

const getProfile = (e) => {
  setProfile(e.target.getAttribute("value"))
}

if(profile){
localStorage.setItem("profile", profile)
}

const profileStorage = localStorage.getItem("profile");
/*-------------------------------------------------*/
return (
<HashRouter>
      <Switch>
        <Route exact path="/" render={() => (<Intro getProfile={getProfile} />)}/>
        <Route exact path="/home" render={() => (<Home media={media} getProfile={getProfile} profile={profileStorage} />)}/>
        <Route exact path="/series" render={() => (<Series media={media} getProfile={getProfile} profile={profileStorage} />)}/>
        <Route exact path="/movies" render={() => (<Movies media={media} getProfile={getProfile} profile={profileStorage} />)}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
