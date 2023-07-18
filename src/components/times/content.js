import React from 'react';

const Content = ({ buttonId }) => {
  let message = '';

  // Set the message based on the button ID
  switch (buttonId) {
    case 1:
      message = 'This is the message for Button 1';
      break;
    case 2:
      message = 'This is the United States The United States is the third-largest country by land area in the world, spanning approximately 9.8 million square kilometers.';
      break;
    // Add more cases as needed
    default:
      message = 'No message available';
  }

  return (
    <div>
      <h2>Message</h2>
      <p>{message}</p>
    </div>
  );
};

export default Content;
