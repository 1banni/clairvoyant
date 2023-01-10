import React from 'react'
import Button from '../../blocks/Button'
import LoginModal from './LoginModal'

function LoginModalButton() {
  return (
    <div className="LoginModalButton">
      <Button label="Login" modal={ LoginModal } />
    </div>
  )
}

export default LoginModalButton
