import React, { useState, useEffect } from "react";
import "./HomePage.css";

const Text = () => {
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

    <div>
      <h1>
          {animatedText}
        </h1>
    </div>
    
  );
  


  }; 
export default Text;
