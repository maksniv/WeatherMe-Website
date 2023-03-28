import React from 'react';

type WeatherCardProps = {
  weather: any;
};

const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <>
      {weather == undefined ? (
        <div className="container__weather-card">
          <span className="container__weather-card_error">Нет данных</span>
        </div>
      ) : (
        <div className="container__weather-card">
          <div className="container__weather-card_city-name">
            {weather.name}
            <span>{weather.sys.country}</span>
          </div>
          <div className="container__weather-wrapper">
            <div className="container__weather-card_temp">
              {weather.main.temp}°C
            </div>
            <div className="container__weather-card_img">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt="icon weather"
              />
            </div>
          </div>
          <div className="container__weather-card_weather-description">
            {weather.weather[0].description}
          </div>
          <div className="container__weather-card_bottom-block">
            <div className="container__weather-card_bottom-block_humidity">
              Влажность: {weather.main.humidity} %
            </div>
            <div className="container__weather-card_bottom-block_visibility">
              Видимость: {weather.visibility} метров
            </div>
            <div className="container__weather-card_bottom-block_air-pressure">
              Давление воздуха: {weather.main.pressure} мм рт. ст.
            </div>
            <div className="container__weather-card_bottom-block_wind">
              Скорость ветра: {weather.wind.speed} м/c
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
