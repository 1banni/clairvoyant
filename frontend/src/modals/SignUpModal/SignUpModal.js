import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInput, useSubmit } from '../../hooks';
import { login, signup } from '../../store/session';
import { Modal } from '../../context/Modal';
import { FormErrors, Input } from '../../blocks/Form';
import LoginModal from '../LoginModal';
import Button from '../../blocks/Button';
import useStateChange from '../../hooks/useStateChange';
import ReactQuill from 'react-quill';
import Image from '../../blocks/Image/Image';


const SignUpModal = (props) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail, emailChange] = useStateChange('');
  const [name, setName, nameChange] = useStateChange('');
  const [username, setUsername, usernameChange] = useStateChange('');
  const [bio, setBio, bioChange] = useStateChange('');
  const [password, setPassword, passwordChange] = useStateChange('');
  const [confirmPassword, setConfirmPassword, confirmPasswordChange] = useStateChange('');
  const [photoFile, setPhotoFile] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [errors, setErrors] = useState([])

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('user[email]', email);
    formData.append('user[username]', username);
    formData.append('user[name]', name);
    formData.append('user[bio]', bio);
    formData.append('user[password]', password);
    if (photoFile) formData.append('user[photo]', photoFile);

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
    const file = e.currentTarget.files[0];

    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        setPhotoFile(file);
        setPhotoUrl(fileReader.result);
      };
    }
  };


  return (
    <Modal>
      <div className='modal signup'>
      <div className='modal-background signup'>
        <h2 className='sign-up-with-email'>Sign up with email</h2>

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
            className='bio-input-label'
            type='text'
            // value={bio}
            // onChange={bioChange}
            placeholder='Bio (below)'
            readOnly={true}
            required
          />
          {/* <h4 className='header-small'>Bio</h4> */}
          <div className='quill-wrapper'>
            <ReactQuill theme='snow'
              modules={{toolbar: false}}
              formats={[]}
              value={bio}
              onChange={setBio}
              id='reactquill'
              toolbar={false}
            />
          </div>

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

          <div className='upload-preview'>
            <div className='upload'>

              <Input label=''
                className='profile-picture-label'
                containername='profile-picture-label-ctnr'
                type='text'
                // value={bio}
                // onChange={bioChange}
                placeholder='Upload Profile Picture'
                readOnly={true}
                required
              />
              {/* <label>Upload Profile Pitcure</label> */}

              <div className='upload-profile-picture'>
                <input
                  type='file'
                  accept='.jpg, .jpeg, .png'
                  // multiple
                  onChange={handlePhoto}
                  id='choose-files'
                />
              </div>

            </div>

            <div className='preview'>
                 {/* TODO - if photoUrl is truthy, render an image of that photo with a heading of Image preview */}
                {photoUrl &&
                <Image url={photoUrl} key={photoUrl.uniqeId} alt='preview' />
                }
            </div>
          </div>

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
