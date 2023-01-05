import React from 'react'
import Button from '../../components/Button'
import LoginModal from './LoginModal'

function LoginModalButton() {
  return (
    <div className="LoginModalButton">
      <Button label="Login" modal={ LoginModal } />
    </div>
  )
}

export default LoginModalButton
