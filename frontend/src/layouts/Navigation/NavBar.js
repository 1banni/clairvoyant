import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginModal from '../../modals/LoginModal';
import './Navigation.css';
import site_logo from '../../assets/logo_with_name.png';
import TestModal from '../../context/TestModal';
import ModalRoot from '../../context/ModalRoot';
import { ModalProvider } from '../../context/Modal';
import ModalService from '../../context/ModalService';

function NavBar() {
  const sessionUser = useSelector(state => state.session.user);

  const openTestModal = () => {
    // can also pass in props where {} is
    console.count('App.js openTestModal');
    ModalService.open(TestModal);
  }

  const openLoginModal = () => {
    console.count('NavBar.js openLoginModal');
    ModalService.open(LoginModal);
  }


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <ModalRoot />
        <button onClick={ openTestModal } className="btn">Open Test Modal</button>
        <button onClick={ openLoginModal } className="btn">Login</button>
        {/* <LoginModal /> */}
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

export default NavBar;
