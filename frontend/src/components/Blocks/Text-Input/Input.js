import React from 'react';
import './Input.css';

function Input({label, ...inputProps}) {
  return (
    <div className="input">
      <h4>{label}</h4><br/>
      <input {...inputProps} />
    </div>
  )
}

export default Input;
