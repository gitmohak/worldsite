import Navbar from './components/Navbar';
import Home from './components/Home';
import Featured from './components/Featured';
import Highlights from './components/Highlights';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SinglePost from './components/SinglePost';
import AllArticles from './components/AllArticles';

import { Routes, Route } from "react-router-dom";
import articlesData from "./data/postsData.json";
import aboutData from "./data/aboutData.json";
import { useState } from 'react';

import StopScrollState from './contexts/StopScrollState';

function App() {
  const [mode, setMode] = useState("light");
  let arr = [];
  let arr2 = [];

  for (let i in articlesData) {
    arr.push(<Route exact path={`/articles/${i}`} element={
      <>
        <SinglePost mode={mode} articleNum={i} />
        <Highlights mode={mode} />
        <About mode={mode} />
      </>
    } />);
  }

  for (let i in aboutData) {
    arr2.push(<Route exact path={`/about/${i}`} element={
      <>
        <SinglePost mode={mode} aboutNum={i} />
        <Featured />
        <Highlights mode={mode} />
      </>
    } />);
  }

  return (
    <StopScrollState>
      <Navbar mode={mode} setMode={setMode} />
      <Routes>

        <Route exact path="/">
          <Route index element={
            <>
              <Home mode={mode} />
              <Featured />
              <Highlights mode={mode} />
              <About mode={mode} />
            </>
          } />

          <Route exact path="all" element={
            <>
              <AllArticles mode={mode} />
              <Featured />
              <About mode={mode} />
            </>
          } />

          {arr}
          {arr2}
          {/* <Route exact path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>

      <Contact mode={mode} />
      <Footer mode={mode} />
    </StopScrollState>
  );
}

export default App;
