import React, { FC } from 'react';
import Input from '../../../components/Input/Input';
import {
  useForm,
  SubmitHandler,
  Controller,
  useFormState,
} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
  email: string;
  password: string;
}

const AuthorizationForm: FC = () => {
  const { handleSubmit, control } = useForm<IFormInput>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { errors, isValid } = useFormState({ control });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    handleLogin(data.email, data.password);
  };

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
          })
        );
        navigate('/WeatherMe-Website');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      className="container__form-authorization"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="container__form_title">Авторизация</div>
      <div className="container__form_wrapper">
        <Controller
          name="email"
          control={control}
          rules={{ required: 'Обязательно для заполнения' }}
          render={({ field }) => (
            <Input
              className="container__form_input-authorization-email"
              id="email"
              name="email"
              type="email"
              placeholder="Электронная почта..."
              onChange={(event: any) => field.onChange(event)}
              value={field.value}
              errors={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: 'Обязательно для заполнения' }}
          render={({ field }) => (
            <Input
              className="container__form_input-authorization-password"
              id="password"
              name="password"
              type="password"
              placeholder="Пароль..."
              onChange={(event: any) => field.onChange(event)}
              value={field.value}
              errors={errors.password?.message}
            />
          )}
        />
      </div>
      <button
        type="submit"
        disabled={!isValid}
        className="сontainer__form_button"
      >
        Авторизоваться
      </button>
    </form>
  );
};

export default AuthorizationForm;
