import Navbar from './components/Navbar';
import Home from './components/Home';
import Featured from './components/Featured';
import Highlights from './components/Highlights';
import About from './components/About';
import AllArticles from './components/AllArticles';
import NoPage from './components/NoPage';

import { Routes, Route } from "react-router-dom";
import StopScrollState from './contexts/StopScrollState';
import useApp from './methods/useApp';

function App() {
  const {lowerSection, mode, setMode, arr, arr2} = useApp();

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