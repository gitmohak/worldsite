import Navbar from './components/Navbar';
import Home from './components/Home';
import Featured from './components/Featured';
import Highlights from './components/Highlights';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SinglePost from './components/SinglePost';
import AllArticles from './components/AllArticles';
import NoPage from './components/NoPage';

import { Routes, Route } from "react-router-dom";
import articlesData from "./data/postsData.json";
import aboutData from "./data/aboutData.json";
import { useState } from 'react';

import StopScrollState from './contexts/StopScrollState';

function App() {
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

  return (
    <StopScrollState>
      <Routes>

        <Route exact path="/">
          <Route index element={
            <>
              <Navbar mode={mode} setMode={setMode} />
              <Home mode={mode} />
              <Featured />
              <Highlights mode={mode} />
              <About mode={mode} />
              {lowerSection}
            </>
          } />

          <Route exact path="all" element={
            <>
              <Navbar mode={mode} setMode={setMode} />
              <AllArticles mode={mode} />
              <Featured />
              <About mode={mode} />
              {lowerSection}
            </>
          } />

          {arr}
          {arr2}

          <Route exact path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </StopScrollState>
  );
}

export default App;
