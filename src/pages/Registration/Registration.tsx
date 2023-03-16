import React, { useState } from 'react';

const Registration = () => {
  const [data, setData] = useState({ email: '', password: '' });

  const handleChange = (event: any): void => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <form className="container__registration-form">
      <div className="container__registration-form_title">Регистрация</div>
      <div className="container__registration-form_wrapper">
        <input
          className="container__registration-form_input-mail"
          id="email"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Электронная почта..."
        />
        <input
          className="container__registration-form_input-password"
          id="password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Пароль..."
        />
      </div>
      <button type="submit" className="сontainer__registration-form_button">
        Зарегистрироваться
      </button>
    </form>
  );
};

export default Registration;
