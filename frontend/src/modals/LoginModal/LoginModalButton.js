import React from 'react'
import Button from '../../blocks/Button'
import LoginModal from './LoginModal'

function LoginModalButton({redirect}) {

  // TODO: link redirect here
  return (
    <div className='LoginModalButton'>
      <Button label='Login' zigzag='TODO' redirection='/write' modal={ LoginModal({redirect: '/write'}) } />
    </div>
  )
}

export default LoginModalButton
