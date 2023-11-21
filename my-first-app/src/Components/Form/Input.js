// Import the React library to define React components
import React from 'react';

// Define a functional component named Input that takes in props: label, id, type, placeholder, and autoComplete
const Input = ({ label, id, type, placeholder, autoComplete }) => {
  // Render a div containing a label and an input element
  return (
    <div>
      {/* Associate the label with the input using the 'for' attribute */}
      <label htmlFor={id}>{label}</label>
      {/* Render the input element with specified id, type, placeholder, and autoComplete attributes */}
      <input id={id} type={type} placeholder={placeholder} autoComplete={autoComplete} />
    </div>
  );
};


export default Input;
