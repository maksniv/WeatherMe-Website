const REQUIRED_FIELD = 'Обязательно для заполнения';

export const cityValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return true;
    }

    return 'Вводите название города на русском языке';
  },
};

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/^.{8,}$/)) {
      return true;
    }

    return 'Введите минимум 8 знаков';
  },
};
