// frontend/src/components/LoginFormModal/LoginForm.js
import React, {  } from 'react';
import { NavLink } from 'react-router-dom';
import { useInput, useSubmit } from '../../hooks';
import { login } from '../../store/session';
import { Modal } from '../../context/Modal';
import Button from '../../components/Button';
import {FormErrors, Input} from '../../components/Form';
import SignUpModal from '../SignUpModal';
import { useSelector } from 'react-redux';

const closeButtonImg = require('../../assets/close-button.png')

function LoginModal(props) {
  const sessionUser = useSelector(state => state.session.user);
  const [credential, credentialChange] = useInput('');
  const [password, passwordChange] = useInput('');

  let [errors, handleSubmit] = useSubmit({
    createAction: () => login({ credential, password }),
    onSuccess: () => {
      console.count('in login success');
      // if password
      if (sessionUser) {
        props.close()
      }

    },
  });
  let [, handleDemo] = useSubmit({
    createAction: () => login({ credential: "demo@demo.com", password: "password" }),
    onSuccess: () => props.close(),
  });

  return (
    <Modal>
      <div className="modal">
      <div className="modal-background">
        <h2>Sign in with email</h2>
        <p>Enter the email address and password associated with your account. Or, click the Demo User button.</p>
        {errors ? <FormErrors className='login-errors' errors={errors}/> : ''}
        <form onSubmit={handleSubmit}>
          <Input label=""
            className="credentials email"
            type="text"
            value={credential}
            onChange={credentialChange}
            placeholder="Email"
            required
          />
          <br/>
          <Input label=""
            className="credentials password"
            type="password"
            value={password}
            onChange={passwordChange}
            placeholder="Password"
            required
          />
          <br/>
          <Button type="submit" label="Login" />
          <Button className="btn" label="Sign Up" modal={SignUpModal} />
          <Button onClick={handleDemo}>Demo User</Button>
      </form>
      <Button containerName="close-btn-container" className="close-btn" onClick={ props.close } >X</Button>
    </div>
    </div>
    </Modal>
  );
}

export default LoginModal;








