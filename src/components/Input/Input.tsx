import React, { useState } from 'react';

export type InputProps = {
  className: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: any;
  onChange: any;
  errors?: any;
};

const Input = ({
  className,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  errors,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <input
        className={className}
        id={id}
        name={name}
        type={showPassword ? 'text' : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {type === 'password' && (
          <label className="container__form_input-authorization_label">
            <input
              className="container__form_input-authorization_input"
              type="checkbox"
              onClick={toggleShowPassword}
            />
            <span className="container__form_input-authorization_span"></span>
            Показать пароль
          </label>
      )}
      {errors && <p className="container__form-help-block-home">{errors}</p>}
    </>
  );
};

export default Input;
