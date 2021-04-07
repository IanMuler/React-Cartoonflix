import React from 'react'
// import { Link } from 'react-router-dom';
import '../assets/styles/SeriePic.css'

function SeriePic(props) {

return (
    <div className={props.className}>
        <img src={props.img} alt={props.title}/>
    </div>
)
}

export default SeriePic;