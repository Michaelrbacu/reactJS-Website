import React, { Suspense } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import "./index.css";
import "./components/weather/weather.css";

import Home from "./components/home/Home";

//


const About = React.lazy(() => import("./components/about/About"));
const Weather = React.lazy(() => import("./components/weather/Weather"));
const Todo = React.lazy(() => import("./components/todo/todo"));
const Time = React.lazy(() => import("./components/maps/map"));


const App = () => {
  const location = useLocation();

  return (
    <div>
      <nav>
        <ul className="header">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/weather">Weather App</Link>
          </li>
          <li>
            <Link to="/todo">To Do List</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
          <li>
          
         </li>
        </ul>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes location={location}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/map" element={<Time />} />

        </Routes>
      </Suspense>
    </div>
  );
};



export default App;


