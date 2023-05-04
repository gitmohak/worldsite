import React from 'react';
import data from "../aboutData.json";
import parse from 'html-react-parser';

function About() {
    let arr = [];
    for(let i in data){
        arr.push(

            <div className="card">
            <a href={`/about/${i}`}>
                <img src={data[i].image1} className="card-img-top" alt="Great region"/>
                    <div className="card-body text-center">
                        <h5 className="card-title fs-3">{parse(data[i].title)}</h5>
                        <p className="card-text">{parse(data[i].description)}</p>
                        <button className='btn btn-primary'>Read More</button>
                    </div>
            </a>
            </div>
        ); 
    }

    return (
        <section className='container d-flex flex-wrap justify-content-between about'>
            <h1 className='w-100'>About us</h1>
            {arr}
        </section>
    )
}

export default About