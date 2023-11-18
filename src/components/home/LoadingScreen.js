import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onFinishLoading }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      onFinishLoading();
    }, 4000); // 4 seconds

    return () => clearTimeout(timeout);
  }, [onFinishLoading]);

  return (
    loading && (
      <div className="center">
        <div class="center">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        </div>
      </div>
    )
  );
};

export default LoadingScreen;
