// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { Redirect } from 'react-router-dom';
// import { useInput } from '../../hooks';
// import * as sessionActions from '../../store/session'
// import './SignUpPage.css'


// const SignUpPage = () => {
//   const dispatch = useDispatch();
//   const sessionUser = useSelector(state => state.session.user);
//   const [email, emailChange] = useInput('');
//   const [username, usernameChange] = useInput('');
//   const [password, passwordChange] = useInput('');
//   const [confirmPassword, confirmPasswordChange] = useInput('');
//   const [errors, setErrors] = useState([]);

//   if (sessionUser) return <Redirect to='/' />;

//   const handleSubmit = async e => {
//     e.preventDefault();
//     if (password === confirmPassword) {
//       setErrors([]);
//       return dispatch(sessionActions.signup({email, username, password}))
//         .catch(async (res) => {
//           let data;
//           try {
//             data = await res.clone().json();
//           } catch {
//             data = await res.text();
//           }
//           if (data?.errors) setErrors(data.errors);
//           else if (data) setErrors([data]);
//           else setErrors([res.statusText]);
//         });
//     } else {
//       return setErrors['Passwords don\'t match']
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <ul>
//         {errors.map(error => <li key={error}>{error}</li>)}
//       </ul>
//       <label>
//         Email
//         <input
//           type='text'
//           value={email}
//           onChange={emailChange}
//           required
//         />
//       </label>
//       <label>
//         Username
//         <input
//           type='text'
//           value={username}
//           onChange={usernameChange}
//           required
//         />
//       </label>
//       <label>
//         Password
//         <input
//           type='password'
//           value={password}
//           onChange={passwordChange}
//           required
//         />
//       </label>
//       <label>
//         Confirm Password
//         <input
//           type='password'
//           value={confirmPassword}
//           onChange={confirmPasswordChange}
//           required
//         />
//       </label>
//       <button type='submit'>Sign Up</button>
//     </form>
//   );
// }

// export default SignUpPage;


