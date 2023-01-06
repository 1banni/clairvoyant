import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileMenu from './ProfileMenu';
import site_logo from '../../assets/logo_with_name.png';
import user_logo from '../../assets/profile.png';
import write_logo from '../../assets/write-logo.png'
import Button from '../../components/Button';
import LoginModal from '../../modals/LoginModal';
import './Navigation.css';


function NavBar() {
  const sessionUser = useSelector(state => state.session.user);

  const l = 9;

  let sessionLink;
  if (sessionUser) {
    sessionLink = (
      <ProfileMenu user={sessionUser} />
    );
  } else {
    sessionLink = (
      <>
        <Button className="login-modal-btn"
                containerName="login-modal-btn-container"
                modal={ LoginModal }>
          <img src={user_logo} alt="profile-img" height="30" />
        </Button>
        {/* <button onClick={ openTestModal } className="btn">Open Test Modal</button> */}
      </>
    );
  }

  return (
    <div className="nav-bar-wrapper">
    <div className="nav-bar">
      <div className="homepage-link">
        <NavLink exact to="/"><img src={site_logo} alt="diamonds" height="30" /></NavLink>
      </div>
      <div className="other-links">
        <div className="write-link">
          <NavLink exact to="/articles/new"><img src={write_logo} alt="diamonds" height="30" /></NavLink>
        </div>
        <div className="session-link">
          {sessionLink}
        </div>
      </div>
    </div>
    </div>
  );
}

export default NavBar;
