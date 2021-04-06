import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Intro from './pages/Intro.jsx';
import Home from './pages/Home.jsx';
import './assets/styles/App.css'

function App (){
  
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setSeries(data));
  }, [] )

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Intro}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
