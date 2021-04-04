import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Intro from './pages/Intro.jsx';
import './assets/styles/App.css'

function App (){
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Intro}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
