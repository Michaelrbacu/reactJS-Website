import React, { useState, useEffect } from "react";
import "./HomePage.css";

const Home = () => {
  const animationText = "Hi My name is Michael Bacu";
  const characters = "abcdefghijklmnopqrstuvwxyz";

  const getRandomCharacter = () => {
    return characters.charAt(Math.floor(Math.random() * characters.length));
  };

  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    const animateLetter = (index) => {
      let currentText = "";

      const animationInterval = setInterval(() => {
        currentText += getRandomCharacter();
        setAnimatedText((prevText) => prevText.substr(0, index) + currentText);
      }, 25);

      setTimeout(() => {
        clearInterval(animationInterval);
        setAnimatedText((prevText) => prevText.substr(0, index) + animationText.charAt(index));
      }, 100);
    };

    for (let i = 0; i < animationText.length; i++) {
      setTimeout(() => {
        animateLetter(i);
      }, i * 250);
    }
  }, []);

  return (

    <div className="homepage">
      <h1>
          {animatedText}
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
