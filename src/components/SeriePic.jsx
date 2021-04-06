import React from 'react'
// import { Link } from 'react-router-dom';
import '../assets/styles/SeriePic.css'

function SeriePic(props) {
return (
    <div className="serie-pic">
        <img src={props.img} alt={props.key}/>
    </div>
)
}

export default SeriePic;