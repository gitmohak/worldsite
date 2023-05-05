import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
    const [markSection, setmarkSection] = useState("myHome");
    const navigate = useNavigate();
    const location = useLocation();

    const scrollSpy = (myHome = null, myCarousel = null, myHighlights = null, myAbout = null, myAllArticles = null) => {
        let myHomeValue = Infinity;
        let myHighlightsValue = Infinity;
        let myAboutValue = Infinity;
        let myAllArticlesValue = Infinity;
        let myCarouselValue = Infinity;

        const myContactValue = document.getElementById("myContact").offsetTop;

        if (myHome) {
            myHomeValue = document.getElementById("myHome").offsetTop;
        }

        if (myCarousel) {
            myCarouselValue = document.getElementById("myCarousel").offsetTop;
        }

        if (myHighlights) {
            myHighlightsValue = document.getElementById("myHighlights").offsetTop;
        }

        if (myAbout) {
            myAboutValue = document.getElementById("myAbout").offsetTop;
        }

        if (myAllArticles) {
            myAllArticlesValue = document.getElementById("myAllArticles").offsetTop;
        }

        if (window.scrollY + 20 >= myContactValue) {
            setmarkSection("myContact");
        }

        else if (window.scrollY + 20 >= myAboutValue) {
            setmarkSection("myAbout");
        }

        else if (window.scrollY + 20 >= myHighlightsValue) {
            setmarkSection("myHighlights");
        }

        else if (window.scrollY + 20 >= myCarouselValue) {
            setmarkSection("myCarousel");
        }

        else if (window.scrollY + 20 >= myHomeValue) {
            setmarkSection("myHome");
        }

        else if (window.scrollY + 20 >= myAllArticlesValue) {
            setmarkSection("myAllArticles");
        }
    }

    window.onscroll = () => {
        if (location.pathname === "/") {
            scrollSpy(true, true, true, true, false);
        }

        else if (location.pathname === "/all") {
            scrollSpy(false, true, false, true, true);
        }

        else if (location.pathname.slice(0, 9) === "/articles") {
            setmarkSection(null);
            scrollSpy(false, false, true, true, false);
        }

        else if (location.pathname.slice(0, 6) === "/about") {
            setmarkSection(null);
            scrollSpy(false, true, true, false, false);
        }
    }
    // window.onscroll = () => {
    //     const myHome = document.getElementById("myHome");
    //     const myCarousel = document.getElementById("myCarousel");
    //     const myHighlights = document.getElementById("myHighlights");
    //     const myAbout = document.getElementById("myAbout");
    //     const myContact = document.getElementById("myContact");

    //     if (window.scrollY + 20 >= myContact.offsetTop) {
    //         setmarkSection("myContact");
    //     }

    //     else if (window.scrollY + 20 >= myAbout.offsetTop) {
    //         setmarkSection("myAbout");
    //     }

    //     else if (window.scrollY + 20 >= myHighlights.offsetTop) {
    //         setmarkSection("myHighlights");
    //     }

    //     else if (window.scrollY + 20 >= myCarousel.offsetTop) {
    //         setmarkSection("myCarousel");
    //     }

    //     else if (window.scrollY + 20 >= myHome.offsetTop) {
    //         setmarkSection("myHome");
    //     }
    // }

    return (
        <nav className="navbar navbar-expand-lg myNav">
            <div className="container-fluid">
                <a className="navbar-brand text-success" href="#">World Site</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-4">

                            <a onClick={() => {
                                navigate("/");
                                setmarkSection("myHome");
                            }}

                                className={`nav-link fs-5 fw-bold text-primary ${markSection === "myHome" ? "text-decoration-underline text-success" : ""}`} aria-current="page" href="#myHome">Home</a>

                        </li>

                        <li className="nav-item me-4">

                            <a onClick={() => {
                                navigate("/");
                            }}

                                className={`nav-link fs-5 fw-bold ${markSection === "myCarousel" ? "text-decoration-underline text-success" : ""}`} aria-current="page" href="#myCarousel">Featured</a>

                        </li>

                        <li className="nav-item me-4">

                            <a onClick={() => {
                                navigate("/");
                            }}

                                className={`nav-link fs-5 fw-bold ${markSection === "myHighlights" ? "text-decoration-underline text-success" : ""}`} aria-current="page" href="#myHighlights">Highlights</a>

                        </li>

                        <li className="nav-item me-4">

                            <a onClick={() => {
                                navigate("/");
                            }}

                                className={`nav-link fs-5 fw-bold ${markSection === "myAbout" ? "text-decoration-underline text-success" : ""}`} aria-current="page" href="#myAbout">About us</a>

                        </li>

                        <li className="nav-item me-4">

                            <Link onClick={() => {
                                window.scrollTo(0, 0);
                                setmarkSection("myAllArticles");
                            }}

                                className={`nav-link fs-5 fw-bold text-primary ${markSection === "myAllArticles" ? "text-decoration-underline text-success" : ""}`} aria-current="page" to="/all">All Articles</Link>
                        </li>

                        <li className="nav-item">

                            <a onClick={() => {
                                navigate("/");
                            }}

                                className={`nav-link fs-5 fw-bold ${markSection === "myContact" ? "text-decoration-underline text-success" : ""}`} aria-current="page" href="#myContact">Contact us</a>

                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar