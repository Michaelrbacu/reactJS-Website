import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "./nasa.css";

const Nasa = () => {
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [apodData, setApodData] = useState({});
  const [neoData, setNeoData] = useState([]);
  const [marsRoverPhotos, setMarsRoverPhotos] = useState([]);
  const [exoplanetData, setExoplanetData] = useState([]);
  const [epicData, setEpicData] = useState([]);
  const [insightData, setInsightData] = useState([]);
  const [eonetData, setEonetData] = useState([]);
  const [issLocation, setIssLocation] = useState({});
  const [keplerExoplanetData, setKeplerExoplanetData] = useState([]);
  const [sdoData, setSdoData] = useState([]);
  const [donkiData, setDonkiData] = useState([]);
  const [geneLabData, setGeneLabData] = useState([]);

  const [currentApi, setCurrentApi] = useState('apod');
  const apiEndpoints = [
    'apod', 'neo', 'marsRoverPhotos', 'exoplanetData', 'epic',
    'insightData', 'eonetData', 'issLocation', 'keplerExoplanetData',
    'sdoData', 'donkiData', 'geneLabData'
  ];

  const fetchData = (api) => {
    switch (api) {
      case 'apod':
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
          .then(response => response.json())
          .then(data => setApodData(data))
          .catch(error => console.error('Error fetching APOD data:', error));
        break;
      case 'neo':
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
          .then(response => response.json())
          .then(data => setNeoData(data))
          .catch(error => console.error('Error fetching NEO data:', error));
        break;
      case 'marsRoverPhotos':
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
          .then(response => response.json())
          .then(data => setMarsRoverPhotos(data.photos))
          .catch(error => console.error('Error fetching Mars Rover Photos data:', error));
        break;
      case 'exoplanetData':
        fetch(`https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json`)
          .then(response => response.json())
          .then(data => setExoplanetData(data))
          .catch(error => console.error('Error fetching Exoplanet Archive data:', error));
        break;
      case 'epic':
        fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
          .then(response => response.json())
          .then(data => setEpicData(data))
          .catch(error => console.error('Error fetching EPIC data:', error));
        break;
      case 'insightData':
        fetch(`https://api.nasa.gov/insight_weather/?api_key=${process.env.REACT_APP_NASA_API_KEY}&feedtype=json&ver=1.0`)
          .then(response => response.json())
          .then(data => setInsightData(data))
          .catch(error => console.error('Error fetching InSight data:', error));
        break;
      case 'eonetData':
        fetch(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/events`)
          .then(response => response.json())
          .then(data => setEonetData(data.events))
          .catch(error => console.error('Error fetching EONET data:', error));
        break;
      case 'issLocation':
        fetch(`https://api.wheretheiss.at/v1/satellites/25544`)
          .then(response => response.json())
          .then(data => setIssLocation(data))
          .catch(error => console.error('Error fetching ISS Location data:', error));
        break;
      case 'keplerExoplanetData':
        fetch(`https://api.nasa.gov/kepler/api/systems/223`)
          .then(response => response.json())
          .then(data => setKeplerExoplanetData(data))
          .catch(error => console.error('Error fetching Kepler Exoplanet data:', error));
        break;
      case 'sdoData':
        fetch(`https://api.nasa.gov/dsn/api/solar_system_bodies/?limit=5`)
          .then(response => response.json())
          .then(data => setSdoData(data))
          .catch(error => console.error('Error fetching SDO data:', error));
        break;
      case 'donkiData':
        fetch(`https://api.nasa.gov/donki/notifications?type=all&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
          .then(response => response.json())
          .then(data => setDonkiData(data))
          .catch(error => console.error('Error fetching Donki data:', error));
        break;
      case 'geneLabData':
        fetch(`https://genelab-data.ndc.nasa.gov/genelab/data/genes/?limit=5`)
          .then(response => response.json())
          .then(data => setGeneLabData(data))
          .catch(error => console.error('Error fetching GeneLab data:', error));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    fetchData(currentApi);
  }, [currentApi]);

  const handleApiChange = (api) => {
    setCurrentApi(api);
  };

  const handleLightboxOpen = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  
  const handleLightboxClose = () => {
    setLightboxOpen(false);
  };
  


  return (
    <div id="nasa-section">
      <h1>NASA API Features</h1>
      <div className="api-list">
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
            {currentApi === 'apod' && (
        <div className="api-feature">
          <h2>Astronomy Picture of the Day</h2>
          <div className="api-content">

            <div className="api-image"> 
             <h1 className='apodtitle'>Title: {apodData.title}</h1>

              <img src={apodData.url} alt={apodData.title} />
            </div>
            <div className="api-description">
              <p>Explanation: {apodData.explanation}</p>
            </div>
          </div>
        </div>
      )}
        {currentApi === 'neo' && (
          <div className="api-section">
          <h2>Near Earth Objects</h2>
          <ul className="gallery">
              {neoData.near_earth_objects &&
                neoData.near_earth_objects.map((item, index) => (
                  <li key={index} className="neo-item">
                    <h3>Name: {item.name}</h3>
                    <p>Reference ID: {item.neo_reference_id}</p>
                    <p>Close Approach Date: {item.close_approach_data[0].close_approach_date}</p>
                    <p>Miss Distance: {item.close_approach_data[0].miss_distance.kilometers} km</p>
                    <p>Relative Velocity: {item.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</p>
                  </li>
                ))}
            </ul>
          </div>
        )}



{currentApi === 'marsRoverPhotos' && (
  <div>
    <h2>Mars Rover Photos</h2>
    <ul className="gallery">
      {marsRoverPhotos.map((photo, index) => (
        <li key={index} onClick={() => handleLightboxOpen(index)}>
          <img src={photo.img_src} alt={`Mars Rover Photo ${index}`} />
        </li>
      ))}
    </ul>
    {lightboxOpen && (
      <Lightbox
        mainSrc={marsRoverPhotos[lightboxIndex].img_src}
        nextSrc={marsRoverPhotos[(lightboxIndex + 1) % marsRoverPhotos.length].img_src}
        prevSrc={marsRoverPhotos[(lightboxIndex + marsRoverPhotos.length - 1) % marsRoverPhotos.length].img_src}
        onCloseRequest={handleLightboxClose}
        onMovePrevRequest={() => setLightboxIndex((lightboxIndex + marsRoverPhotos.length - 1) % marsRoverPhotos.length)}
        onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % marsRoverPhotos.length)}
      />
    )}
  </div>
)}

  {currentApi === 'exoplanetData' && (
    <div>
      <h2>Exoplanet Archive</h2>
      <ul>
        {exoplanetData.map((planet, index) => (
          <li key={index}>{planet.pl_name}</li>
        ))}
      </ul>
    </div>
  )}
{currentApi === 'epic' && (
  <div>
    <h2>Earth Polychromatic Imaging Camera (EPIC)</h2>
    <ul className="gallery">
      {epicData.map((item, index) => (
        <li key={index} onClick={() => handleLightboxOpen(index)}>
          <img src={`https://epic.gsfc.nasa.gov/archive/natural/${item.date.split(' ')[0].replace(/-/g, '/')}/png/${item.image}.png`} alt={`EPIC ${item.date}`} />
        </li>
      ))}
    </ul>
    {lightboxOpen && (
      <Lightbox
        mainSrc={`https://epic.gsfc.nasa.gov/archive/natural/${epicData[lightboxIndex].date.split(' ')[0].replace(/-/g, '/')}/png/${epicData[lightboxIndex].image}.png`}
        nextSrc={`https://epic.gsfc.nasa.gov/archive/natural/${epicData[(lightboxIndex + 1) % epicData.length].date.split(' ')[0].replace(/-/g, '/')}/png/${epicData[(lightboxIndex + 1) % epicData.length].image}.png`}
        prevSrc={`https://epic.gsfc.nasa.gov/archive/natural/${epicData[(lightboxIndex + epicData.length - 1) % epicData.length].date.split(' ')[0].replace(/-/g, '/')}/png/${epicData[(lightboxIndex + epicData.length - 1) % epicData.length].image}.png`}
        onCloseRequest={handleLightboxClose}
        onMovePrevRequest={() => setLightboxIndex((lightboxIndex + epicData.length - 1) % epicData.length)}
        onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % epicData.length)}
      />
    )}
  </div>
)}

{currentApi === 'insightData' && insightData && (
  <div>
    <h2>InSight Mars Lander Data</h2>
    <p>Season: {insightData.season}</p>
    <p>Average Temperature: {insightData.average_temp}</p>
  </div>
)}

{currentApi === 'eonetData' && (
  <div>
    <h2>Earth Observatory Natural Event Tracker (EONET)</h2>
    {eonetData && eonetData.length > 0 ? (
      <ul>
        {eonetData.map((event, index) => (
          <li key={index}>
            <p>Event Title: {event.title}</p>
            <p>Category: {event.categories[0].title}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No data available for this API.</p>
    )}
  </div>
)}


{currentApi === 'issLocation' && issLocation && (
  <div>
    <h2>International Space Station (ISS) Location</h2>
    <p>Latitude: {issLocation.latitude}</p>
    <p>Longitude: {issLocation.longitude}</p>
  </div>
)}

{currentApi === 'keplerExoplanetData' && keplerExoplanetData && (
  <div>
    <h2>Kepler Exoplanet Data</h2>
    <ul>
      {keplerExoplanetData.map((planet, index) => (
        <li key={index}>
          <p>Planet Name: {planet.pl_name}</p>
          <p>Discovery Method: {planet.pl_discmethod}</p>
        </li>
      ))}
    </ul>
  </div>
)}

{currentApi === 'sdoData' && sdoData && (
  <div>
    <h2>Solar Dynamics Observatory (SDO) Data</h2>
    <ul>
      {sdoData.bodies.map((body, index) => (
        <li key={index}>
          <p>Body Name: {body.bodyName}</p>
          <p>Body Type: {body.bodyType}</p>
        </li>
      ))}
    </ul>
  </div>
)}

{currentApi === 'donkiData' && donkiData && (
  <div>
    <h2>Space Weather Database of Notifications, Knowledge, Information (DONKI)</h2>
    <ul>
      {donkiData.map((notification, index) => (
        <li key={index}>
          <p>Event Type: {notification.messageType}</p>
          <p>Start Time: {notification.startTime}</p>
          <p>End Time: {notification.endTime}</p>
          <p>Activity ID: {notification.activityID}</p>
          <p>Event Description: {notification.messageBody}</p>
        </li>
      ))}
    </ul>
  </div>
)}

{currentApi === 'geneLabData' && geneLabData && (
  <div>
    <h2>GeneLab Data</h2>
    <ul>
      {geneLabData.map((gene, index) => (
        <li key={index}>
          <p>Gene Name: {gene.gene_name}</p>
          <p>Organism: {gene.organism}</p>
        </li>
      ))}
    </ul>
  </div>
)}


      </div>
    </div>
  );
};

export default Nasa;
