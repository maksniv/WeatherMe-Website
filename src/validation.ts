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