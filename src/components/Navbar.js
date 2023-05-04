import React, {useState} from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    const [markSection, setmarkSection] = useState("myHome");

    // window.onscroll = () => {
    //   const myHome = document.getElementById("myHome");
    //   const myCarousel = document.getElementById("myCarousel");
    //   const myHighlights = document.getElementById("myHighlights");
    //   const myAbout = document.getElementById("myAbout");
    //   const myContact = document.getElementById("myContact");
  
    //   if (window.scrollY + 20 >= myContact.offsetTop) {
    //     setmarkSection("myContact");
    //   }
  
    //   else if (window.scrollY + 20 >= myAbout.offsetTop) {
    //     setmarkSection("myAbout");
    //   }
  
    //   else if (window.scrollY + 20 >= myHighlights.offsetTop) {
    //     setmarkSection("myHighlights");
    //   }
  
    //   else if (window.scrollY + 20 >= myCarousel.offsetTop) {
    //     setmarkSection("myCarousel");
    //   }
  
    //   else if (window.scrollY + 20 >= myHome.offsetTop) {
    //     setmarkSection("myHome");
    //   }
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
                                <a className={`nav-link fs-5 fw-bold text-primary ${markSection === "myHome" ? "text-decoration-underline text-success" : ""}`} aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item me-4">
                                <a className={`nav-link fs-5 fw-bold ${markSection === "myCarousel" ? "text-decoration-underline text-success" : ""}`} aria-current="page" href="#myCarousel">Featured</a>
                            </li>

                            <li className="nav-item me-4">
                                <a className={`nav-link fs-5 fw-bold ${markSection === "myHighlights" ? "text-decoration-underline text-success" : ""}`} aria-current="page" href="#myHighlights">Highlights</a>
                            </li>

                            <li className="nav-item me-4">
                                <a className={`nav-link fs-5 fw-bold ${markSection === "myAbout" ? "text-decoration-underline text-success" : ""}`} aria-current="page" href="#myAbout">About us</a>
                            </li>

                            <li className="nav-item me-4">
                                <Link className="nav-link fs-5 fw-bold" aria-current="page" to="/all">All Articles</Link>
                            </li>

                            <li className="nav-item">
                                <a className={`nav-link fs-5 fw-bold ${markSection === "myContact" ? "text-decoration-underline text-success" : ""}`} aria-current="page" href="#myContact">Contact us</a>
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