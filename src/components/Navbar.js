import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark myNav">
            <div className="container-fluid">
                <a className="navbar-brand text-success" href="#">World Site</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-4">
                            <a className="nav-link fs-5 fw-bold text-decoration-underline text-success" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link fs-5 fw-bold" aria-current="page" href="#">Featured</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link fs-5 fw-bold" aria-current="page" href="#">Highlights</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link fs-5 fw-bold" aria-current="page" href="#">All Articles</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link fs-5 fw-bold" aria-current="page" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 fw-bold" aria-current="page" href="#">Contact us</a>
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