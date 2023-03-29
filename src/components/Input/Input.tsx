import React, { FC, useState } from 'react';
import { Tooltip } from 'react-tooltip';

interface InputProps {
  className: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: any;
  onChange: any;
  errors?: any;
}

const Input: FC<InputProps> = ({
  className,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  errors,
}) => {
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
        data-tooltip-id={id}
        data-tooltip-place="bottom"
        data-tooltip-content={errors}
      />
      {errors && <Tooltip id={id} />}
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
    </>
  );
};

export default Input;
