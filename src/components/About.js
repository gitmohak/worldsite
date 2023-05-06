import React, { useContext } from 'react';
import data from "../aboutData.json";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";
import stopScrollContext from '../contexts/stopScrollContext';

function About(props) {
    const { setstopScroll } = useContext(stopScrollContext);

    let arr = [];
    for (let i in data) {
        arr.push(

            <div className={`card ${props.mode === "dark" ? "bg-black border-light" : "border-black"}`} key={i}>
                <Link onClick={() => {
                    setstopScroll(false);
                }}
                    to={`/about/${i}`}>
                    <img src={data[i].image1} className="card-img-top" alt="Great region" />
                    <div className={`card-body text-center ${props.mode === "dark" ? "text-light" : ""}`}>
                        <h5 className="card-title fs-3">{parse(data[i].title)}</h5>
                        <p className="card-text">{parse(data[i].description)}</p>
                        <button className='btn btn-primary'>Read More</button>
                    </div>
                </Link>
            </div>
        );
    }

    return (
        <section id='myAbout' className='container d-flex flex-wrap justify-content-between about'>
            <h1 className={`w-100 mt-5 mb-4 ${props.mode === "dark" ? "text-light" : ""}`}>About us</h1>
            {arr}
        </section>
    )
}

export default About