import React, { useState } from 'react';
import Input from './Input';
// import { object, string } from 'yup';

const RegistrationForm = () => {
  const [data, setData] = useState({ email: '', password: '', stayOn: false });
  // const [errors, setErrors] = useState({});

  const handleChange = (event: any): void => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // let userSchema = object({
  //   email: string().email().required('Email обязателен для заполнения'),
  //   password: string().email().required('Пароль обязателен для заполнения'),
  // });

  return (
    <form className="container__form-authorization">
      <div className="container__form_title">Регистрация</div>
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
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegistrationForm;
