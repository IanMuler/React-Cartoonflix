import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Intro from './pages/Intro.jsx';
import Home from './pages/Home.jsx';
import './assets/styles/App.css'

function App (){
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
