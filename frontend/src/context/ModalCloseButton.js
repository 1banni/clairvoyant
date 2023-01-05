import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SubmitButton } from '../components/Form'


const closeButtonImg = require('../assets/close-button.png')

function ModalCloseButton({...props}) {
  return (
    <>
    <div className="btn-close-modal-x">
      <SubmitButton label="Close" className="btn" onSubmit={props.close}>
        {/* <img src={closeButtonImg} alt="close-button-img"/> */}
      </SubmitButton>
    </div>
    </>
  )
}

export default ModalCloseButton


