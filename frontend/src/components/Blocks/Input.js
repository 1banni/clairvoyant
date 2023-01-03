import React from 'react'

function Input({label, ...inputProps}) {
  return (
    <label className="input">{label}
      <input {...inputProps} />
    </label>
  )
}

export default Input;
