import React, { useState, useContext } from 'react';
import data from "../data/postsData.json";
import { Link } from "react-router-dom";
import stopScrollContext from '../contexts/stopScrollContext';

function Highlights(props) {
    const { setstopScroll } = useContext(stopScrollContext);

    const [hover, setHover] = useState(null);

    const myEnter = (num) => {
        setHover(num);
    }

    const myLeave = () => {
        setHover(-1);
    }

    const [place, setPlace] = useState("all");

    let arr = [];

    let choices = [];
    switch (place) {
        default:
            choices = [2, 15, 7, 9, 17, 4];
            break;

        case "india":
            choices = [0, 1, 2, 3, 4, 5];
            break;

        case "america":
            choices = [6, 7, 8, 9, 10, 11];
            break;

        case "england":
            choices = [12, 13, 14, 15, 16, 17];
    }

    for (let i = 0; i < data.length; i++) {
        for (let j of choices) {

            if (i === j) {
                arr.push(
                    <div onMouseEnter={() => {
                        myEnter(i);
                    }}

                        onMouseLeave={myLeave}>

                        <Link onClick={() => {
                            setstopScroll(false);
                        }}
                            to={`/articles/${i}`}>
                            <h3 className='d-flex align-items-center justify-content-center'>{data[i].region}</h3>
                        </Link>
                        <img className={`w-100 h-100 ${hover === i ? "hoverEffect" : ""}`} src={place === "all" ? data[i].image2 : data[i].image1} alt="Terrific Location" />
                    </div>
                )
            }
        }
    }

    return (
        <section id="myHighlights" className='container highlights'>
            <h1 className={`mt-0 mb-4 ${props.mode === "dark" ? "text-light" : ""}`}>Highlights</h1>
            <ul className='d-flex myHeaders'>
                <li><a className={`${place === "all" ? "current-select" : ""} ${props.mode === "dark" ? "text-light" : ""}`} onClick={() => {
                    setPlace("all");
                }}>Everything</a></li>

                <li><a className={`${place === "india" ? "current-select" : ""} ${props.mode === "dark" ? "text-light" : ""}`} onClick={() => {
                    setPlace("india");
                }} >India</a></li>

                <li><a className={`${place === "america" ? "current-select" : ""} ${props.mode === "dark" ? "text-light" : ""}`} onClick={() => {
                    setPlace("america");
                }} >America</a></li>

                <li><a className={`${place === "england" ? "current-select" : ""} ${props.mode === "dark" ? "text-light" : ""}`} onClick={() => {
                    setPlace("england");
                }} >England</a></li>
            </ul>

            <section className='main-highlights d-flex flex-row justify-content-around flex-wrap mx-auto'>
                {arr}
            </section>
        </section>
    )
}

export default Highlights