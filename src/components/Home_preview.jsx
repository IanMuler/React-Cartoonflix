import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/Home_preview.css'

function Home_preview() {
return (

        <section className="principal-preview">
            <div className="preview-container">

                <img className="principal-png-btm" src="https://i.ibb.co/dbk8WFb/Png-knd.png" alt=""/>

                <div className="synopsis"> The series follows the adventures of a group of children who operate from a
                    high-tech tree house, fighting against adults with advanced technology.</div>
            </div>
            <div className="principal-buttons">
                <Link to="/">
                <button className="play-btn">
                    <span>►</span>
                    Play
                </button>
            </Link>
                <button className="info-btn">
                    <div className="icon-info" role="presentation">
                        <svg viewBox="0 0 24 24">
                            <path
                                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z"
                                fill="currentColor"></path>
                        </svg></div>
                    More Info
                </button>
            </div>

            <div className="age-categorie">ATP</div>
        </section>
)
}

export default Home_preview;