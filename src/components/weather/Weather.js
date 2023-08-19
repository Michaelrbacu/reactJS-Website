import React, { useState } from 'react';



const api = {
  key: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
};

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

function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);

  const search = () => {
    
    setShowDropdown(false);
    fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
  };

  

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleDropdownClick = (city) => {
    setQuery(city);
    setShowDropdown(false);
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const handleSearchBarFocus = () => {
    setShowDropdown(true);
  };
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            




  return (
    <div className={(typeof weather.main !== "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <div className="search-bar-container">
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
      <button className="search-button" onClick={search}>
        Search
      </button>



    </div>
          </div>
          {showDropdown && (
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
        {(typeof weather.main !== "undefined") ? (
            
          
          <div>
            
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date()) + " " + (time)}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
                <br></br>
                {Math.round(weather.main.temp*(9/5)+32)}°F
              </div>
              
              </div>



              <div className="weather-box2">
                  <div>{weather.weather[0].description}</div> 
                  <div>
                    High: {Math.round((weather.main.temp_max * 9/5) + 32)} °F&nbsp;&nbsp;&nbsp;
                    Low: {Math.round((weather.main.temp_min * 9/5) + 32)} °F
                  </div>              
                </div>

               
              <div className="weather-box2">
                            <div>Humidity: {weather.main.humidity} &nbsp; &nbsp;    &nbsp; &nbsp;  Cloudiness: {weather.clouds.all}%</div>
              </div>
              <div className="weather-box2"> 
                <div>Wind Speed: {weather.wind.speed}  &nbsp; &nbsp; Wind Direction: {weather.wind.deg} </div>
              </div>


</div>
            
          
        ) : ('')}
        
      </main>

      <div>

      </div>
    </div>
  );
}

export default Weather;