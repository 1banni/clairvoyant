import React from 'react';
import ModalUtil from '../../context/ModalUtil';
import './Button.css';

// export default function Button({type, className, children, label, ...props}) {
const Button = ({children, containername, label, modal, redirect, ...props}) => {
  // defaults:
  containername ||= "btn-ctnr";
  props.className ||= "btn";
  props.type ||= "button";
  props.onClick ||= (modal ? () => ModalUtil.open(modal, redirect) : () => {});

  // console.log('redirect');
  // console.log(redirect);

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

