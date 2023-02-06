import React from 'react'

export function Modal(props) {
  return (
    <div id='modal'>
      <div id='modal-background' /* TODO? */ /*onClick={onClose}*/>
        <div id='modal-content'>
          {props.children}
        </div>
      </div>
    </div>
  )
}
