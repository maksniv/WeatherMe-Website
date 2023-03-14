import React from 'react';
import Form from './components/Form';
import WeatherCard from './components/WeatherCard';

const Home = () => {
  return (
    <>
      <div className="container">
        <Form />
        <WeatherCard />
      </div>
    </>
  );
};

export default Home;
