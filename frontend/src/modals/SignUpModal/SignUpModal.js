import { useInput, useSubmit } from "../../hooks";
import { login, signup } from "../../store/session";
import ModalUtil from "../../context/ModalUtil";
import { Modal } from "../../context/Modal";
import { FormErrors, Input } from "../../components/Form";
import LoginModal from "../LoginModal";
import LoginModalButton from "../LoginModal/LoginModalButton";
import Button from "../../components/Button";


function SignUpModal(props) {
  const [credential, credentialChange] = useInput('');
  const [password, passwordChange] = useInput('');
  const [confirmPassword, confirmPasswordChange] = useInput('');
  let [errors, handleSubmit] = useSubmit({
    createAction: () => signup({ credential, password })
  });
  let [, handleDemo] = useSubmit({
    createAction: () => login({ credential: "demo@demo.com", password: "password" }),
    onSuccess: () => props.close(),
  });

  const openLoginModal = () => ModalUtil.open(LoginModal);

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
          {/* TODO: CONFIRM PASSWORD = CONFIRM PASSWORD */}
          {/* <button onClick={ openLoginModal } className="btn">Login</button> */}
          <LoginModalButton />
          {/* <button className="btn" onClick={handleDemo}>Demo User</button> */}
      </form>
      {/* TODO: ADD A LINK TO '< All sign in options' (prev-modal)*/}
      <Button className="btn demo" onClick={ handleDemo } label="Demo User"/>
      <Button className="close-btn" onClick={ props.close }>X</Button>
    </div>
    </div>
    </Modal>
  );
}

export default SignUpModal;
