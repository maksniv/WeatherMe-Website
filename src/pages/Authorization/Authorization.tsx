import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Authorization = () => {
  const [data, setData] = useState({ email: '', password: '' });

  const handleChange = (event: any): void => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form className="container__authorization-form" onSubmit={handleSubmit}>
      <div className="container__authorization-form_title">Авторизация</div>
      <div className="container__authorization-form_wrapper">
        <input
          className="container__authorization-form_input-mail"
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Электронная почта..."
        />
        <input
          className="container__authorization-form_input-password"
          id="password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Пароль..."
        />
        <span className="сontainer__authorization-form_span">
          Еще нет аккаунта?
          <Link
            className="container__authorization-form_link"
            to="/registration"
          >
            Зарегистрироваться!
          </Link>
        </span>
      </div>
      <button
        type="submit"
        disabled={true}
        className="сontainer__authorization-form_button"
      >
        Авторизоваться
      </button>
    </form>
  );
};

export default Authorization;
