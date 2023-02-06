import React from 'react';

function Input({...props}) {
  props.containername ||= 'input';
  props.className ||= 'input-label';
  props.label ||= '';

  return (
    <div className={props.containername}>
      <h4 className={props.className}>
        {props.label}
      </h4>
      <br/>
      <input {...props} />
    </div>
  )
}

export default Input;
