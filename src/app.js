import React, { Suspense, useState } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import "./index.css";
import "./components/weather/weather.css";
import Home from "./components/home/Home";
import BrightnessScrollBar from "./Settings.js";
import settings from './settings.png'; 

const Projects = React.lazy(() => import("./components/projects/Projects"));
const Weather = React.lazy(() => import("./components/weather/Weather"));
const Todo = React.lazy(() => import("./components/todo/todo"));
const ChatBot = React.lazy(() => import("./components/bot/chatbot"));

const App = () => {
  const location = useLocation();
  const [showBrightnessSettings, setShowBrightnessSettings] = useState(false);
  const [brightness, setBrightness] = useState(100);

  const handleBrightnessButtonClick = () => {
    setShowBrightnessSettings(!showBrightnessSettings);
  };
  return (
    <div className="app-container">
      <nav className="sidebar">
        <ul className="header">
          <li>
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <span className="nav-link">React Apps</span>
            <ul className="sub-menu">
              <li>
                <Link className="nav-link" to="/weather">
                  Weather App
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/todo">
                  To Do List
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/chatbot">
                ChatBot
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>


      <div className="content-container">
        <header>
          <img
            src={settings}
            alt="Settings"
            onClick={handleBrightnessButtonClick}
            className="settings-icon"
          />
        </header>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes location={location}>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/chatbot" element={<ChatBot />} />

          </Routes>
        </Suspense>

        <BrightnessScrollBar
          showScrollBar={showBrightnessSettings}
          brightness={brightness}
          setBrightness={setBrightness}
        />
      </div>
    </div>
  );
};

export default App;
