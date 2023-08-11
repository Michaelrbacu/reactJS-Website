import React, { useState, useEffect } from 'react';
import "./nasa.css";

const Nasa = () => {
  const [apodData, setApodData] = useState({});
  const [epicData, setEpicData] = useState([]);
  const [currentApi, setCurrentApi] = useState('apod');
  const apiEndpoints = ['apod', 'epic'];

  const fetchData = (api) => {
    switch (api) {
      case 'apod':
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
          .then(response => response.json())
          .then(data => setApodData(data))
          .catch(error => console.error('Error fetching APOD data:', error));
        break;
      case 'epic':
        fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
          .then(response => response.json())
          .then(data => setEpicData(data))
          .catch(error => console.error('Error fetching EPIC data:', error));
        break;
    }
  };

  useEffect(() => {
    fetchData(currentApi);
  }, [currentApi]);

  const handleApiChange = (api) => {
    setCurrentApi(api);
  };

  return (
    <div>
      <h1>NASA API Features</h1>
      <div>
        <h2>Choose an API feature:</h2>
        <ul>
          {apiEndpoints.map(api => (
            <li key={api}>
              <button onClick={() => handleApiChange(api)}>{api}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {currentApi === 'apod' && apodData.title && (
          <div>
            <h2>{apodData.title}</h2>
            <p>{apodData.explanation}</p>
            <img src={apodData.url} alt={apodData.title} style={{ maxWidth: '100%' }} />
          </div>
        )}
        {currentApi === 'epic' && epicData.length > 0 && (
          <div>
            <h2>EPIC Images</h2>
            <ul>
              {epicData.map((item, index) => (
                <li key={index}>
                  <img src={`https://epic.gsfc.nasa.gov/archive/natural/${item.date.split(' ')[0].replace(/-/g, '/')}/png/${item.image}.png`} alt={`EPIC ${item.date}`} style={{ maxWidth: '100%' }} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Add more cases for other API features */}
      </div>
    </div>
  );
};

export default Nasa;
