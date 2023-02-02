import React from 'react';

function Input({label, ...props}) {
  props.containername ||= "input";
  props.className ||= "input-label";

  return (
    <div className={props.containername}>
      <h4 className={props.className}>
        {label}
      </h4>
      <br/>
      <input {...props} />
    </div>
  )
}

export default Input;
