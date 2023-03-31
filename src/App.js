import React, { useState, useEffect } from 'react';
import kevin from './kevin_3.jpeg';
import './App.css';

function GroundhogDayCounter() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const groundhogDay = new Date("April 3, 2023 08:00:00").getTime();
      const now = new Date().getTime();
      const distance = groundhogDay - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={kevin} className="App-logo" alt="logo" />
    <div>
      <h1>Countdown to Kevin:</h1>
      <h2>{days} days {hours} hours {minutes} minutes {seconds} seconds</h2>
      <h1>Don't lie</h1>
      <h1>Don't say no</h1>
      <h1>In the arena ≠ friends</h1>
    </div>
  </header>
    </div>
    
  );
}

export default GroundhogDayCounter;
