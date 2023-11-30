import React, { useState, useRef, useEffect } from "react";
import Input from "./Input";

const Form = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);

  const formRef = useRef();
  const successMessageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fname, lname, email } = formData;
    const newErrors = {};

    if (!fname.trim()) {
      newErrors.fname = "First Name is required";
    }

    if (!lname.trim()) {
      newErrors.lname = "Last Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuccessMessage("Form submitted successfully!");
    setFormData({
      fname: "",
      lname: "",
      email: "",
    });
    setErrors({});
    formRef.current.reset();
    setFormSubmitted(true);

  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });

    setErrors({
      ...errors,
      [id]: "",
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  
  return (
    !formSubmitted ? (
      <form onSubmit={handleSubmit} ref={formRef}>
        <div>
          <Input
            label="First Name *"
            id="fname"
            type="text"
            placeholder="Enter your first name"
            autoComplete="given-name"
            value={formData.fname}
            onChange={handleInputChange}
            errorMessage={errors.fname}
          />
        </div>

        <div>
          <Input
            label="Last Name *"
            id="lname"
            type="text"
            placeholder="Enter your last name"
            autoComplete="family-name"
            value={formData.lname}
            onChange={handleInputChange}
            errorMessage={errors.lname}
          />
        </div>

        <div>
          <Input
            label="Email *"
            id="email"
            type="email"
            placeholder="Enter your email id"
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
            errorMessage={errors.email}
          />
        </div>

        <input id="submit" type="submit" value="Submit" />
      </form>
    ) : (
      <p ref = {successMessageRef} id="success-message" aria-live = "polite">{successMessage}</p>
    )
  );
};

export default Form;
