import React from 'react';
import ModalUtil from '../../context/ModalUtil';
import './Button.css';

const Button = ({children, containername, label, redirect, modal, ...props}) => {
  // Defaults:
  containername ||= 'btn-ctnr';
  props.className ||= 'btn';
  props.type ||= 'button';
  if (modal) props.onClick = () => ModalUtil.open(modal, redirect);

  return (
    <div className={containername}>
      <button {...props}>
        {label}
        {children}
      </button>
    </div>
  );
};


export default Button;

