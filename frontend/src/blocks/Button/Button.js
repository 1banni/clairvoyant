import React from 'react';
import ModalUtil from '../../context/ModalUtil';
import './Button.css';

// export default function Button({type, className, children, label, ...props}) {
const Button = ({children, containername, label, redirect, modal, ...props}) => {
  // defaults:
  containername ||= "btn-ctnr";
  props.className ||= "btn";
  props.type ||= "button";
  if (modal) props.onClick = () => ModalUtil.open(modal, redirect);
  // props.onClick ||= (modal ? () => ModalUtil.open(modal, redirect) : () => {});

  console.log('props.onClick');
  console.log(props.onClick);

  if (redirect) {
    console.log('redirect');
    console.log(redirect);
  }

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

