import React from 'react';
import data from "../aboutData.json";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";

function About() {
    let arr = [];
    for(let i in data){
        arr.push(

            <div className="card" key={i}>
            <Link to={`/about/${i}`}>
                <img src={data[i].image1} className="card-img-top" alt="Great region"/>
                    <div className="card-body text-center">
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
            <div className='forNavbar'></div>
            <h1 className='w-100 mt-0 mb-5'>About us</h1>
            {arr}
        </section>
    )
}

export default About