import React from "react";
import "./index.css";
import ReactDOM from 'react-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./app";
import { HashRouter } from "react-router-dom"; 

// Animation
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

//Changed to HashRouter because BrowserRouter caused 404 errors on refresh.
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);