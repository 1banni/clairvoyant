import React from 'react';
import ModalUtil from '../../context/ModalUtil';
import './Button.css';

// export default function Button({type, className, children, label, ...props}) {
  export default function Button({children, containerName, label, modal, ...props}) {
  // defaults:
  containerName ||= "btn-ctnr";
  props.className ||= "btn";
  props.type ||= "button";
  props.onClick ||= (modal ? () => ModalUtil.open(modal) : () => {})

  return (
    <div className={containerName}>
      <button {...props}>
        {label}
        {children}
      </button>
    </div>
  )
}

