import React from 'react'
import ModalButton from '../../context/ModalButton'
import LoginModal from './LoginModal'

function LoginModalButton() {
  return (
    <div className="LoginModalButton">
      <ModalButton label="Login" modal={LoginModal} />
    </div>
  )
}

export default LoginModalButton
