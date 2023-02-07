import React, {} from 'react';
import { useInput, useSubmit } from '../../hooks';
import { login } from '../../store/session';
import { Modal } from '../../context/Modal';
import Button from '../../blocks/Button';
import { FormErrors, Input } from '../../blocks/Form';
import SignUpModal from '../SignUpModal';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

// const closeButtonImg = require('../../assets/png/close-button.png')

function LoginModal(props) {
  const history = useHistory();
  const [credential, credentialChange] = useInput('');
  const [password, passwordChange] = useInput('');
  const sessionUser = useSelector(state => state.session.user);

  // console.log('props');
  // console.log(props);

  let [errors, handleSubmit] = useSubmit({
    createAction: () => login({ credential, password }),
    onSuccess: () => {if (sessionUser) {
      props.close();
      if (props.redirect) history.push(props.redirect)
    } },
  });

  let [, handleDemo] = useSubmit({
    createAction: () => login({
      credential: 'demo@demo.com',
      password: 'password'
    }),
    onSuccess: () => {
      props.close();
      if (props.redirect) history.push(props.redirect);
    },
  });

  // console.log('props');
  // console.log(props);

  return (
    sessionUser ? (<></>)
    : (<Modal>
      <div className='modal'>
      <div className='modal-background'>
        <h2>Sign in with email</h2>
        <p>Enter the email address and password associated with your account. Or, click the Demo User button.</p>
        {errors ? <FormErrors className='login-errors' errors={errors}/> : ''}
        <form onSubmit={handleSubmit}>
          <Input label=''
            className='credentials email'
            type='text'
            value={credential}
            onChange={credentialChange}
            placeholder='Email'
            required
          />
          <br/>
          <Input label=''
            className='credentials password'
            type='password'
            value={password}
            onChange={passwordChange}
            placeholder='Password'
            required
          />
          <br/>
          <Button type='submit' label='Login' />
          <Button label='Sign Up' modal={SignUpModal} />
          <Button onClick={handleDemo}>Demo User</Button>
      </form>
      <Button containername='close-btn-container'
              className='close-btn'
              onClick={props.close}
              label='X'
      />
    </div>
    </div>
    </Modal>)
  );
}

export default LoginModal;








