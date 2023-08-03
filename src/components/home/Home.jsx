import React, { useState, useEffect } from "react";
import "./HomePage.css";

const Home = () => {
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);

  useEffect(() => {
    // Add a timeout to delay setting the animation complete state
    const timeout = setTimeout(() => {
      setTextAnimationComplete(true);
    }, 5000); // Set the delay time here (in milliseconds)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="homepage">
      <h1>
        {/* Wrapping each letter in a span for the animation */}
        <React.Fragment>
          {Array.from("Hi, my name is Michael Bacu").map((letter, index) => (
            <React.Fragment key={index}>
              <span
                className={`animated-letter}`}
                style={{
                  animation: `fadeIn 2.5s ${index * 0.1}s`,
                }}
              >
                {letter}
              </span>
              &nbsp; {/* Non-breaking space */}
            </React.Fragment>
          ))}
        </React.Fragment>
      </h1>
      <div className="card">
        <div class="lines">
          <div class="imgBx">
          <img src=""/>
          </div>

          </div>
          <div class="content">
            <p>On this website, you can find some of the projects I've built. <br /> <br /> Below there is a link to my 
            github to many of my other projects I've worked on learning other languages.</p>
            </div>
          <div class="details">
                <br />
                  <a href="https://github.com/Michaelrbacu">Github Profile</a>
                  <br />
                  <a href="https://www.linkedin.com/in/michael-bacu-181a551a6/">LinkedIn Profile</a>
              
          </div>
        <div>
        </div>
        
      </div>
      {/* The rest of your JSX code remains unchanged... */}
    </div>
  
  );
};

export default Home;
