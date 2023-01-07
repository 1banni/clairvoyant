
import React from 'react'
import ModalUtil from '../../context/ModalUtil';

// export default function Button({type, className, children, label, ...props}) {
export default function Button({children, label, modal, ...props}) {
  // defaults:
  props.containerName ||= "btn-container";
  props.className ||= "btn";
  props.type ||= "button";
  props.onClick ||= (modal ? () => ModalUtil.open(modal) : () => {})

  return (
    <div className={props.containerName}>
      <button {...props}>
        {label}
        {children}
      </button>
    </div>
  )
}

