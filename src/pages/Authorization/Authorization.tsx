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
            <a
              href="#"
              role="button"
              onClick={toggleFormType}
              className="container__form_link"
            >
              Войти!
            </a>
          </span>
        </div>
      ) : (
        <div className="container__forms">
          <AuthorizationForm />
          <span className="сontainer__form_span">
            Еще нет аккаунта?
            <a
              href="#"
              role="button"
              onClick={toggleFormType}
              className="container__form_link"
            >
              Зарегистрироваться!
            </a>
          </span>
        </div>
      )}
    </>
  );
};

export default Authorization;
