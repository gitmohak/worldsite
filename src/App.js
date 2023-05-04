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
import articlesData from "./postsData.json";
import aboutData from "./aboutData.json";

function App() {
  let arr = [];
  let arr2 = [];

  for (let i in articlesData) {
    arr.push(<Route exact path={`/articles/${i}`} element={
      <>
        <SinglePost articleNum={i} />
        <Highlights />
        <About />
      </>
    } />);
  }

  for (let i in aboutData) {
    arr2.push(<Route exact path={`/about/${i}`} element={
      <>
        <SinglePost aboutNum={i} />
        <Featured />
        <Highlights />
      </>
    } />);
  }

  return (
    <>
      <Navbar />
      <Routes>

        <Route exact path="/">
          <Route index element={
            <>
              <Home />
              <Featured />
              <Highlights />
              <About />
            </>
          } />

          <Route exact path="all" element={
            <>
              <AllArticles />
              <Featured />
              <About />
            </>
          } />

          {arr}
          {arr2}
          {/* <Route exact path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>

      <Contact />
      <Footer />
    </>
  );
}

export default App;
