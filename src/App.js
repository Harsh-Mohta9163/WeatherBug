
import './App.css';
import Navbar from './components/Navbar'
import Search from './components/Search';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherResult from './components/WeatherResult';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Router>
      <Routes>
      <Route path="/" element={<div className="home-background">
              <Search />
              <WeatherDisplay />
            </div>} />
        <Route path="/weather" element={<WeatherResult />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
