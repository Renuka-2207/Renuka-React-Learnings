import React, { useState } from 'react';
import Input from './Input.js';

const Form = () => {
  const [inputValues, setInputValues] =useState( {
  fname: "",
    lname: "",

});
  const [errors, setErrors] = useState( {} );
 const [submitting, setSubmitting] = useState(false);
  //Function to validate
  const validateValues = (formData) => {
    let errors = {};
    if (formData.fname.length < 1) {
      {errors.fname = "First Name field is required";
    }
    if (formData.lname.length < 1) {
      errors.lname = "Last name field is required" ;
    }
    return errors;
  };
  //on change event handler
  const handleChange = (e) => {
    setInputValues( {
      ...inputValues, [e.target.name] :e.target.value 
    });
  };
  //submit function
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputValues));
    setSubmitting(true);
  };

  return (
    <form onSubmit = {handleSubmit}>
            {/* Use the custom Input component for the all the form fields */}
      <Input label="First Name" id="fname" type="text" placeholder="Enter your first name" autoComplete="given-name" value = {inputValues.fname} onChange = {handleChange}/>
      <br/><br/>

      <Input label="Last Name" id="lname" type="text" placeholder="Enter your last name" autoComplete="family-name" value = {inputValues.lname} onChange = {handleChange}/>
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