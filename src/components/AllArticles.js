import React from 'react';
import data from "../postsData.json";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";

function AllArticles() {
    let arr = [];
    for (let i = 0; i < data.length; i++) {

        arr[i] = <div className="card mt-5" key={i}>
            <Link to={`/articles/${i}`}>
                <img src={data[i].image1} className="card-img-top" alt="Beautiful Article" />
                <div className="card-body text-center">
                    <h5 className="card-title fs-3">{data[i].title}</h5>
                    <span className="card-text">{parse(data[i].description)}</span>
                    <button className='btn btn-primary'>Read More</button>
                </div>
            </Link>
        </div>

    }

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);

    return (
        <section id="myAllArticles" className='container d-flex flex-wrap justify-content-between about mb-5'>
            <h1 className='w-100 mt-5 mb-0'>Articles for your Liking</h1>
            {arr}
        </section>
    )
}

export default AllArticles