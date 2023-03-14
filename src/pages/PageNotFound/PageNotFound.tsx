import React from 'react';

const PageNotFound = () => {
  return (
    <div className="container__page-not-found">
      <div className="container__page-not-found_wrapper">
        <div className="container__page-not-found_title">
          Страница не найдена
        </div>
        <div className="container__page-not-found_text">
          Кажется, что страница, которую вы ищете, где-то потерялась, но не
          беспокойтесь, мы вас вернем.
        </div>
        <button className="container__page-not-found_button">Вернуться</button>
      </div>
      <div className="container__page-not-found_img"></div>
    </div>
  );
};

export default PageNotFound;
