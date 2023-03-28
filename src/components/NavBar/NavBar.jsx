import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const activeLink = 'header__link header__link-active';
  const normalLink = 'header__link';

  return (
    <header className="header">
      <h1 className="heder__title">WeatherMe</h1>
      <div className="header__wrapper-link">
        <NavLink
          to="/WeatherMe-Website/"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Главная
        </NavLink>
        <NavLink
          to="/account"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Аккаунт
        </NavLink>
        <NavLink
          to="/authorization"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Авторизация
        </NavLink>
        {/* <NavLink to="*">404</NavLink> */}
        <button>Выйти</button>
      </div>
    </header>
  );
};

export default NavBar;
