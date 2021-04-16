import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Intro from './pages/Intro.jsx';
import Home from './pages/Home.jsx';
import Series from './pages/Series.jsx';
import Movies from './pages/Movies.jsx';
import Error from './pages/Error.jsx';
import './assets/styles/App.css'

function App (props){

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
/*------------block scroll on modal------------*/
const disableScrolling = () => {
  let x=window.scrollX;
  let y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

const enableScrolling = () => {
  window.onscroll=function(){};
}
/*-----------------get and set API data to store------------------*/
  const API = "https://raw.githubusercontent.com/IanMuler/React-Cartoonflix/main/src/API.json"
  const [media, setMedia] = useState([]);

  useEffect(() => {
     fetch(API)
       .then(response => response.json())
       .then(data => setMedia(data))
   }, [] )



/*-------------------------------------------------*/

return (
<HashRouter>
      <Switch>
        <Route exact path="/" render={() => (<Intro getProfile={getProfile} />)}/>
        <Route exact path="/home" render={() => 

          (<Home 
          media={media}
          getProfile={getProfile}
          profile={profileStorage} 
          disableScrolling={disableScrolling} 
          enableScrolling={enableScrolling}/>)}/>

          <Route exact path="/series" render={() => 

          (<Series 
          media={media}
          getProfile={getProfile} 
          profile={profileStorage} 
          disableScrolling={disableScrolling} 
          enableScrolling={enableScrolling}/>)}/>

          <Route exact path="/movies" render={() => (
          
          <Movies
          media={media}
          getProfile={getProfile} 
          profile={profileStorage} 
          disableScrolling={disableScrolling} 
          enableScrolling={enableScrolling}/>)}/>

          <Route component={Error}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
