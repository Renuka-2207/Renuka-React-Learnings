import React from 'react';

const Input = ({ label, id, type, placeholder, autoComplete }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} autoComplete={autoComplete} />
    </div>
  );
};

export default Input;