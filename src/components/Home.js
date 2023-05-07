import React from 'react';

function Home(props) {
    return (
        <header id="myHome">
            <div className='container'>
                <div className={`animation1 ${props.mode === "dark" ? "opacity-75" : ""}`}></div>
                <div className={`animation2 ${props.mode === "dark" ? "opacity-75" : ""}`}></div>
                <div className={`animation3 ${props.mode === "dark" ? "opacity-75" : ""}`}></div>
                <img className='home-img' src="/images/building.png" alt="Beautiful Landmark with Dome top" />

                <div className='d-flex flex-column justify-content-center align-items-center home-left-section'>
                    <h1 className={`home-heading mt-0 mb-0 ${props.mode === "dark" ? "text-light" : ""}`}>Visit the Entire World</h1>
                    <p className={`home-info mb-5 mt-4 ${props.mode === "dark" ? "text-light" : ""}`}>World Site provides extremely interesting and useful information about the world. You can go to various fantastic places in the world just by visiting here.</p>
                    <a className="btn btn-primary btn-lg" href='#myCarousel'>Check Us Out</a>
                </div>
            </div>
        </header>
    )
}

export default Home