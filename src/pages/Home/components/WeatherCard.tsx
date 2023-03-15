import React from 'react';

const WeatherCard = () => {
  return (
    <div className="container__weather-card">
      <div className="container__weather-card_city-name">
        Санкт-Петербург<span>Россия</span>
      </div>
      <div className="container__weather-wrapper">
        <div className="container__weather-card_temp">27°C</div>
        <div className="container__weather-card_img"> </div>
      </div>
      <div className="container__weather-card_bottom-block">
        <div className="container__weather-card_bottom-block_humidity">
          Влажность: 10
        </div>
        <div className="container__weather-card_bottom-block_visibility">
          Видимость: 10
        </div>
        <div className="container__weather-card_bottom-block_air-pressure">
          Давление воздуха: 10
        </div>
        <div className="container__weather-card_bottom-block_wind">
          Скорость ветра: 10
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
