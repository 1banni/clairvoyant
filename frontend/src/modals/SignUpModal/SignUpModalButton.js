import React from 'react'
import ModalButton from '../../context/ModalButton'
import SignUpModal from './SignUpModal'

function SignUpModalButton() {
  return (
    <div className="SignUpModalButton">
      <ModalButton label="Sign Up" modal={SignUpModal} />
    </div>
  )
}

export default SignUpModalButton
