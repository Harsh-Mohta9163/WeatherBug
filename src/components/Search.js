import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

export default function Search() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiKey = '10d6ebf1f0244e6baad133015240107';
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`);
    const data = await response.json();

    navigate('/weather', { state: { weatherData: data } });
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="container search-container">
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2 search-input"
            type="search"
            placeholder="Search your city"
            aria-label="Search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
