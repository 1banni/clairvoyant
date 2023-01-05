import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginModal, { LoginModalButton } from '../../modals/LoginModal';
import './Navigation.css';
import site_logo from '../../assets/logo_with_name.png';

import ModalUtil from '../../context/ModalUtil';



function NavBar() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginModalButton />
        {/* <button onClick={ openTestModal } className="btn">Open Test Modal</button> */}
      </>
    );
  }

  return (
    <div>
    <ul>
      <li>
        <NavLink exact to="/"><img src={site_logo} alt="Circles" height="30" />Medium</NavLink>
        {sessionLinks}
      </li>
    </ul>
    </div>
  );
}

export default NavBar;
