import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import doScrollSpy from "../methods/scrollSpy";
import stopScrollContext from '../contexts/stopScrollContext';
import { locationUI, darkModeFunc, doDecoration } from '../methods/navbarMethods';

function Navbar(props) {
    const [markSection, setmarkSection] = useState("");
    const { setstopScroll } = useContext(stopScrollContext);
    const ref = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();

    window.onload = () => {
        locationUI(location, setmarkSection);
    }

    window.onscroll = () => {
        doScrollSpy(location, setmarkSection);
    }

    return (
        <section className='d-flex justify-content-center'>
            <nav className={`navbar navbar-expand-lg myNav ${props.mode === "dark" ? "bg-black navbar-dark" : ""}`}>
                <div className="container-fluid">

                    <a onClick={() => {
                        setstopScroll(false);
                        navigate("/");
                        setmarkSection("myHome");
                    }}
                        className={`navbar-brand ${props.mode === "light" ? "text-success" : "darkModeGreen"}`} href="#myHome">World Site</a>

                    <button className={`navbar-toggler ${props.mode === "dark" ? "darkNavToggler" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span ref={ref} className={`border-black navbar-toggler-icon ${props.mode === "dark" ? "darkNavIcon" : ""}`}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`navbar-nav d-flex align-items-center me-auto mb-2 mb-lg-0 ${props.mode === "dark" ? "myNav-black" : ""}`}>
                            <li className="nav-item me-4">

                                <a onClick={() => {
                                    setstopScroll(false);
                                    navigate("/");
                                    setmarkSection("myHome");

                                    if (window.innerWidth <= 991.5) {
                                        ref.current.click();
                                    }
                                }}
                                    className={`nav-link fs-4 fw-bold text-primary ${doDecoration(markSection, props.mode, "myHome")}`} aria-current="page" href="#myHome">Home</a>

                            </li>

                            <li className="nav-item me-4">

                                <a onClick={() => {
                                    setstopScroll(false);
                                    navigate("/");

                                    if (window.innerWidth <= 991.5) {
                                        ref.current.click();
                                    }
                                }}
                                    className={`nav-link fs-4 fw-bold text-primary ${doDecoration(markSection, props.mode, "myCarousel")}`} aria-current="page" id="myCarousel-link" href="#myCarousel">Featured</a>

                            </li>

                            <li className="nav-item me-4">

                                <a onClick={() => {
                                    setstopScroll(false);
                                    navigate("/");

                                    if (window.innerWidth <= 991.5) {
                                        ref.current.click();
                                    }
                                }}
                                    className={`nav-link fs-4 fw-bold text-primary ${doDecoration(markSection, props.mode, "myHighlights")}`} aria-current="page" id="myHighlights-link" href="#myHighlights">Highlights</a>

                            </li>

                            <li className="nav-item me-4">

                                <a onClick={() => {
                                    setstopScroll(false);
                                    navigate("/");

                                    if (window.innerWidth <= 991.5) {
                                        ref.current.click();
                                    }
                                }}
                                    className={`nav-link text-center fs-4 fw-bold text-primary ${doDecoration(markSection, props.mode, "myAbout")}`} aria-current="page" href="#myAbout" id="myAbout-link">About us</a>

                            </li>

                            <li className="nav-item">

                                <a onClick={() => {
                                    setstopScroll(false);
                                    navigate("/");

                                    if (window.innerWidth <= 991.5) {
                                        ref.current.click();
                                    }
                                }}
                                    className={`nav-link text-center fs-4 fw-bold text-primary ${doDecoration(markSection, props.mode, "myContact")}`} aria-current="page" id="myContact-link" href="#myContact">Contact us</a>

                            </li>

                            <li className="nav-item ms-4">

                                <Link onClick={() => {
                                    setstopScroll(false);
                                    window.scrollTo(0, 0);
                                    setmarkSection("myAllArticles");

                                    if (window.innerWidth <= 991.5) {
                                        ref.current.click();
                                    }
                                }}
                                    className={`nav-link text-center fs-4 fw-bold text-primary ${doDecoration(markSection, props.mode, "myAllArticles")}`} aria-current="page" to="/all">All Articles</Link>
                            </li>

                            <li className="nav-item form-check form-switch darkSwitchLi">
                                <label className={`nav-link text-center fs-4 form-check-label ${doDecoration(markSection, props.mode, "")}`} aria-current="page" htmlFor="darkSwitch">Dark Mode</label>

                                <input onClick={() => {
                                    darkModeFunc (setstopScroll, props.mode, props.setMode, ref);
                                }}
                                className="form-check-input d-inline" type="checkbox" role="switch" id="darkSwitch" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar