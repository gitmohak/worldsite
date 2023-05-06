import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import doScrollSpy from "../methods/scrollSpy";

function Navbar() {
    const [markSection, setmarkSection] = useState("myHome");
    const [mode, setMode] = useState("light");

    const navigate = useNavigate();
    const location = useLocation();

    window.onscroll = () => {
        doScrollSpy(location, setmarkSection);
    }

    const darkModeFunc = () =>{
        mode === "light" ? setMode("dark") : setMode("light");
    }

    const doDecoration = (ms) => {
        if(markSection === ms){
            if(mode === "light"){
                return "text-decoration-underline text-success";
            }
            else if(mode === "dark"){
                return "text-decoration-underline darkModeGreen";
            }
        }
        else{
            return "";
        }
    }

    return (
        <nav className={`navbar navbar-expand-lg myNav ${mode === "dark" ? "bg-black" : ""}`}>
            <div className="container-fluid">

                <a onClick={() => {
                    navigate("/");
                    setmarkSection("myHome");
                }}
                    className={`navbar-brand ${mode === "light" ? "text-success" : "darkModeGreen"}`} href="#myHome">World Site</a>

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
                                className={`nav-link fs-5 fw-bold lightModeBlue ${mode === "light" ? "text-primary" : "darkModeBlue"} ${doDecoration("myHome")}`} aria-current="page" href="#myHome">Home</a>

                        </li>

                        <li className="nav-item me-4">

                            <a onClick={() => {
                                navigate("/");
                            }}
                                className={`nav-link fs-5 fw-bold ${doDecoration("myCarousel")}`} aria-current="page" href="#myCarousel">Featured</a>

                        </li>

                        <li className="nav-item me-4">

                            <a onClick={() => {
                                navigate("/");
                            }}
                                className={`nav-link fs-5 fw-bold ${doDecoration("myHighlights")}`} aria-current="page" href="#myHighlights">Highlights</a>

                        </li>

                        <li className="nav-item me-4">

                            <a onClick={() => {
                                navigate("/");
                            }}
                                className={`nav-link fs-5 fw-bold ${doDecoration("myAbout")}`} aria-current="page" href="#myAbout">About us</a>

                        </li>

                        <li className="nav-item me-4">

                            <Link onClick={() => {
                                window.scrollTo(0, 0);
                                setmarkSection("myAllArticles");
                            }}
                                className={`nav-link fs-5 fw-bold text-primary ${doDecoration("myAllArticles")}`} aria-current="page" to="/all">All Articles</Link>
                        </li>

                        <li className="nav-item">

                            <a onClick={() => {
                                navigate("/");
                            }}
                                className={`nav-link fs-5 fw-bold ${doDecoration("myContact")}`} aria-current="page" href="#myContact">Contact us</a>

                        </li>

                        <li className="nav-item form-check form-switch darkSwitchLi">
                            <label className={`nav-link fs-5 form-check-label`} aria-current="page" for="darkSwitch">Dark Mode</label>
                            <input onClick={darkModeFunc} className="form-check-input d-inline" type="checkbox" role="switch" id="darkSwitch" />
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