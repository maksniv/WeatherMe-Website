import React, { useState } from 'react';
import Input from './Input';

const AuthorizationForm = () => {
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
    <form className="container__form-authorization" onSubmit={handleSubmit}>
      <div className="container__form_title">Авторизация</div>
      <div className="container__form_wrapper">
        {/* <Input className={}/> */}
        {/* <input
          className="container__form_input-mail"
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Электронная почта..."
        /> */}
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
        Авторизоваться
      </button>
    </form>
  );
};

export default AuthorizationForm;
