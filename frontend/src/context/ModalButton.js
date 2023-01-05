import React from "react";
import ModalUtil from "./ModalUtil";

function ModalButton({label, modal, children, ...props}) {
  const openModal = () => ModalUtil.open(modal);

  return (
    <div className="btn-container">
      <button onClick={ openModal } className="btn" {...props}>
        {label}
        {children}
      </button>
    </div>
  )
}
export default ModalButton;



