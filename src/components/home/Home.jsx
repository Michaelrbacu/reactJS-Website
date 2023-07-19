import React from "react";
import './HomePage.css';


const Home = () => {
  return (

    <div className="homepage">
      <h1>Welcome to My Website</h1>
      <div className="apps-container">
        <div className="app">
          <h2>App 1</h2>
          <p>This is the description of App 1.</p>
          {/* Add any functionality or links for App 1 */}
        </div>
        <div className="app">
          <h2>App 2</h2>
          <p>This is the description of App 2.</p>
          {/* Add any functionality or links for App 2 */}
        </div>
        {/* Add more app components as needed */}
      </div>
    </div>
  );
};

export default Home;
