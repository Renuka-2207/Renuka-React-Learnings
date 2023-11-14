import React from 'react';
import Input from './Input.js';

const Form = () => {
  return (
    <form>
      <Input label="Email" id="email" type="email" placeholder="Enter your email id" autoComplete="email" />
      <br/><br/>

      <Input label="Current Password" id="password" type="password" placeholder="Enter your password" autoComplete="current-password" />
      <br/><br/>

      <input id="submit" type="submit" value="Submit" />
    </form>
  );
};

export default Form;