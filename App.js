import React, { Suspense } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";

import Home from "./components/home/Home";

const About = React.lazy(() => import("./components/about/About"));

const App = () => {
  const location = useLocation();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes location={location}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
