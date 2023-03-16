import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="header">
      <h1 className="heder__title">WeatherMe</h1>
      <div className="header__wrapper">
        <Link to="/WeatherMe-Website/">Главная</Link>
        <Link to="/account">Аккаунт</Link>
        <Link to="/registration">Регистрация</Link>
        <Link to="/authorization">Авторизация</Link>
        <Link to="*">404</Link>
      </div>
    </header>
  );
};

export default NavBar;
