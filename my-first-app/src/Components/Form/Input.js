import React from 'react';
import Form from './Form.js';



const Input = ({label, id, type, placeholder}) => {
  return (
    <div>
      <label htmlFor = {id}> {label} </label>
      <input id = {id} type = {type} placeholder = {placeholder}/>

      <Form/>
    </div>
  )
}

export default Input;