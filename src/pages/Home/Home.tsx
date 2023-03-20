import React, { useState } from 'react';
import Form from './components/Form';
import WeatherCard from './components/WeatherCard';
import { getCoordinates, getWeather } from '../../utils/weatherAPI';

const Home = () => {
  const [weather, setWeather] = useState();

  const onChange = async (data: any) => {
    const coordinates = await getCoordinates(data);
    const objWeather = await getWeather(coordinates);
    setWeather(objWeather);
  };

  return (
    <div className="container_home">
      <Form onChange={onChange} />
      <WeatherCard weather={weather} />
    </div>
  );
};

export default Home;
