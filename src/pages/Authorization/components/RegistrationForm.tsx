import React, { useState } from 'react';

const RegistrationForm = () => {
  const [data, setData] = useState({ email: '', password: '' });

  const handleChange = (event: any): void => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <form className="container__form-authorization">
      <div className="container__form_title">Регистрация</div>
      <div className="container__form_wrapper">
        <input
          className="container__form_input-mail"
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Электронная почта..."
        />
        <input
          className="container__form_input-password"
          id="password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Пароль..."
        />
      </div>
      <button type="submit" className="сontainer__form_button">
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegistrationForm;
