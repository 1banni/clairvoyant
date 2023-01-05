import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SubmitButton } from '../components/Form'


const closeButtonImg = require('../assets/close-button.png')

function ModalCloseButton(label, ...props) {
  return (
    <>
    <div className="btn-container">
      <div className="btn-close-modal-x">
        <button type="button" {...props}>
          {/* {label} */}
      </button>
    </div>
    </div>
    </>
  )
}

export default ModalCloseButton


