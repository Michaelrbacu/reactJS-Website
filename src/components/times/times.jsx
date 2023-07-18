import React, { useState } from 'react';
import world from './World.jpg';
import Content from './content';
import pinImage from './pin.png'; // Replace 'pin.png' with the actual path to your pin image

const Time = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [selectedButtonId, setSelectedButtonId] = useState(null);

  const handleButtonClick = (buttonId) => {
    console.log(`Button ${buttonId} clicked!`);
    setShowDiv(true);
    setSelectedButtonId(buttonId);
  };

  const handleCloseDiv = () => {
    setShowDiv(false);
    setSelectedButtonId(null);
  };

  return (
    <div style={{ position: 'relative', width: '1600px', height: '1200px' }}>
      <img src={world} alt="Image" style={{ width: '100%', height: '100%' }} />

      <img
  src={pinImage}
  alt="Button 1"
  onClick={() => handleButtonClick(1)}
  style={{
    position: 'absolute',
    top: '50px',
    left: '50px',
    zIndex: 1,
    cursor: 'pointer',
    width: '30px', // Adjust the width as desired
    height: '30px', // Adjust the height as desired
  }}
/>

<img
  src={pinImage}
  alt="Button 2"
  onClick={() => handleButtonClick(2)}
  style={{
    position: 'absolute',
    top: '400px',
    left: '320px',
    zIndex: 1,
    cursor: 'pointer',
    width: '30px', // Adjust the width as desired
    height: '30px', // Adjust the height as desired
  }}
/>


      {showDiv && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)',
            width: '200px',
            height: '400px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            zIndex: 2,
          }}
        >
          <button
            onClick={handleCloseDiv}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 3,
              color: 'white',
              backgroundColor: 'transparent',
              border: 'none',
            }}
          >
            Close
          </button>
          <Content buttonId={selectedButtonId} />
        </div>
      )}
    </div>
  );
};

export default Time;
