import React, { Fragment, useEffect } from 'react';
import Home_header from '../components/Home_header';
import Home_carousels from '../components/Home_carousels'
import Home_footer from '../components/Home_footer';
import '../assets/styles/MyList.css'

const MyList = (props) => {

  return (
     <Fragment>
         <Home_header {...props} page="my-list"/>
         <div id="my-list-page">
         <Home_carousels {...props} getMyList={true} top={false}/>
         <Home_footer/>
         </div>
     </Fragment>
  )
}

export default MyList;