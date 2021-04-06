import React from 'react';
import Intro_header from '../components/Intro_header';
import Intro_main from '../components/Intro_main';
import '../assets/styles/Intro.css'

function Intro (){
  return (
    <div id="intro">
        <Intro_header/>
        <Intro_main/>
    </div>
  );
}

export default Intro;
