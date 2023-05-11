import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SinglePost from '../components/SinglePost';
import Navbar from '../components/Navbar';
import Highlights from '../components/Highlights';
import About from '../components/About';
import Featured from '../components/Featured';

import articlesData from "../data/postsData.json";
import aboutData from "../data/aboutData.json";

import { useState } from 'react';
import { Route } from "react-router-dom";

function useApp() {
    const [mode, setMode] = useState("light");
    let arr = [];
    let arr2 = [];

    const lowerSection = <>
        <Contact mode={mode} />
        <Footer mode={mode} />
    </>

    for (let i in articlesData) {
        arr.push(<Route key={i} exact path={`/articles/${i}`} element={
            <>
                <Navbar mode={mode} setMode={setMode} />
                <SinglePost mode={mode} articleNum={i} />
                <Highlights mode={mode} />
                <About mode={mode} />
                {lowerSection}
            </>
        } />);
    }

    for (let i in aboutData) {
        arr2.push(<Route key={i} exact path={`/about/${i}`} element={
            <>
                <Navbar mode={mode} setMode={setMode} />
                <SinglePost mode={mode} aboutNum={i} />
                <Featured />
                <Highlights mode={mode} />
                {lowerSection}
            </>
        } />);
    }

    return {lowerSection, mode, setMode, arr, arr2}
}

export default useApp