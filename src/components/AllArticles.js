// This component represents the "All Articles" page.

/* useContext - for Context API
data - for "All Articles" page from a json file
HTML parser library - to interpret HTML string input
React Router - to create links in the website
StopScrollContext - to stop scrolling when the user enables dark mode */
import React, { useContext } from 'react';
import data from "../data/postsData.json";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";
import stopScrollContext from '../contexts/stopScrollContext';

function AllArticles(props) {
    const { stopScroll, setstopScroll } = useContext(stopScrollContext);

    // Process JSX to fill useful information and generate the "All Articles" section cards.
    let arr = [];
    for (let i = 0; i < data.length; i++) {

        arr[i] = <div className={`card mt-5 ${props.mode === "dark" ? "bg-black border-light" : "border-black"}`} key={i}>

            <Link onClick={() => {
                setstopScroll(false);
            }}
                to={`/articles/${i}`}>
                <img src={data[i].image1} className="card-img-top" alt="Beautiful Article" />
                <div className={`card-body d-flex flex-wrap justify-content-center text-center ${props.mode === "dark" ? "text-light" : ""}`}>
                    <h5 className="card-title fs-3">{data[i].title}</h5>
                    <span className="card-text">{parse(data[i].description)}</span>
                    <button className='btn btn-primary align-self-end'>Read More</button>
                </div>
            </Link>
        </div>
    }

    // User should be at the top of the page initially.
    setTimeout(() => {
        if (stopScroll === false) {
            window.scrollTo(0, 0);
        }
    }, 0);

    return (
        // JSX for "All Articles" page.
        <section id="myAllArticles" className='container d-flex flex-wrap justify-content-between about mb-5'>
            <h1 className={`w-100 mt-5 mb-0 ${props.mode === "dark" ? "text-light" : ""}`}>Articles for your Liking</h1>
            {arr}
        </section>
    )
}

export default AllArticles