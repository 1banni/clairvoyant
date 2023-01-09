import { useInput, useSubmit } from "../../hooks";
import { login, signup } from "../../store/session";
import ModalUtil from "../../context/ModalUtil";
import { Modal } from "../../context/Modal";
import { FormErrors, Input } from "../../components/Form";
import LoginModal from "../LoginModal";
import LoginModalButton from "../LoginModal/LoginModalButton";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";


function SignUpModal(props) {
  const [email, emailChange] = useInput('');
  const [username, usernameChange] = useInput('');
  const [password, passwordChange] = useInput('');
  const [confirmPassword, confirmPasswordChange] = useInput('');
  const history = useHistory();

  const wrap = {
    bool: (password === confirmPassword),
    errors: ['Confirm Password field must be the same as the Password field']
  }


  let [errors, handleSubmit] = useSubmit({
    createAction: () => signup({ email, username, password }),
    onSuccess: () => props.close(),
    wrap
  });
  let [, handleDemo] = useSubmit({
    createAction: () => login({ credential: "demo@demo.com", password: "password" }),
    onSuccess: () => props.close(),
  });


  return (
    <Modal>
      <div className="modal">
      <div className="modal-background">
        <h2>Sign up with email</h2>
        <p>Enter your email address and password.</p>
        {errors ? <FormErrors className='login-errors' errors={errors}/> : ''}
        <form onSubmit={handleSubmit}>
          <Input label=""
            className="credentials email"
            type="text"
            value={email}
            onChange={emailChange}
            placeholder="Email"
            required
          />
          <Input label=""
            className="credentials username"
            type="text"
            value={username}
            onChange={usernameChange}
            placeholder="Username"
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
          <Input label=""
            className="credentials password confirm"
            type="password"
            value={confirmPassword}
            onChange={confirmPasswordChange}
            placeholder="Confirm Password"
            required
          />
          <br/>
          <Button type="submit" label="Sign Up"  />
          <Button label="Login" modal={LoginModal}/>
      </form>
      <Button className="btn demo" onClick={handleDemo} label="Demo User"/>
      <Button className="close-btn" onClick={props.close}>X</Button>
    </div>
    </div>
    </Modal>
  );
}

export default SignUpModal;
