import React from 'react';

const Form = () => {
  return (
    <form className="container__form">
      <input
        className="container__form-input-city"
        type="text"
        placeholder="Найти город..."
        value=""
      />
      <button type="submit" className="сontainer__form-button-search">
        Поиск
      </button>
    </form>
  );
};

export default Form;
