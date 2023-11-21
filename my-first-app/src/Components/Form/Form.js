import React from 'react';
import Input from './Input.js';

const Form = () => {
  return (
    <form>
            {/* Use the custom Input component for the all the form fields */}
      <Input label="First Name" id="fname" type="text" placeholder="Enter your first name" autoComplete="given-name"/>
      <br/><br/>

      <Input label="Last Name" id="lname" type="text" placeholder="Enter your last name" autoComplete="family-name"/>
      <br/><br/>

      <Input label="Contact Number" id="phone" type="tel" placeholder="Enter your mobile number" autoComplete="tel"/>
      <br/><br/>

      <Input label="Email" id="email" type="email" placeholder="Enter your email id" autoComplete="email" />
      <br/><br/>

      <Input label="Password" id="password" type="password" placeholder="Enter your password" autoComplete="new-password" />
      <br/><br/>

      <input id="submit" type="submit" value="Submit" />
    </form>
  );
};

export default Form;
