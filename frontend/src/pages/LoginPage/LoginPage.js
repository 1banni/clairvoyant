// // React/Redux imports
// import React from 'react';
// import { useSelector } from 'react-redux'
// import { Redirect, useHistory } from 'react-router-dom';
// import './LoginPage.css'
// import { useInput, useSubmit } from '../../hooks';
// import { FormErrors, Input } from '../../blocks/Form';
// import Button from '../../blocks/Button';
// import { login } from '../../store/session'

// const LoginPage = () => {
//   const history = useHistory();
//   const sessionUser = useSelector(state => state.session.user);
//   const [credential, credentialChange] = useInput('');
//   const [password, passwordChange] = useInput('');
//   const [errors, handleSubmit] = useSubmit({
//     createAction: () => login({ credential, password }),
//     onSuccess: () => history.push('/')
//   })

//   if (sessionUser) return <Redirect to='/' />;
//   return (
//     <form className='login-form-container' onSubmit={handleSubmit}>
//       <FormErrors className='login-errors' errors={errors}/>
//       <br/>
//       <Input label=''
//         placeholder='Username or Email'
//         className='username'
//         type='text'
//         value={credential}
//         onChange={credentialChange}
//         required
//       />
//       <br/>
//       <Input label=''
//         placeholder='Password'
//         className='password'
//         type='password'
//         value={password}
//         onChange={passwordChange}
//         required
//       />
//       <br/>
//       <Button type='submit' label='Sign In' />
//     </form>
//   );
// }

// export default LoginPage;
