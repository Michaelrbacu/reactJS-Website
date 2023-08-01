import React, { useState, useEffect } from "react";
import './HomePage.css';

const Home = () => {
  /*
  const [displayText, setDisplayText] = useState("");
  const strings = [
    "Hello, I'm Michael Bacu",
  ];

  let counter = 0;

  const options = {
    offset: 0,
    timeout: 15,
    iterations: 5,
    characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
    resolveString: strings[counter],
    element: document.querySelector('[data-target-resolver]')
  };

  const resolver = {
    resolve: function resolve(options, callback) {
      const resolveString = options.resolveString;
      const characters = options.characters;
      const offset = options.offset;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = Object.assign({}, options, { partialString: partialString });
  
      function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
      function randomCharacter(characters) {
        return characters[getRandomInteger(0, characters.length - 1)];
      }
  
      function doRandomiserEffect(options, callback) {
        const characters = options.characters;
        const timeout = options.timeout;
        const element = options.element;
        const partialString = options.partialString;
  
        let iterations = options.iterations;
  
        setTimeout(() => {
          if (iterations >= 0) {
            const nextOptions = Object.assign({}, options, { iterations: iterations - 1 });
  
            // Ensures partialString without the random character as the final state.
            if (iterations === 0) {
              element.textContent = partialString;
            } else {
              // Replaces the last character of partialString with a random character
              element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
            }
  
            doRandomiserEffect(nextOptions, callback);
          } else if (typeof callback === "function") {
            callback();
          }
        }, options.timeout);
      }
  
      function doResolverEffect(options, callback) {
        const resolveString = options.resolveString;
        const characters = options.characters;
        const offset = options.offset;
        const partialString = resolveString.substring(0, offset);
        const combinedOptions = Object.assign({}, options, { partialString: partialString });
  
        doRandomiserEffect(combinedOptions, () => {
          const nextOptions = Object.assign({}, options, { offset: offset + 1 });
  
          if (offset <= resolveString.length) {
            doResolverEffect(nextOptions, callback);
          } else if (typeof callback === "function") {
            callback();
          }
        });
      }
  
      doResolverEffect(combinedOptions, callback);
    }
  };
  
  

  function callback() {
    setTimeout(() => {
      counter ++;
      
      if (counter >= strings.length) {
        counter = 0;
      }
      
      let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
      resolver.resolve(nextOptions, callback);
    }, 3000); // Adjust the timeout between quotes (in milliseconds)
  }

  useEffect(() => {
    resolver.resolve(options, callback);

    return () => {
      // Cleanup if needed
    };
  }, []);


  */
  return (
<div className="homepage">
  <h1>Welcome to My Website</h1>
  <div className="apps-container">
    <div className="apps">
      <h1>My name is Michael Bacu</h1>
      <h4>
        <p>On this website you can find some of the project Ive built.</p>
      </h4>
      <br />
      <a href="https://github.com/Michaelrbacu">Github Profile</a>
      <br />
      <a href="https://www.linkedin.com/in/michael-bacu-181a551a6/">LinkedIn Profile</a>
    </div>
  </div>
</div>

  );
};

export default Home;
