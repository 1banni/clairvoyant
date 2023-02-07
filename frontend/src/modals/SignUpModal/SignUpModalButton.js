import React from 'react'
import Button from '../../blocks/Button'
import SignUpModal from './SignUpModal'

function SignUpModalButton() {
  return (
    <div className='SignUpModalButton'>
      <Button label='Sign Up' modal={ SignUpModal } />
    </div>
  )
}

export default SignUpModalButton;
