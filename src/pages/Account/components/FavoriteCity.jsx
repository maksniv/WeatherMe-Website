import React from 'react';

const FavoriteCity = () => {
  return (
    <div className="container___favorite-cities_card">
      <div className="container__favorite-cities_card-name">
        Санкт-Петербург<span>Россия</span>
      </div>
      <input type="checkbox" className="container__favorite-cities_checkbox" />
    </div>
  );
};

export default FavoriteCity;
