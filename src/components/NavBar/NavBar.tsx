import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavBar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

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
        {isAuth && (
          <NavLink
            to="/account"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Аккаунт
          </NavLink>
        )}

        {!isAuth && (
          <NavLink
            to="/authorization"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Авторизация
          </NavLink>
        )}
        {isAuth && (
          <button
            className="header__wrapper-button"
            onClick={() => {
              dispatch(removeUser());
              navigate('/WeatherMe-Website');
            }}
          >
            Выйти
          </button>
        )}
        {/* <NavLink to="*">404</NavLink> */}
      </div>
    </header>
  );
};

export default NavBar;
