import React from "react";
import "./BrightnessScrollBar.css";

const BrightnessScrollBar = ({ showScrollBar, brightness, setBrightness }) => {
  const handleBrightnessChange = (e) => {
    setBrightness(e.target.value);
  };

  return (
    <div className={`brightness-settings ${showScrollBar ? "active" : ""}`}>
      <div className="brightness-popup">
        <h3>Settings</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={handleBrightnessChange}
        />
      </div>
    </div>
  );
};

export default BrightnessScrollBar;
