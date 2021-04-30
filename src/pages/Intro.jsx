import React from 'react';
import Intro_header from '../components/PageItems/Intro_header';
import Intro_main from '../components/PageItems/Intro_main';
import '../assets/styles/pages/Intro.css'

function Intro (props){
  return (
    <div id="intro">
        <Intro_header/>
        <Intro_main getProfile={props.getProfile}/>
    </div>
  );
}

export default Intro;
