// frontend/src/components/LoginFormModal/LoginForm.js

import React, {  } from 'react';
import './LoginModal.css';
import { useInput, useSubmit } from '../../hooks';
import { login } from '../../store/session';
import {FormErrors, Input, SubmitButton} from '../../components/Form';
import { NavLink } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import ModalBody from '../../context/ModalBody';

function LoginModal(props) {
  const [credential, credentialChange] = useInput('');
  const [password, passwordChange] = useInput('');
  let [errors, handleSubmit] = useSubmit({
    createAction: () => login({ credential, password })
  });

  return (
    <Modal>
    <div className="modal">
    <div className="box">
      <h2>Sign in with email</h2>
      <p>Enter your email address and password.</p>
      <form onSubmit={handleSubmit}>
        <Input label=""
          className="credentials email"
          type="text"
          value={credential}
          onChange={credentialChange}
          placeholder="Email"
          required
        /><br/>
        <Input label=""
          className="credentials password"
          type="password"
          value={password}
          onChange={passwordChange}
          placeholder="Password"
          required
        /><br/>
        <div className="button-container">
          <SubmitButton label="Login" className="login-button"/>
        </div>
        <FormErrors className='login-errors' errors={errors}/>
      </form>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/demouser">Demo User</NavLink>
      <p>DEMO USER LINK</p>
      {/* TODO: ADD A LINK TO '< All sign in options' (prev-modal)*/}
      <button onClick={ props.close } className="btn">Close Modal</button>
    </div>
    </div>
    </Modal>
  );
}

export default LoginModal;




/*
const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const state = useSelector(state => state);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const res = dispatch(sessionActions.login({ credential, password }));

        if (res && res.user) {
            return <Redirect to="/" />
        } else {
            setErrors(['Invalid username or password'])
        }
        // return dispatch(sessionActions.login({ credential, password }))
        //     .catch(async (res) => {
        //         let data;
        //         try {
        //             // .clone() allows you to read the response body twice
        //             data = await res.clone().json();
        //         } catch {
        //             data = await res.text();
        //         }
        //         if (data?.errors) setErrors(data.errors);
        //         else if (data) setErrors([data]);
        //         else setErrors([res.statusText]);
        //     })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='login-form'>
                <h2 className="login-form-message">Sign in with email</h2>
                <label className="your-email">Your email</label>
                <br/>
                    <input
                        className="text-input-centered"
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        placeholder="Email"
                        required
                    /> <br/>
                <label>
                    <input
                        className="text-input-centered"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    /> <br/>
                </label>

                <button type="submit">Submit</button>
                <p>TBU: SIGN IN WITH GOOGLE</p>
                <p>DEMO USER LINK</p>
            </form>
            <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
        </>
    );
};

export default LoginFormPage;

*/





