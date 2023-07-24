import React from "react";
import './HomePage.css';

const Home = () => {
  return (
    <div className="homepage">
      <h1>Welcome to My Website</h1>
      <div className="apps-container">
        <div className="apps">
        <h1>Hello, I'm Michael Bacu</h1>
      <h4>
        On this website you can find some of the projects I've built, I have other projects on my github as well.
      </h4>
      <br></br>
          <a href="https://github.com/Michaelrbacu">Github Profile</a>
          <a href="https://www.linkedin.com/in/michael-bacu-181a551a6/">LinkedIn Profile</a>
                  </div>
      </div>
    </div>
  );
};

export default Home;
