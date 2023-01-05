import { useInput, useSubmit } from "../../hooks";
import { signup } from "../../store/session";
import ModalUtil from "../../context/ModalUtil";
import { ModalWrapper } from "../../context/ModalWrapper";
import { FormErrors, Input, SubmitButton } from "../../components/Form";
import { NavLink } from "react-router-dom";
import LoginModal from "../LoginModal";
import LoginModalButton from "../LoginModal/LoginModalButton";


function SignUpModal(props) {
  const [credential, credentialChange] = useInput('');
  const [password, passwordChange] = useInput('');
  const [confirmPassword, confirmPasswordChange] = useInput('');
  let [errors, handleSubmit] = useSubmit({
    createAction: () => signup({ credential, password })
  });

  const openLoginModal = () => ModalUtil.open(LoginModal);

  return (
    <ModalWrapper>
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
          <SubmitButton label="Sign Up" className="btn" />
          {/* TODO: CONFIRM PASSWORD = CONFIRM PASSWORD */}
          {/* <button onClick={ openLoginModal } className="btn">Login</button> */}
          <LoginModalButton />
          <NavLink to="/demouser">Demo User</NavLink>
      </form>
      <p>DEMO USER LINK</p>
      {/* TODO: ADD A LINK TO '< All sign in options' (prev-modal)*/}

      <button onClick={ props.close } className="btn">X</button>
    </div>
    </div>
    </ModalWrapper>
  );
}

export default SignUpModal;
