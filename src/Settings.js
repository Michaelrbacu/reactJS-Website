import React, { useState } from "react";
import "./Settings.css";
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
        min="12" // Set your desired minimum font size
        max="24" // Set your desired maximum font size
        value={fontSize}
        onChange={handleFontSizeChange}
      />
      <p>Current Font Size: {fontSize}px</p>
    </div>
  );
};



const Settings = ({ brightness, setBrightness, fontSize, setFontSize }) => {
  const [showSettings, setShowSettings] = useState(false); // Set default state to false

  const handleSettingsButtonClick = () => {
    setShowSettings(prevState => !prevState); // Toggle the visibility
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;



