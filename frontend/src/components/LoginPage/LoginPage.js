// React/Redux imports
import React from 'react';
import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
// src imports
import { useInput, useSubmit } from '../../hooks';
import { login } from '../../store/session'
import { FormErrors, Input, SubmitButton } from '../Blocks';
import './LoginPage.css'



const LoginPage = () => {
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  // const state = useSelector(state => state);
  // const [credential, setCredential] = useState('');
  const [credential, credentialChange] = useInput('');
  const [password, passwordChange] = useInput('');
  const [errors, setErrors, handleSubmit] = useSubmit({
    createAction: () => { return login({ credential, password }) },
    onSuccess: () => history.push('/')
  })

  if (sessionUser) return <Redirect to="/" />;
  return (
    <form onSubmit={handleSubmit}>
      <FormErrors className='login-errors' errors={errors}/>
      <Input label="Username or Email"
        type="text"
        value={credential}
        onChange={credentialChange}
        required
      />
      <Input label="Password"
        type="password"
        value={password}
        onChange={passwordChange}
        required
      />
      <SubmitButton label="Sign In"/>
    </form>
  );
}

export default LoginPage;
