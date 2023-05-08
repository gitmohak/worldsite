import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import doScrollSpy from "../methods/scrollSpy";
import stopScrollContext from '../contexts/stopScrollContext';

function Navbar(props) {
    const [markSection, setmarkSection] = useState("myHome");
    const { setstopScroll } = useContext(stopScrollContext);

    const navigate = useNavigate();
    const location = useLocation();

    window.onscroll = () => {
        doScrollSpy(location, setmarkSection);
    }

    const darkModeFunc = () => {
        setstopScroll(true);

        if (props.mode === "light") {
            props.setMode("dark");
            document.body.style.backgroundColor = "black";
        }
        else {
            props.setMode("light");
            document.body.style.backgroundColor = "white";
        }
    }

    const doDecoration = (ms) => {
        let design = "";

        if (markSection === ms) {
            if (props.mode === "light") {
                design = "text-decoration-underline text-success";
            }
            else if (props.mode === "dark") {
                design = "text-decoration-underline darkModeGreen";
            }
        }

        if (props.mode === "light") {
            return "lightModeBlue " + design;
        }
        else if (props.mode === "dark") {
            return "darkModeBlue " + design;
        }
    }

    return (
        <section className='d-flex justify-content-center'>
            <nav className={`navbar navbar-expand-lg myNav ${props.mode === "dark" ? "bg-black" : ""}`}>
                <div className="container-fluid">

                    <a onClick={() => {
                        setstopScroll(false);
                        navigate("/");
                        setmarkSection("myHome");
                    }}
                        className={`navbar-brand ${props.mode === "light" ? "text-success" : "darkModeGreen"}`} href="#myHome">World Site</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">

                                <a onClick={() => {
                                    setstopScroll(false);
                                    navigate("/");
                                    setmarkSection("myHome");
                                }}
                                    className={`nav-link fs-4 fw-bold text-primary ${doDecoration("myHome")}`} aria-current="page" href="#myHome">Home</a>

                            </li>

                            <li className="nav-item me-4">

                                <a onClick={() => {
                                    setstopScroll(false);
                                    navigate("/");
                                }}
                                    className={`nav-link fs-4 fw-bold text-primary ${doDecoration("myCarousel")}`} aria-current="page" id="myCarousel-link" href="#myCarousel">Featured</a>

                            </li>

                            <li className="nav-item me-4">

                                <a onClick={() => {
                                    setstopScroll(false);
                                    navigate("/");
                                }}
                                    className={`nav-link fs-4 fw-bold text-primary ${doDecoration("myHighlights")}`} aria-current="page" id="myHighlights-link" href="#myHighlights">Highlights</a>

                            </li>

                            <li className="nav-item me-4">

                                <a onClick={() => {
                                    setstopScroll(false);
                                    navigate("/");
                                }}
                                    className={`nav-link fs-4 fw-bold text-primary ${doDecoration("myAbout")}`} aria-current="page" href="#myAbout" id="myAbout-link">About us</a>

                            </li>

                            <li className="nav-item">

                                <a onClick={() => {
                                    setstopScroll(false);
                                    navigate("/");
                                }}
                                    className={`nav-link fs-4 fw-bold text-primary ${doDecoration("myContact")}`} aria-current="page" id="myContact-link" href="#myContact">Contact us</a>

                            </li>

                            <li className="nav-item ms-4">

                                <Link onClick={() => {
                                    setstopScroll(false);
                                    window.scrollTo(0, 0);
                                    setmarkSection("myAllArticles");
                                }}
                                    className={`nav-link fs-4 fw-bold text-primary ${doDecoration("myAllArticles")}`} aria-current="page" to="/all">All Articles</Link>
                            </li>

                            <li className="nav-item form-check form-switch darkSwitchLi">
                                <label className={`nav-link fs-4 form-check-label ${doDecoration("")}`} aria-current="page" for="darkSwitch">Dark Mode</label>

                                <input onClick={darkModeFunc} className="form-check-input d-inline" type="checkbox" role="switch" id="darkSwitch" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar