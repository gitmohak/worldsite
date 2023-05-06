import React, { useContext } from 'react';
import data from "../postsData.json";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";
import stopScrollContext from '../contexts/stopScrollContext';

function AllArticles(props) {
    const { stopScroll, setstopScroll } = useContext(stopScrollContext);

    let arr = [];
    for (let i = 0; i < data.length; i++) {

        arr[i] = <div className={`card mt-5 ${props.mode === "dark" ? "bg-black border-light" : "border-black"}`} key={i}>

            <Link onClick={() => {
                setstopScroll(false);
            }}
                to={`/articles/${i}`}>
                <img src={data[i].image1} className="card-img-top" alt="Beautiful Article" />
                <div className={`card-body text-center ${props.mode === "dark" ? "text-light" : ""}`}>
                    <h5 className="card-title fs-3">{data[i].title}</h5>
                    <span className="card-text">{parse(data[i].description)}</span>
                    <button className='btn btn-primary'>Read More</button>
                </div>
            </Link>
        </div>
    }

    setTimeout(() => {
        if (stopScroll === false) {
            window.scrollTo(0, 0);
        }
    }, 0);

    return (
        <section id="myAllArticles" className='container d-flex flex-wrap justify-content-between about mb-5'>
            <h1 className={`w-100 mt-5 mb-0 ${props.mode === "dark" ? "text-light" : ""}`}>Articles for your Liking</h1>
            {arr}
        </section>
    )
}

export default AllArticles