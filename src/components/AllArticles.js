import React from 'react';
import data from "../postsData.json";
import parse from 'html-react-parser';

function AllArticles() {
    let arr = [];
    for (let i = 0; i < data.length; i++) {

        arr[i] = <div className="card mt-5" key={i}>
            <a href={`/articles/${i}`}>
                <img src={data[i].image1} className="card-img-top" alt="Beautiful Article" />
                <div className="card-body text-center">
                    <h5 className="card-title fs-3">{data[i].title}</h5>
                    <span className="card-text">{parse(data[i].description)}</span>
                    <button className='btn btn-primary'>Read More</button>
                </div>
            </a>
        </div>

    }

    return (
        <section className='container d-flex flex-wrap justify-content-between about'>
            <div className='forNavbar'></div>
            <h1 className='w-100'>Articles for your Liking</h1>
            {arr}
        </section>
    )
}

export default AllArticles