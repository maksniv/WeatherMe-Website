import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthorizationForm from './components/AuthorizationForm';
import RegistrationForm from './components/RegistrationForm';

const Authorization = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === 'registration' ? type : 'authorization'
  );

  const toggleFormType = (params: any) => {
    setFormType((prevState) =>
      prevState === 'registration' ? 'authorization' : 'registration'
    );
  };

  return (
    <>
      {formType === 'registration' ? (
        <div className="container__forms">
          <RegistrationForm />
          <span className="сontainer__form_span">
            Уже есть аккаунт?
            <button
              onClick={toggleFormType}
              className="container__form_button_link"
            >
              Войти!
            </button>
          </span>
        </div>
      ) : (
        <div className="container__forms">
          <AuthorizationForm />
          <span className="сontainer__form_span">
            Еще нет аккаунта?
            <button
              onClick={toggleFormType}
              className="container__form_button_link"
            >
              Зарегистрироваться!
            </button>
          </span>
        </div>
      )}
    </>
  );
};

export default Authorization;
