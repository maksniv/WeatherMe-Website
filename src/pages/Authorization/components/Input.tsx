import React from 'react';

export type InputProps = {
  className: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
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
  return (
    <>
      <input
        className={className}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {errors && <p>{errors}</p>}
    </>
  );
};

export default Input;
