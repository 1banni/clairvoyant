import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInput, useSubmit } from '../../hooks';
import { login, signup } from '../../store/session';
import { Modal } from '../../context/Modal';
import { FormErrors, Input } from '../../blocks/Form';
import LoginModal from '../LoginModal';
import Button from '../../blocks/Button';
import { useTheme } from 'styled-components';


const SignUpModal = (props) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, emailChange] = useInput('');
  const [name, nameChange] = useInput('');
  const [username, usernameChange] = useInput('');
  const [password, passwordChange] = useInput('');
  const [confirmPassword, confirmPasswordChange] = useInput('');
  const [photoFile, setPhotoFile] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [errors, setErrors] = useState([])

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('user[email]', email);
    formData.append('user[username]', username);
    formData.append('user[name]', name);
    formData.append('user[password]', password);
    if (photoFile) formData.append('user[photo]', photoFile);

    console.log('photoFile');
    console.log(photoFile);

    console.log('photoUrl');
    console.log(photoUrl);

    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(signup(formData))
        .catch(async res => {
          let data;
          try {
            data = await res.clone().json();
          } catch {
            data = await res.text();
          }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        })
        .then(props.close());
    } else {
      return setErrors(['Confirm Password does not match Password']);
    }
  }

  // let [errors, handleSubmit] = useSubmit({
  //   // createAction: () => signup({ email, username, password }),
  //   createAction: () => signup(formData),
  //   onSuccess: () => props.close(),
  //   wrap
  // });

  let [, handleDemo] = useSubmit({
    createAction: () => login({ credential: 'demo@demo.com', password: 'password' }),
    onSuccess: () => props.close(),
  });


  const handlePhoto = async e => {
    console.log('inside of handlePhoto');
    // const file = e.target.file;
    const file = e.currentTarget.files[0];
    console.log('file');
    console.log(file);

    if (file) {
      console.log("inside handlePhoto | if (file)");
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        console.log("inside handlePhoto | if (file) | onload");
        console.log('photoFile');
        console.log(photoFile);
        setPhotoFile(file);
        console.log('photoFile');
        console.log(photoFile);
        console.log('photoUrl');
        console.log(photoUrl);
        setPhotoUrl(fileReader.result);
        console.log('photoUrl');
        console.log(photoUrl);
      };
    }
  };


  return (
    <Modal>
      <div className='modal'>
      <div className='modal-background'>
        <h2>Sign up with email</h2>

        <p>Enter your email address and password.</p>

        {errors ? <FormErrors className='login-errors' errors={errors}/> : ''}

        <form onSubmit={handleSubmit}>

          <Input label=''
            className='credentials email'
            type='text'
            value={email}
            onChange={emailChange}
            placeholder='Email'
            required
          />

          <Input label=''
            className='credentials name'
            type='text'
            value={name}
            onChange={nameChange}
            placeholder='Name'
            required
          />

          <Input label=''
            className='credentials username'
            type='text'
            value={username}
            onChange={usernameChange}
            placeholder='Username'
            required
          />

          {/* <br/> */}

          <Input label=''
            className='credentials password'
            type='password'
            value={password}
            onChange={passwordChange}
            placeholder='Password'
            required
          />

          <Input label=''
            className='credentials password confirm'
            type='password'
            value={confirmPassword}
            onChange={confirmPasswordChange}
            placeholder='Confirm Password'
            required
          />

          <br/>

          <div className='upload-profile-picture'>
            <label>Upload Profile Pitcure</label>
            <input
              type='file'
              accept='.jpg, .jpeg, .png'
              // multiple
              onChange={handlePhoto}
              id='choose-files'
            />
          </div>


          <br />

          <Button type='submit' label='Sign Up'  />

          <Button label='Login' modal={LoginModal}/>

        </form>

        <Button className='btn demo' onClick={handleDemo} label='Demo User'/>

        <Button className='close-btn' onClick={props.close}>X</Button>
      </div>
      </div>
    </Modal>
  );
}

export default SignUpModal;
