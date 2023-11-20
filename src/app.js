import React, { useState, Suspense } from "react";
import { Route, Routes, Link, useLocation, Navigate } from "react-router-dom";

import "./index.css";
import "./components/weather/weather.css";
import Home from "./components/home/Home";
import Settings from "./Settings";
import settings from "./settings.png";
import LoadingScreen from "./components/home/LoadingScreen";

const Projects = React.lazy(() => import("./components/projects/Projects"));
const Weather = React.lazy(() => import("./components/weather/Weather"));
const Todo = React.lazy(() => import("./components/todo/todo"));
const ChatBot = React.lazy(() => import("./components/bot/chatbot"));
const GitHubInfo = React.lazy(() => import("./components/github/GitHubInfo"));
const Nasa = React.lazy(() => import("./components/nasa/nasa"));

const App = () => {
  const location = useLocation();
  const [showSettings, setShowSettings] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const [fontSize, setFontSize] = useState(16);
  const [background, setBackground] = useState(
    'url("./background.jpg") no-repeat center center fixed'
  );
  const [loadingFinished, setLoadingFinished] = useState(false);

  const handleLoadingFinish = () => {
    setLoadingFinished(true);
  };

  const handleSettingsButtonClick = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div>
      <LoadingScreen onFinishLoading={handleLoadingFinish} />
      {loadingFinished && (
        <div className="app-container">
          <nav>
            <ul className="header">
              <li>
                <br />
              </li>
              <li>
                <br />
              </li>
              <li>
                <br />
              </li>
              <li>
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-link-container">
                <span className="nav-link">API Projects</span>
                <ul className="sub-menu">
                  <li>
                    <Link className="nav-link" to="/api">
                      Github API
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/weather">
                      Weather App
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/nasa">
                      NASA API
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="nav-link" to="/projects">
                  Github Projects
                </Link>
              </li>
              <li className="nav-link-container">
                <span className="nav-link">React Apps</span>
                <ul className="sub-menu">
                  <li>
                    <Link className="nav-link" to="/todo">
                      To Do List
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="content-container">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes location={location}>
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/api" element={<GitHubInfo />} />
                <Route path="/nasa" element={<Nasa />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
