import React from 'react';

const Registration = () => {
  return (
    <form className="container__registration-form">
      <div className="container__registration-form_title">Регистрация</div>
      <div className="container__registration-form_wrapper">
        <input
          className="container__registration-form_input-mail"
          type="text"
          placeholder="Электронная почта..."
          value=""
        />
        <input
          className="container__registration-form_input-password"
          type="text"
          placeholder="Пароль..."
          value=""
        />
      </div>
      <button type="submit" className="сontainer__registration-form_button">
        Зарегистрироваться
      </button>
    </form>
  );
};

export default Registration;
