import React from 'react';
import data from "../postsData.json";
import parse from 'html-react-parser';

function Featured() {
    return (
        <section id="myCarousel" className="carousel slide bg-dark" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <a href='/articles/5'>
                        <img src={data[5].image1} className="d-block vh-100 vw-100 mx-auto" alt="Great Place" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{data[5].title}</h5>
                            <p>{parse(data[5].description)}</p>
                        </div>
                    </a>
                </div>

                <div className="carousel-item">
                    <a href='/articles/8'>
                        <img src={data[8].image1} className="d-block vw-100 vh-100" alt="Wonderful location" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{data[8].title}</h5>
                            <p>{parse(data[8].description)}</p>
                        </div>
                    </a>
                </div>

                <div className="carousel-item">
                    <a href='/articles/14'>
                        <img src={data[14].image1} className="d-block vw-100 vh-100" alt="Awesome place" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{data[14].title}</h5>
                            <p>{parse(data[14].description)}</p>
                        </div>
                    </a>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </section>
    )
}

export default Featured