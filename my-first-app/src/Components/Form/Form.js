import React from 'react';
import Input from './Input.js';

const Form = () => {
  return (
    <div>
      <label htmlFor = "email" label = "Email">   </label>
      <input label = "Email" id = "email" type = "email" placeholder = "Enter your email id" autocomplete = "email"/>
      <br/><br/>

      <label htmlFor = "password"> Current Password:  </label>
      <input id = "password" type = "password" placeholder = "Enter your password" autocomplete = "current-password"/>
      <br/><br/>

      <input id = "submit" type = "submit"/>


    </div>

  )
};

export default Form;