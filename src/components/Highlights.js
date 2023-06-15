// This component represents the "Highlights" section.

/* useState - to create hover effect and set the place buttons.
useContext - for Context API

postsData.json - a prominent data file created by me to hold the data for all the articles.
stopScrollContext - to stop scrolling when the user enables dark mode
showHighlights - custom JavaScript function to display highlights
PropTypes - to validate the types of props */
import React, { useState, useContext } from 'react';
import data from "../data/postsData.json";
import stopScrollContext from '../contexts/stopScrollContext';
import showHighlights from '../functions/showHighlights';
import PropTypes from 'prop-types';

function Highlights(props) {
    const { setstopScroll } = useContext(stopScrollContext);
    const [hover, setHover] = useState(null);
    const [place, setPlace] = useState("all");

    // use the custom showHighlights method for the functionality of the Highlights panel and generate panel items
    let arr = [];
    showHighlights(place, data, arr, hover, setHover, setstopScroll, props.mode);

    return (
        <section id="myHighlights" className='container highlights'>
            <h1 className={`mt-0 mb-4 ${props.mode === "dark" ? "text-light" : ""}`}>Highlights</h1>

            {/* Clickable header buttons to show Highlights items */}
            <ul className='d-flex myHeaders'>
            {/* eslint-disable */}
                <li><a className={`${place === "all" ? "current-select" : ""} ${props.mode === "dark" ? "text-light" : ""}`} onClick={() =>
                    setPlace("all")
                }>Everything</a></li>

                <li><a className={`${place === "india" ? "current-select" : ""} ${props.mode === "dark" ? "text-light" : ""}`} onClick={() =>
                    setPlace("india")
                } >India</a></li>

                <li><a className={`${place === "america" ? "current-select" : ""} ${props.mode === "dark" ? "text-light" : ""}`} onClick={() =>
                    setPlace("america")
                } >America</a></li>

                <li><a className={`${place === "england" ? "current-select" : ""} ${props.mode === "dark" ? "text-light" : ""}`} onClick={() =>
                    setPlace("england")
                } >England</a></li>
                {/* eslint-enable */}
            </ul>

            {/* Main Highlights items */}
            <section className='main-highlights d-flex flex-row justify-content-around flex-wrap mx-auto'>
                {arr}
            </section>
        </section>
    )
}

Highlights.propTypes = {
    mode: PropTypes.string
};

Highlights.defaultProps = {
    mode: "light"
}

export default Highlights