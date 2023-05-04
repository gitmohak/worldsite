import Navbar from './components/Navbar';
import Home from './components/Home';
import Featured from './components/Featured';
import Highlights from './components/Highlights';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SinglePost from './components/SinglePost';
import AllArticles from './components/AllArticles';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/">
            <Route index element={<Home />} />
            {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

      <Featured />
      <Highlights />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
