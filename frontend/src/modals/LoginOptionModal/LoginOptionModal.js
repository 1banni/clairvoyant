import React from 'react'
import { Modal } from '../../context/Modal';
import Button from '../../blocks/Button';
import { useSelector } from 'react-redux';

const LoginOptionModal = () => {
  const sessionUser = useSelector(state => state.session.user);

  return (
    sessionUser ? (<></>)
    : (<Modal>
      <div className='modal'>
      <div className='modal-background'>
        <h2>Sign in with email</h2>
        <p>Enter the email address and password associated with your account. Or, click the Demo User button.</p>
          {/* <Button label='Sign Up' modal={SignUpModal} /> */}
          {/* <Button onClick={handleDemo}>Demo User</Button> */}
           <Button containername='close-btn-container'
              className='close-btn'
              // onClick={props.close}
              label='X'
            />
    </div>
    </div>
    </Modal>)
  );
}

export default LoginOptionModal;