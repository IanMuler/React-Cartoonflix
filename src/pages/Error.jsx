import React from 'react';
import '../assets/styles/Error.css'
import Intro_header from '../components/Intro_header';

function Error() {
      return( 
         <div id="error">
            <Intro_header/>
            <div className="error__container">
                <div className= "error__text">
                    <span>We are working on it</span>
                    <img src="https://i.ibb.co/56ntGz2/Not-found-png.png" alt=""/>   
                </div>    
            </div>  
        </div>  
  );
}

export default Error;
