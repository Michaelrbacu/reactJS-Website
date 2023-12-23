import React, { useState } from "react";
import "./index.css";
import settings from './settings.png';

const BrightnessSettings = ({ brightness, setBrightness }) => {
  const handleBrightnessChange = (e) => {
    setBrightness(e.target.value);
    document.documentElement.style.setProperty(
      "--brightness",
      e.target.value / 100
    );
  };

  return (
    <div className="brightness-popup">
      <h3>Brightness Settings</h3>
      <input
        type="range"
        min="0"
        max="100"
        value={brightness}
        onChange={handleBrightnessChange}
      />
    </div>
  );
};

const FontSizeSettings = ({ fontSize, setFontSize }) => {
  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    document.documentElement.style.setProperty("--base-font-size", `${e.target.value}px`);
  };

  return (
    
    <div className="font-size-popup">
      <h3>Font Size Settings</h3>
      <input
        type="range"
        min="12" 
        max="24" 
        value={fontSize}
        onChange={handleFontSizeChange}
      />
      <p>Current Font Size: {fontSize}px</p>
    </div>
  );
};



const Settings = ({ brightness, setBrightness, fontSize, setFontSize, setBackground }) => {
  const [showSettings, setShowSettings] = useState(false); 

  const handleSettingsButtonClick = () => {
    setShowSettings(prevState => !prevState);
  };

  
  const handleBackgroundSwitch = () => {
    document.documentElement.style.setProperty('--background-image', 'url("./background2.jpg")');
  };
  
  

  return (
    <div className="settings">
      <header>
        <img
          src={settings}
          alt="Settings"
          onClick={handleSettingsButtonClick}
          className="settings-icon"
        />
      </header>

      {/* Conditionally render the lines and content div */}
      {showSettings && (
        <div class="lines">
          <div className="content" style={{ flexDirection: 'column' }}>
            <BrightnessSettings brightness={brightness} setBrightness={setBrightness} />
            <FontSizeSettings fontSize={fontSize} setFontSize={setFontSize} />
            <button onClick={handleBackgroundSwitch}>Change Theme --in progress</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;