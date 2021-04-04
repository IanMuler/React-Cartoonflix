import React, { Fragment } from 'react';
import Intro_header from '../components/Intro_header';
import Intro_main from '../components/Intro_main';
import '../assets/styles/Intro.css'

function Intro (){
  return (
    <Fragment>
        <Intro_header/>
        <Intro_main/>
    </Fragment>
  );
}

export default Intro;
