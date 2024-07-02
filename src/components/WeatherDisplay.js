import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WeatherDisplay.css';

export default function WeatherDisplay() {
  const [weatherDataList, setWeatherDataList] = useState([]);
  const navigate = useNavigate();

  const countries = ["India", "USA", "Germany", "Switzerland", "China", "Russia"];

  // Fetch weather data for each country
  const fetchWeatherData = async (country) => {
    const apiKey = '10d6ebf1f0244e6baad133015240107';
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}&aqi=yes`);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchAllWeatherData = async () => {
      const dataList = await Promise.all(countries.map(country => fetchWeatherData(country)));
      setWeatherDataList(dataList);
    };

    fetchAllWeatherData();
  }, []);

  const handleMoreClick = (data) => {
    navigate('/weather', { state: { weatherData: data } });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <h2 className='text-center'>Explore Weather</h2>
        {weatherDataList.map((data, index) => (
          <div key={index} className="col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{data.location.name}</h5>
                
                <img src={`https:${data.current.condition.icon}`} alt="Weather Icon" />
                <p className="card-text">Condition: {data.current.condition.text}</p>
                <p className="card-text">Temperature: {data.current.temp_c}°C</p>
                
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => handleMoreClick(data)}
                >
                  More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
