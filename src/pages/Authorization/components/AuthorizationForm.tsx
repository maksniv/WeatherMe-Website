import React, { useState } from 'react';
import Input from './Input';

const AuthorizationForm = () => {
  const [data, setData] = useState({ email: '', password: '', stayOn: false });

  const handleChange = (event: any): void => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <form className="container__form-authorization" onSubmit={handleSubmit}>
      <div className="container__form_title">Авторизация</div>
      <div className="container__form_wrapper">
        <Input
          className="container__form_input-authorization"
          id="email"
          name="email"
          type="email"
          placeholder="Электронная почта..."
          value={data.email}
          onChange={handleChange}
        />
        <Input
          className="container__form_input-authorization"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль..."
          value={data.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="сontainer__form_button">
        Авторизоваться
      </button>
    </form>
  );
};

export default AuthorizationForm;
