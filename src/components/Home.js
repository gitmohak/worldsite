import React from 'react';

function Home(props) {
    return (
        <header id="myHome" className='container'>
            <div className='home-bg'></div>
            
            <div className='animation1'></div>
            <div className='animation2'></div>
            <div className='animation3'></div>
            <img className='home-img' src="./images/building.png" alt="Beautiful Landmark with Doem top" />

            <div className='d-flex flex-column justify-content-center align-items-center home-left-section'>
                <h1 className='home-heading mt-0 mb-0'>Visit the Entire World</h1>
                <p className='home-info mb-5 mt-4'>World Site provides extremely interesting and useful information about the world. You can go to various fantastic places in the world just by visiting here.</p>
                <a className='btn btn-primary' href='#myCarousel'>Check Us Out</a>
            </div>
        </header>
    )
}

export default Home