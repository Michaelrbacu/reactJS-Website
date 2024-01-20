import React, { useState } from "react";

// OpenWeatherMap API configuration
const api = {
  key: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

// List of popular cities for the dropdown
const popularCities = [
  "Greer",
  "London",
  "New York",
  "Paris",
  "Tokyo",
  "Sydney",
  "Dubai",
  "Moscow",
  "Rio de Janeiro",
];

// Weather component
function Weather() {
  // State variables
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to fetch weather data based on the user's query
  const search = () => {
    setShowDropdown(false);
    fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
        console.log(result);
      });
  };

  // Function to handle key press events, triggering search on Enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  // Function to handle input change in the search bar
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  // Function to handle click on a dropdown item
  const handleDropdownClick = (city) => {
    setQuery(city);
    setShowDropdown(false);
  };

  // Function to format the date
  const dateBuilder = (d) => {
    let months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December",
    ];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  // Function to show the dropdown when the search bar is focused
  const handleSearchBarFocus = () => {
    setShowDropdown(true);
  };

  // Get the current time
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  // Render the Weather component
  return (
    <div
      className={
        typeof weather.main !== "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <div className="search-bar-container">
            {/* Input for searching */}
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={handleChange}
              value={query}
              onKeyDown={handleKeyPress}
              onFocus={handleSearchBarFocus}
            />
            <div className="header-bar">
              {/* Button to trigger search */}
              <button className="search-button" onClick={search}>
                Search
              </button>
            </div>
          </div>
          {showDropdown && (
            // Dropdown menu for popular cities
            <div className="dropdown">
              {popularCities.map((city, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleDropdownClick(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>
        {typeof weather.main !== "undefined" ? (
          <div className="top-left">
            {/* Location and date */}
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date()) + " " + time}</div>
            </div>
            {/* Temperature */}
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°C
                <br></br>
                {Math.round(weather.main.temp * (9 / 5) + 32)}°F
              </div>
            </div>

            <div className="bottom-row">
              {/* Weather description */}
              <div className="weather-box2">
                <div>{weather.weather[0].description}</div>
              </div>
              {/* Humidity and Cloudiness */}
              <div className="weather-box2">
                <div>
                  Humidity: {weather.main.humidity} &nbsp; &nbsp; Cloudiness:{" "}
                  {weather.clouds.all}%
                </div>
              </div>
              {/* Wind Speed and Wind Direction */}
              <div className="weather-box2">
                <div>
                  Wind Speed: {weather.wind.speed} &nbsp; &nbsp; Wind Direction:{" "}
                  {weather.wind.deg}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>

      <div></div>
    </div>
  );
}

export default Weather;
