import React from "react";
import './HomePage.css';

const Home = () => {
  return (
    <div className="homepage">
      <h1>Welcome to My Website</h1>
      <div className="apps-container">
        <div className="apps">
          <h2>Weather App</h2>
          <h4>The Weather App functions by using an API from https://openweathermap.org and displays the information gathered after a user gives it the name of a city.</h4>
        </div>
        <div className="apps">
          <h1>To Do List App</h1>
          <h4>IN PROGRESS: The To Do list will function by the user typing in a new task and the task being stored and displayed on the page until removed.</h4>
        </div>
        <div className="apps">
          <h1>Map App</h1>
          <h4>The Map app is a work in progress app that will display the information and timezones of certain countries when clicked on.</h4>
        </div>
        <div className="apps">
          <h2>App 4</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
