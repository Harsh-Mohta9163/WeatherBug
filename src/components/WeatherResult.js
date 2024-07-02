import React from 'react';
import { useLocation } from 'react-router-dom';
import './WeatherResults.css'; // Import the CSS file

export default function WeatherResult() {
  const location = useLocation();
  const { weatherData } = location.state;
  const conditionText = weatherData.current.condition.text.toLowerCase();

  // Determine the background class based on the weather condition
  let backgroundClass = 'weather-results'; // Default class

  if (conditionText.includes('rain')) {
    backgroundClass += ' rain';
  } else if (conditionText.includes('mist')) {
    backgroundClass += ' mist';
  }

  return (
    <div className={backgroundClass}>
      <div className="weather-content">
        <h1>Weather in {weatherData.location.name}</h1>
        <p>Temperature: {weatherData.current.temp_c}°C</p>
        <p>Condition: {weatherData.current.condition.text}</p>
        <img src={`https:${weatherData.current.condition.icon}`} alt="Weather Icon" />
        <p>Humidity: {weatherData.current.humidity}%</p>
        <p>Wind: {weatherData.current.wind_kph} kph</p>
      </div>

      <div className="accordion-container" id="weatherAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingWind">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWind" aria-expanded="false" aria-controls="collapseWind">
              Wind and Direction
            </button>
          </h2>
          <div id="collapseWind" className="accordion-collapse collapse" aria-labelledby="headingWind" data-bs-parent="#weatherAccordion">
            <div className="accordion-body">
              Wind Speed : {weatherData.current.wind_kph} kph
            </div>
            <div className="accordion-body">
              Wind Degree : {weatherData.current.wind_degree} kph
            </div>
            <div className="accordion-body">
              Wind Direction : {weatherData.current.wind_dir} kph
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAirQuality">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAirQuality" aria-expanded="false" aria-controls="collapseAirQuality">
              Air Quality
            </button>
          </h2>
          <div id="collapseAirQuality" className="accordion-collapse collapse" aria-labelledby="headingAirQuality" data-bs-parent="#weatherAccordion">
            <div className="accordion-body">
              {weatherData.current.air_quality.pm2_5} µg/m³ (PM2.5)
            </div> 
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingPressureHumidity">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePressureHumidity" aria-expanded="false" aria-controls="collapsePressureHumidity">
              Pressure and Humidity
            </button>
          </h2>
          <div id="collapsePressureHumidity" className="accordion-collapse collapse" aria-labelledby="headingPressureHumidity" data-bs-parent="#weatherAccordion">
            <div className="accordion-body">
              <p>Pressure: {weatherData.current.pressure_mb} mb</p>
              <p>Humidity: {weatherData.current.humidity}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
