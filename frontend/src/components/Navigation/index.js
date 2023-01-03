import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginModal';
import './Navigation.css';
import site_logo from './site_logo.png';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }
  // debugger;
  return (
    <ul>
      <li>
        <NavLink exact to="/"><img src={site_logo} alt="Circles" height="30" />Medium</NavLink>
        {sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
