import React, { Suspense, useState } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import "./index.css";
import "./components/weather/weather.css";
import Home from "./components/home/Home";
import BrightnessScrollBar from "./Settings.js";
import settings from './settings.png'; 

//


const About = React.lazy(() => import("./components/about/About"));
const Weather = React.lazy(() => import("./components/weather/Weather"));
const Todo = React.lazy(() => import("./components/todo/todo"));
const Time = React.lazy(() => import("./components/maps/map"));




const App = () => {
  const location = useLocation();
  const [showBrightnessSettings, setShowBrightnessSettings] = useState(false);
  const [brightness, setBrightness] = useState(100);

  const handleBrightnessButtonClick = () => {
    setShowBrightnessSettings(!showBrightnessSettings);
  };

  return (
    <div>
      <nav>

        <ul className="header">
          <li>
                    <img
  src={settings}
  alt="Settings"
  onClick={handleBrightnessButtonClick}
  style={{
    zIndex: 1,
    cursor: 'pointer',
    width: '40px', 
    height: '40px'
  }}
/>
          </li>

          <li>
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li>
            <Link className="nav-link" to="/weather">Weather App</Link>
          </li>
          <li>
            <Link className="nav-link" to="/todo">To Do List</Link>
          </li>
          <li>
            <Link className="nav-link" to="/map">Map</Link>
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
      <BrightnessScrollBar
        showScrollBar={showBrightnessSettings}
        brightness={brightness}
        setBrightness={setBrightness}
      />

      <div
        className="content"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${brightness / 100})`,
        }}
      >
        {}
      </div>
    </div>
  );
};


export default App;


