import React from 'react';

const Input = ({ label, id, type, placeholder, autoComplete, value, onChange, errorMessage }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        // Add aria-describedby to associate the input with the error message
        aria-describedby={`${id}-error`}
      />
      {/* Display the error message if there is one */}
      {errorMessage && <p aria-live = "polite" id={`${id}-error`}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
