import React, { useEffect } from 'react';
import {
  useForm,
  SubmitHandler,
  Controller,
  useFormState,
} from 'react-hook-form';
import Input from '../../../components/Input/Input';
import { cityValidation } from '../../../validation';

interface IFormInput {
  searchCity: string;
}
type FormProps = {
  onChange: any;
};

const Form = ({ onChange }: FormProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<IFormInput>({
    mode: 'onChange',
    defaultValues: {
      searchCity: '',
    },
  });

  const { errors, isValid } = useFormState({ control });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    onChange(data);
  };

  useEffect(() => {
    reset({
      searchCity: '',
    });
  }, [isSubmitSuccessful]);

  return (
    <form
      className="container__form-search-weather"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="searchCity"
        control={control}
        rules={cityValidation}
        render={({ field }) => (
          <Input
            className="container__form-input-city"
            id="searchCity"
            name="searchCity"
            type="text"
            onChange={(event: any) => field.onChange(event)}
            value={field.value}
            placeholder="Найти город..."
            errors={errors.searchCity?.message}
          />
        )}
      />
      <button
        type="submit"
        disabled={!isValid}
        className="сontainer__form-button-search"
      >
        Поиск
      </button>
    </form>
  );
};

export default Form;
